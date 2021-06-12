using System.Collections.Generic;

namespace SomeApi.Repository
{
    public class ProductRepository : IRepository
    {
        List<Product> products;
        public ProductRepository()
        {
            products = new List<Product>();
            products.Add(new Product() {
                productId =1,
                productName = "Garden Cart",
                description = "15 gallon capacity rolling garden cart",
                price = 32,
                starRating = 3,
                imageUrl = "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            });

            products.Add(
                new Product() {
                productId = 2,
                productName = "Hammer",
                description = "Curved claw steel hammer",
                price = 8,
                starRating = 4,
                imageUrl = "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
                }
            );

            products.Add(
                new Product() {
                productId = 3,
                productName = "File",
                description = "File, tool for removing material/metal or sharpen a metal edge",
                price = 4,
                starRating = 2,
                imageUrl = "https://openclipart.org/image/300px/svg_to_png/206216/1418423700.png"
                }
            );

            products.Add(
                new Product() {
                productId = 4,
                productName = "Needle Nose Pliers",
                description = "Narrow pliers for tight situations",
                price = 4,
                starRating = 3,
                imageUrl = "https://openclipart.org/image/300px/svg_to_png/16040/mystica-Tongs.png"
                }
            );

            products.Add(
                new Product() {
                productId = 6,
                productName = "Saw",
                description = "Serrated saw for cutting wood",
                price = 12,
                starRating = 4,
                imageUrl = "https://openclipart.org/image/300px/svg_to_png/14356/mystica-Saw-silhouette.png"
                }
            );

            products.Add(
                new Product() {
                productId = 7,
                productName = "Screwdriver",
                description = "Simple screwdriver with high impact steel cap",
                price = 5,
                starRating = 5,
                imageUrl = "https://openclipart.org/image/300px/svg_to_png/189971/screwdriver.png"
                }
            );

            products.Add(
                new Product() {
                productId = 5,
                productName = "Hammer",
                description = "Adjustable wrench with a 3/4 inch jaw capacity",
                price = 3,
                starRating = 1,
                imageUrl = "https://openclipart.org/image/300px/svg_to_png/202025/Clefmolette.png"
                }
            );
        }
        public void AddProduct(Product product)
        {
            products.Add(product);
        }

        public void DeleteProduct(int id)
        {
            var itemToRemove = products.FindIndex(r => r.productId == id);
            products.RemoveAt(itemToRemove);
        }

        public IEnumerable<Product> GetAll()
        {
           return products;
        }

        public Product GetProduct(int id)
        {
           return products.Find(product => product.productId == id);
        }

        public void UpdateProduct(Product entity)
        {
            var itemToUpdate = products.FindIndex(r => r.productId == entity.productId);
            if (itemToUpdate == -1) {
                products.Add(entity);
            }
            else {
                products.RemoveAt(itemToUpdate);
                products.Add(entity);
            }
        }
    }
}