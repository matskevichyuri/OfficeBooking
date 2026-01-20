namespace OfficeBooking.Domain.Entities
{
    public class Room
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Name { get; set; } = string.Empty;
        public int Number { get; set; }
        public List<Table> Tables { get; set; } = new();
    }
}
