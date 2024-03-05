using API.Dtos;
using API.Entities;
namespace API.Services;

public interface ICustomersService
{
    Task<CustomerForGetDto?> GetAsync(int id);
    Task<List<CustomerForListDto>> GetAllAsync();
    Task<bool> CreateAsync(Customer customer);   
}
