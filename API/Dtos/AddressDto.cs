using System.ComponentModel.DataAnnotations;

namespace API.Dtos;

public class AddressDto
{
    [MaxLength(100)]
    public required string Street { get; set; }

    [MaxLength(10)]
    public required string Number { get; set; }

    [MaxLength(100)]
    public required string PostCode { get; set; }

    [MaxLength(100)]
    public required string City { get; set; }

    [MaxLength(100)]
    public required string Country { get; set; }
}
