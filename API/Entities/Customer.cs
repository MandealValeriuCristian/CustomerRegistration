namespace API.Entities;

public class Customer
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public required string WebsiteURL {get; set;}
    public required string Email { get; set;}
    public required string Phone { get; set;}
    public required Address PostalAddress { get; set;}
    public Address? InvoicingAddress { get; set;}
}