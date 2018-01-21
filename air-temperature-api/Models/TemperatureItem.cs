using System;
using System.Collections.Generic;
namespace air_temperature_api.Models
{
    public class TemperatureItem
    {
        public long Id {get; set;}
        public string Location {get; set;}
        public DateTime Date {get; set;}
        public short Temperature {get; set;}

    }
}

    