using API.Dtos;
using API.Entities;
using AutoMapper;

namespace API.Mappers;

public class MapperProfiles : Profile
{
    public MapperProfiles()
    {
        CreateMap<Customer, CustomerForGetDto>().ReverseMap();
            //.ForMember(dest => dest.PostalAddress, opt => opt.MapFrom(src => src.PostalAddress))
            //.ForMember(dest => dest.InvoicingAddress, opt => opt.MapFrom(src => src.InvoicingAddress));
        CreateMap<Customer, CustomerForListDto>();
        CreateMap<CustomerForCreateDto, Customer>();

        CreateMap<Address, AddressDto>().ReverseMap() ;
    }
}