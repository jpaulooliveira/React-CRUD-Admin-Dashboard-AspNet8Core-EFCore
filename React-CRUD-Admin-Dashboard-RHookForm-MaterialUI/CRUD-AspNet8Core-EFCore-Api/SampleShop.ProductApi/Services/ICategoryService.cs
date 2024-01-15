using SampleShop.ProductApi.DTOs;
namespace SampleShop.ProductApi.Services;
public interface ICategoryService
{
    Task<IEnumerable<CategoryDTO>> GetCategories(FilterCategoryDTO filter);
    Task<IEnumerable<CategoryDTO>> GetCategoriesProducts();
    Task<CategoryDTO> GetCategoryById(int id);
    Task AddCategory(CategoryDTO categoryDto);
    Task UpdateCategory(CategoryDTO categoryDto);
    Task RemoveCategory(int id);
}
