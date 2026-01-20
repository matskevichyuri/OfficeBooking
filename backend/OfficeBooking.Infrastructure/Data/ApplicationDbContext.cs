using Microsoft.EntityFrameworkCore;
using OfficeBooking.Domain.Entities;

namespace OfficeBooking.Infrastructure.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Room> Rooms => Set<Room>();
        public DbSet<Table> Tables => Set<Table>();
        public DbSet<Booking> Bookings => Set<Booking>();
    }
}
