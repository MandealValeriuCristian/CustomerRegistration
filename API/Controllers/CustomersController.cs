using API.Dtos;
using API.Entities;
using API.Services;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")] 
public class CustomersController : ControllerBase
{
    private readonly ICustomersService _customersService;
    private readonly IMapper _mapper;

    public CustomersController(ICustomersService customersService, IMapper mapper)
    {
        _customersService = customersService;
        _mapper = mapper;
    }

    [HttpGet("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(CustomerForGetDto))]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> GetAsync(int id)
    {
        var customer = await _customersService.GetAsync(id);

        if (customer is null)
            return NotFound($"No customer with ID {id} has been found");
            
        var customerDto = _mapper.Map<CustomerForGetDto>(customer);

        return Ok(customerDto);
    }

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(List<CustomerForListDto>))]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    public async Task<IActionResult> GetAllAsync()
    {
        var customers =  await _customersService.GetAllAsync();

        if (customers.Count == 0)
            return NoContent();

        var customerDtos = _mapper.Map<List<CustomerForListDto>>(customers);

        return Ok(customerDtos);
    }

    [HttpPost]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(List<CustomerForListDto>))]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<IActionResult> CreateAsync([FromBody]CustomerForCreateDto customerDto)
    {
        var customer = _mapper.Map<Customer>(customerDto);

        var isSuccessful = await _customersService.CreateAsync(customer);
            
        if (isSuccessful)
            return Ok();

        return StatusCode(StatusCodes.Status500InternalServerError, "Could not create customer. Something went wrong.");
    }
}
