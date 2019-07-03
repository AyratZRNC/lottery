using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace InnopromLottery.Models
{
    public class Lottery 
    {
        public int LotteryId { get; set; }
        public int Status { get; set; }
       
        public DateTime DrawTime { get; set; }

        [Required]
        public int FirstPlacePrizeId { get; set; }
        [Required]
        public int SecondPlacePrizeId { get; set; }
        [Required]
        public int ThirdPlacePrizeId { get; set; }
        public Prize FirstPlacePrize { get; set; }
        public Prize SecondPlacePrize { get; set; }
        public Prize ThirdPlacePrize { get; set; }
    }
}