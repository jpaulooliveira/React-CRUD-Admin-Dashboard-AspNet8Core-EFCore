using System.ComponentModel.DataAnnotations;
using SampleShop.ProductApi.Models;

namespace SampleShop.ProductApi.DTOs;

public class FilterCategoryDTO
{
    public int CategoryId { get; set; }
    public string? Name { get; set; }
}
