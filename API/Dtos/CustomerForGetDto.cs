namespace API.Dtos;

public class CustomerForGetDto
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public required string WebsiteURL { get; set; }
    public required string Email { get; set; }
    public required string Phone { get; set; }
    public required AddressDto PostalAddress { get; set; }
    public AddressDto? InvoicingAddress { get; set; }
}
