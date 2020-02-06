using System;
using System.Collections.Generic;
using System.Text;

namespace CRM
{
    public class mainClass
    {
        public static void Main(string[] args)
        {
            Order order = new Order();
            OrderItem orditem = new OrderItem();
            OrderRepository or = new OrderRepository();
            OrderDisplay od = new OrderDisplay();
            OrderDisplayItem odi = new OrderDisplayItem();
            Console.WriteLine(or.Retrieve(10) ); //or.Retrieve(10);
            List<Order> lOrder = new List<Order>();
            lOrder.Add(or.RetrieveOrderDisplay(10));
            foreach(OrderRepository orr in lOrder)
            {
                Console.WriteLine(orr.OrderId);
                Console.WriteLine(orr.OrderDate);
                Console.WriteLine(orr.orderItems);
            }
            Console.WriteLine(or.RetrieveOrderDisplay(10));
        }
    }
}
