using System;
using System.Collections.Generic;
using System.Linq;
using InnopromLottery.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace InnopromLottery.Controllers
{
    [Route("api/[controller]")]
    public class UsersController: Controller
    {
        private DataContext dataContext;
        public UsersController(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        /// <summary>
        /// Добавить пользователя
        /// </summary>
        [HttpPost]
        public ActionResult  AddUser([FromBody] User user) 
        {
            if(!ModelState.IsValid) 
            {
                return BadRequest(ModelState);
            }

            if(dataContext.Lotteries.Where(l => l.Status == 1).Count() < 1) {
                return BadRequest("Where is no started lottery!");
            }

            user.Lottery = dataContext.Lotteries.Where(l => l.Status == 1).First();
            dataContext.Users.Add(user);
            dataContext.SaveChanges();
            return Ok();
        }

        /// <summary>
        /// Получить список пользователей;
        /// При id = -1 - всех, при id != -1 - конкретного розыгрыша
        /// </summary>
        [HttpGet]
        public ActionResult<IEnumerable<User>> ListOfUsers(int id=-1)
        {
            if(id == -1) {             
                return dataContext.Users.Include(_ => _.Lottery).ToList();    
            }
            
            return dataContext.Users.Where(u => u.Lottery.LotteryId == id).Include(_ => _.Lottery).ToList();
        }
    }
}