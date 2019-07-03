using System.Collections.Generic;
using System.Threading.Tasks;
using InnopromLottery.Models;
using Microsoft.AspNetCore.Mvc;

namespace InnopromLottery.Controllers
{
    [Route("api/[controller]")]
    public class PrizesController:Controller
    {
        private DataContext dataContext;
        public PrizesController(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        /// <summary>
        /// Возвращает весь список призов
        /// </summary>
        [HttpGet]
        public ActionResult<IEnumerable<Prize>> GetPrizes()
        {
            return dataContext.Prizes;
        }

        /// <summary>
        /// Возвращает приз с конкретным ID
        /// </summary>
        [HttpGet("{id}")]
        public ActionResult<Prize> GetPrize(int id) 
        {
            try {
                return dataContext.Prizes.Find(id);
            } catch {
                return BadRequest("Can't find Prize with this ID");
            }
        }

        /// <summary>
        /// Добавляет приз
        /// </summary>
        [HttpPost]
        public async Task<ActionResult> AddPrize([FromBody] Prize prize) 
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await dataContext.Prizes.AddAsync(prize);
            await dataContext.SaveChangesAsync();
            return Ok();
        }
    }
}