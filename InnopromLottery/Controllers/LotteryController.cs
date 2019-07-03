using System;
using System.Linq;

using System.Collections.Generic;
using System.Threading.Tasks;
using InnopromLottery.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace InnopromLottery.Controllers
{
    [Route("api/[controller]")]
    public class LotteryController: Controller
    {
        private DataContext dataContext;
        public LotteryController(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }
 
        /// <summary>
        /// Начинает новый розыгрыш
        /// </summary>
        [HttpPost]
        public async Task<ActionResult> Start([FromBody]Lottery lottery)
        {
            var c = dataContext.Lotteries.Where(l => l.Status == 1).Count();

            if(c > 0)
            {
                return BadRequest("Another lottery is running");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            lottery.Status = 1;
            await dataContext.Lotteries.AddAsync(lottery);
            await dataContext.SaveChangesAsync();

            return Ok();
        }

        /// <summary>
        /// Возвращает информацию о конкретном розыгрыше
        /// </summary>
        [HttpGet("{id}")]
        public ActionResult<Lottery> GetLottery(int id)
        {     
            return dataContext.Lotteries
                        .Include(_=>_.FirstPlacePrize)
                        .Include(_ => _.SecondPlacePrize)
                        .Include(_ => _.ThirdPlacePrize)
                        .Where(_ => _.LotteryId == id)
                        ?.First();
        }

        /// <summary>
        /// Возвращает список всех розыгрышей
        /// </summary>
        [HttpGet]
        public ActionResult<IEnumerable<Lottery>> GetList() 
        {
            return dataContext.Lotteries.Include(_=>_.FirstPlacePrize).Include(_ => _.SecondPlacePrize).Include(_ => _.ThirdPlacePrize).
            ToList();
        }

        /// <summary>
        /// Пытается завершить розыгрыш, в случае успеха - возвращает список победителей
        /// </summary>
        [HttpGet("results/{id}")]
        public async Task<ActionResult<WinnersList>> GetResults(int id) 
        {
            Lottery lottery = dataContext.Lotteries.Include(_ => _.SecondPlacePrize).Include(_ => _.FirstPlacePrize).
                    Include(_ => _.ThirdPlacePrize).Where(_ => _.LotteryId == id).First();

            if(lottery == null || lottery.Status != 1)
            {
                return BadRequest("There is no lottery with such ID or Lottery is not running");
            }           

            var winnersList = 
                new WinnersList();
            var rand =
                 new Random();
            var dataUsersList =  dataContext.Users.Where(u => u.Lottery == lottery).OrderBy(x=> rand.Next());
            if(dataUsersList.Count() < 3) {
                return BadRequest("Not enough users!");
            }
            var usersList = dataUsersList.Take(3).ToArray();

            lottery.Status = 2; 
            winnersList.FirstPlace = 
                usersList[0];            
            winnersList.SecondPlace = 
                usersList[1];            
            winnersList.ThirdPlace = 
                usersList[2];
   
            await SaveWinners(lottery, winnersList);
            await dataContext.SaveChangesAsync();
            return winnersList;
        }

        /// <summary>
        ///  Завершает розыгрыш в любом случае
        /// </summary>
        [HttpGet("finish/{id}")]
        public ActionResult FinishLottery(int id) {
            
            dataContext.Lotteries.Find(id).Status = 2;
            dataContext.SaveChanges();

            return Ok();
        }

        private async Task<int> SaveWinners(Lottery lottery, WinnersList winnersList) 
        {
            await dataContext.Winners.AddAsync(new Winner() {
                Lottery = lottery, 
                User=winnersList.FirstPlace, 
                Prize=lottery.FirstPlacePrize,
                Place = 1
            });

            await dataContext.Winners.AddAsync(new Winner() {
                Lottery = lottery, 
                User=winnersList.SecondPlace, 
                Prize=lottery.SecondPlacePrize,
                Place = 2
            });

            await dataContext.Winners.AddAsync(new Winner() {
                Lottery = lottery, 
                User=winnersList.ThirdPlace, 
                Prize=lottery.ThirdPlacePrize,
                Place = 3
            });

            return await dataContext.SaveChangesAsync();
        }
    }
}