using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using air_temperature_api.Models;
using Microsoft.AspNetCore.Cors;

namespace air_temperature_api
{
    public class Startup
    {       
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(o => o.AddPolicy("AirTemperaturePolicy", builder => {
                builder.AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
            }));
            services.AddDbContext<TemperatureContext>(opt => opt.UseInMemoryDatabase("TemperatureList"));
            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseCors("AirTemperaturePolicy");
            app.UseMvc();
        }
    }
}
