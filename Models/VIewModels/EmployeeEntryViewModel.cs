using System.ComponentModel.DataAnnotations;

namespace InventoryManager.Models.VIewModels
{
    public class EmployeeEntryViewModel
    {
        [Display(Name = "Email Address")]
        [Required(ErrorMessage = "Email address is required")]
        public string EmailAddress { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
