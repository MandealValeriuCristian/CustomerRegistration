namespace API.Entities;

public class Customer
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public string WebsiteURL {get; set;}
    public string Email { get; set;}
    public string Phone { get; set;}
    public Address PostalAddress { get; set;}
    public Address? InvoicingAddress { get; set;}
}