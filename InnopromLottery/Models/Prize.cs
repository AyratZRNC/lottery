using System.ComponentModel.DataAnnotations;

namespace InnopromLottery.Models
{
    public class Prize 
    {
        public int PrizeId { get; set; }
        [Required]
        
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
    }
}