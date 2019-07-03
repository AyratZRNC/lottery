using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace InnopromLottery.Models 
{
    public class User
    {
        public int UserId { get; set; }

        /// <summary>
        /// Имя участника
        /// </summary>
        [Required]
        public string FullName { get; set; }
        /// <summary>
        /// Название компании
        /// </summary>
        [Required]
        public string CompanyName { get; set; }
        /// <summary>
        /// Телефон
        /// </summary>
        [Required]
        [Phone]
        public string PhoneNumber { get; set; }
        /// <summary>
        /// Электронная почта
        /// </summary>
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        /// <summary>
        /// Комментарий - желаемый заказ и т.д.
        /// </summary>
        public string Comment { get; set; }
        /// <summary>
        /// Лотерея, в которой участвует человек
        /// </summary>
        [JsonIgnore]
        public Lottery Lottery { get; set; }
        /// <summary>
        /// Статус - пока не используется
        /// </summary>
        public int Status { get; set; }
    }
}