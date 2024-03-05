namespace API.Dtos;

public class CustomerForListDto
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public required string Email { get; set; }
    public required string WebsiteURL { get; set; }
}
