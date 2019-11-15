using AutoMapper;
using WorkflowDemo.WebUI.DTO;
using WorkflowDemo.WebUI.Entities;

namespace WorkflowDemo.WebUI.Mapping
{
    public class MapperConfig
    {
        public static void CreateDTOMaps()
        {
            Mapper.Initialize((config) =>
            {
                config.CreateMap<User, UserEntity>();
            });
        }
    }
}
