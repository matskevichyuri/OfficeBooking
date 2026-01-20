namespace OfficeBooking.Domain.Entities
{
    public enum TableStatus
    {
        Free,
        Reserved
    }

    public class Table
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public int Number { get; set; }
        public TableStatus Status { get; set; } = TableStatus.Free;
        public string? ReservedBy { get; set; } = null;
        public Guid RoomId { get; set; }
        public Room? Room { get; set; }
    }
}
