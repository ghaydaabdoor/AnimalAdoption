using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactTask1API.Models;

namespace ReactTask1API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipesController : ControllerBase
    {
        private readonly MyDbContext _db;
        public RecipesController(MyDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public IActionResult GetAllRecipes() { 
            var Recipes = _db.Recipes.ToList();
            return Ok(Recipes);
        }


    }
}
