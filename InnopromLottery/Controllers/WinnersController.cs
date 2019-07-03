using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InnopromLottery.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace InnopromLottery.Controllers
{
    [Route("api/[controller]")]
    public class WinnersController: Controller
    {
        private DataContext dataContext;
        public WinnersController(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        /// <summary>
        /// Получает список всех победителей за всё время
        /// </summary>
        [HttpGet]
        public ActionResult<IEnumerable<Winner>> GetListWinners() {
            return dataContext.Winners.Include(_ => _.User).Include(_ => _.Prize).Include(_ => _.Lottery).ToList();     
        }

        /// <summary>
        /// Возвращает список победителей по конкретному розыгрышу
        /// </summary>
        [HttpGet("{id}")]
        public ActionResult<IEnumerable<Winner>> GetWinner(int id ) {
            return dataContext.Winners.Include(_ => _.Lottery).Where(_=>_.Lottery.LotteryId == id).Include(_ => _.User).Include(_ => _.Prize).ToList();
        }
    }
}