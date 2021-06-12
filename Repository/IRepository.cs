using System.Collections.Generic;

namespace SomeApi.Repository
{
    public interface IRepository
    {
        IEnumerable<Product> GetAll();
        void AddProduct(Product product);
        void DeleteProduct(int id);

        Product GetProduct(int id);
        void UpdateProduct(Product product);
    }
}