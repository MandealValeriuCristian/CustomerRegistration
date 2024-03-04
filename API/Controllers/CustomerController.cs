using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;
[ApiController]
[Route("api/[controller]")] // /api/users
public class CustomerController : ControllerBase
{
    private readonly DataContext _context;

    public CustomerController(DataContext context)
    {
        _context = context;
    }
    [HttpGet]
    public ActionResult<IEnumerable<Customer>> GetCustomers()
    {
        var customers = _context.Customers.ToList();
        return customers;
    }
}
