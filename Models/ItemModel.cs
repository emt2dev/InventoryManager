namespace InventoryManager.Models
{
    public class ItemModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public string Image { get; set; }
        public string Supplier { get; set; }
        public Dictionary<DateTime, string> Notes { get; set; }
        public int OrderingQuantity { get; set; }
        public int CurrentQuantity { get; set; }
        public string FrequencyOfUse { get; set; }
    }
}
