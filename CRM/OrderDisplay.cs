using System;
using System.Collections.Generic;
using System.Text;

namespace CRM
{
    public class OrderDisplay
    {

        public string FirstName { get; set; }
        public string LastName { get; set; }

        public DateTimeOffset? OrderDate { get; set; }
        public List<OrderDisplayItem> OrderDisplayItemList { get; set; }
        public int OrderId { get; set; }
        public Address ShippingAddress { get; set; }
        public int ShippingAddressId { get; set; }
    }
    public class OrderDisplayItem
    {
        public int OrderItemId { get; private set; }
        public int OrderQuantity { get; set; }
        public string ProductName { get; set; }
        public decimal? PurchasePrice { get; set; }
    }
}
