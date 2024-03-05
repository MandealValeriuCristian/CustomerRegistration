using API.Entities;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;

namespace API.Data;

public class Seed
{
    public static async Task SeedData(DataContext context, bool isEnvDevelopment)
    {
        if (!(await context.Customers.AnyAsync()) && isEnvDevelopment)
        {
            var customerData = await File.ReadAllTextAsync("Data/CustomerSeedData.json");

            var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };

            var customers = JsonSerializer.Deserialize<List<Customer>>(customerData);
            if (customers != null)
            {
                foreach (var customer in customers)
                {
                    context.Customers.Add(customer);
                }
                await context.SaveChangesAsync();
            }
        }        
    }
}
