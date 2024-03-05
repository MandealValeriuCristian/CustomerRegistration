using System.ComponentModel.DataAnnotations;

namespace API.Dtos;

public class CustomerForCreateDto
{
    [MaxLength(100)]
    public required string Name { get; set; }

    [MaxLength(100)]
    public required string WebsiteURL { get; set; }

    [MaxLength(100)]
    public required string Email { get; set; }

    [MaxLength(15)]
    public required string Phone { get; set; }

    public required AddressDto PostalAddress { get; set; }

    public AddressDto? InvoicingAddress { get; set; }
}
