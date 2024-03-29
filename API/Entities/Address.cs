﻿namespace API.Entities;

public class Address
{
    public int Id { get; set; }
    public required string Street { get; set; }
    public required string Number { get; set; }
    public required string PostCode { get; set; }
    public required string City { get; set; }
    public required string Country { get; set; }
}
