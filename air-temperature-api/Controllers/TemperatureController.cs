using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using air_temperature_api.Models;
using System.Linq;

namespace air_temperature_api.Controllers
{
    [Route("api/[controller]")]
    public class TemperatureController : Controller
    {
        private readonly TemperatureContext _context;

        public TemperatureController(TemperatureContext context)
        {
            _context = context;

            if (_context.TemperatureItems.Count() == 0)
            {
                _context.TemperatureItems.Add(new TemperatureItem { Location = "London", Date = new DateTime(2018, 1, 1), Temperature = 6 });
                _context.TemperatureItems.Add(new TemperatureItem { Location = "London", Date = new DateTime(2018, 1, 2), Temperature = 8 });
                _context.TemperatureItems.Add(new TemperatureItem { Location = "London", Date = new DateTime(2018, 1, 3), Temperature = 4 });
                _context.TemperatureItems.Add(new TemperatureItem { Location = "New York", Date = new DateTime(2018, 1, 2), Temperature = 1 });
                _context.TemperatureItems.Add(new TemperatureItem { Location = "New York", Date = new DateTime(2018, 1, 3), Temperature = 3 });
                _context.TemperatureItems.Add(new TemperatureItem { Location = "Johannesburg", Date = new DateTime(2018, 1, 3), Temperature = 20 });
                _context.TemperatureItems.Add(new TemperatureItem { Location = "Johannesburg", Date = new DateTime(2018, 1, 4), Temperature = 20 });
                _context.TemperatureItems.Add(new TemperatureItem { Location = "Johannesburg", Date = new DateTime(2018, 1, 5), Temperature = 22 });
                _context.TemperatureItems.Add(new TemperatureItem { Location = "Johannesburg", Date = new DateTime(2018, 1, 6), Temperature = 23 });
                
                _context.SaveChanges();
            }
        }   

        [HttpGet]
        public IEnumerable<TemperatureItem> GetAll()
        {
            return _context.TemperatureItems.ToList();
        }   

        [HttpGet("{id}", Name = "GetTemperature")]
        public IActionResult GetById(long id)
        {
            var item = _context.TemperatureItems.FirstOrDefault(t => t.Id == id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        } 

        [HttpPost]
        public IActionResult Create([FromBody] TemperatureItem item)
        {
            if (item == null)
            {
                return BadRequest();
            }

            _context.TemperatureItems.Add(item);
            _context.SaveChanges();

            return CreatedAtRoute("GetTemperature", new { id = item.Id }, item);
        }
            }
}