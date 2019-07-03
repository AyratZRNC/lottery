using Microsoft.AspNetCore.Mvc;

namespace InnopromLottery.Controllers
{
    public class HomeController:Controller
    {
        public IActionResult Index() {
            return View();
        }
    }
}