using Microsoft.EntityFrameworkCore;

namespace InnopromLottery.Models
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        

        protected  override void OnModelCreating(ModelBuilder modelBuilder) 
        {
            
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Prize> Prizes { get; set; }
        public DbSet<Lottery> Lotteries { get; set; }
        public DbSet<Winner> Winners { get; set; }
    }
}