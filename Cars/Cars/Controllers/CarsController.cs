using Cars.Data;
using Cars.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Cars.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {
        private readonly FullStackDbContext _Context;

        public CarsController(FullStackDbContext context)
        {
            _Context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCars()
        {
            var cars = await _Context.Cars.ToListAsync();
            return Ok(cars);
        }
        [HttpPost]
        public async Task<IActionResult> AddCars([FromBody] Car carRequest)
        {
            carRequest.Id = Guid.NewGuid();
            await _Context.Cars.AddAsync(carRequest);
            await _Context.SaveChangesAsync();

            return Ok(carRequest);
        }
        [HttpGet]
        [Route("{id:guid}")]

        public async Task<IActionResult> GetCars([FromRoute] Guid id)
        {
            var cars = await _Context.Cars.FirstOrDefaultAsync(x => x.Id == id);
            if (cars != null)
            {
                return Ok(cars);
            }  
            return NotFound();
        }
        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> UpdateCar([FromRoute] Guid id, Car updateCarRequest)
        {
           var car = await _Context.Cars.FindAsync(id);
            if(car == null)
            {
                return NotFound();
            }

            car.Make=updateCarRequest.Make;
            car.Model = updateCarRequest.Model;
            car.Color = updateCarRequest.Color;
            car.Year = updateCarRequest.Year;
            car.StateOfRegistration = updateCarRequest.StateOfRegistration;
            car.LicensePlate = updateCarRequest.LicensePlate;
            car.Insurance = updateCarRequest.Insurance;
            car.LocationOfVehicle = updateCarRequest.LocationOfVehicle;

            await _Context.SaveChangesAsync();

            return Ok(car);
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteCar([FromRoute] Guid id)
        {
            var car = await _Context.Cars.FindAsync(id);
            if (car == null)
            {
                return NotFound();
            }
            _Context.Cars.Remove(car);
            await _Context.SaveChangesAsync();

            return Ok(car);

        }





    }
}

