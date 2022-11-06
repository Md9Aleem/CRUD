namespace Cars.Models
{
    public class Car
    {
        public Guid Id { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public string Year { get; set; }
        public string Color { get; set; }
        public string LicensePlate { get; set; }
        public string StateOfRegistration { get; set; }
        public string LocationOfVehicle { get; set; }
        public bool Insurance { get; set; }
    }
}
