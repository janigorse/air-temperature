using Microsoft.EntityFrameworkCore;
namespace air_temperature_api.Models
{
    public class TemperatureContext: DbContext
    {
        public TemperatureContext(DbContextOptions<TemperatureContext> options) : base(options)
        {
        }

        public DbSet<TemperatureItem> TemperatureItems {get; set;}
    }
}