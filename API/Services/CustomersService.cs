using API.Data;
using API.Dtos;
using API.Entities;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace API.Services;

public class CustomersService : ICustomersService
{
    private readonly DataContext _dataContext;
    private readonly IMapper _mapper;

    public CustomersService(DataContext dataContext, IMapper mapper)
    {
        _dataContext = dataContext;
        _mapper = mapper;
    }
    public async Task<bool> CreateAsync(Customer customer)
    {
        await _dataContext.AddAsync(customer);

        var result = await _dataContext.SaveChangesAsync();

        return result > 0;
    }

    public async Task<List<CustomerForListDto>> GetAllAsync()
    {
        return await _dataContext.Customers
            .ProjectTo<CustomerForListDto>(_mapper.ConfigurationProvider)
            .ToListAsync();
    }

    public async Task<CustomerForGetDto?> GetAsync(int id)
    {
        return await _dataContext.Customers
            .Where(x => x.Id == id)
            .ProjectTo<CustomerForGetDto>(_mapper.ConfigurationProvider)
            .SingleOrDefaultAsync();
    }
}
