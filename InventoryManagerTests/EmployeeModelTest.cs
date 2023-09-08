using InventoryManager.Models;

namespace InventoryManagerTests
{
    public class EmployeeModelTest
    {
        [Fact]
        public void EmployeeModelWageIsTypeOfDouble()
        {
            EmployeeModel Obj = new EmployeeModel("test@user.com", 3.99);
            Assert.IsType<double>(Obj.Wage);
        }
    }
}