using Microsoft.AspNetCore.Mvc;

namespace InventoryManager.Controllers
{
    public class JobsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
