namespace InventoryManager.Models
{
    public class JobModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Address { get; set; }
        public string Status { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public Dictionary<DateTime, string> Notes { get; set; }
        public string EstimatedJobTime { get; set; }
        public double QuotedAmount { get; set; }
        public double? JobSupplyCost { get; set; }
        public double? JobLaborCost { get; set; }
        public double? TotalCost { get; set; }
        public double? TotalProfit {  get; set; }
        public IList<EmployeeModel>? Employees { get; set; }
        public IList<ItemModel>? Items { get; set; }
    }
}
