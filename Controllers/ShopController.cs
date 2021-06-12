using Microsoft.AspNetCore.Mvc;
using SomeApi.Repository;
namespace Shop.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class ShopController : Controller {   
        private readonly IRepository _productRepository;
        public ShopController(IRepository productRepository) {
            _productRepository = productRepository;
        }
        [HttpGet ("/getProducts")]
        public IActionResult GetProducts() {
            return Ok (_productRepository.GetAll());
        }
        [HttpPost ("/addProduct")]
        public IActionResult AddProduct ([FromBody] Product product) {
            _productRepository.AddProduct(product);
            return Ok (product);
        }
        [HttpDelete ("/deleteProduct/{id}")]
        public IActionResult DeleteProduct(int id) {
            this._productRepository.DeleteProduct(id);
            return Ok(this._productRepository.GetAll());
        }
        [HttpPut ("/updateProduct")]
        public IActionResult UpdateProduct([FromBody]Product product) { // update pre-existing item
            this._productRepository.UpdateProduct(product);
            return Ok();
        }
    }
}