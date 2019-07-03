using System.ComponentModel.DataAnnotations;

namespace InnopromLottery.Models
{
    public class Winner
    {
        public int WinnerId { get; set;}
        public Lottery Lottery { get; set; }
        public User User { get; set; }
        public Prize Prize { get; set; }
        public int Place { get; set; }
    }
}