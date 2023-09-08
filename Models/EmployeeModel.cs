using Microsoft.AspNetCore.Identity;

namespace InventoryManager.Models
{
    public class EmployeeModel : IdentityUser
    {
        public IList<JobModel>? Jobs { get; set; }
        public string Position { get; set; }
        public double Wage { get; set; }
        public IList<string>? Skills { get; set; }

        public EmployeeModel(string Email, double hourly)
        {
            this.Email = Email;
            this.Wage = hourly;
        }
    }
}
