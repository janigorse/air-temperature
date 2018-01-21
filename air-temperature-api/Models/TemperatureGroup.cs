using System;
using System.Collections.Generic;
namespace air_temperature_api.Models
{
    public class TemperatureGroup 
    {
        public string Location {get; set;}
        public List<TemperatureItem> TemperatureItems {get; set;}
    }
}