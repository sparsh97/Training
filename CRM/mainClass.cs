using System;
using System.Collections.Generic;
using System.Text;

namespace CRM
{
    public class mainClass
    {
        public static void Main(string[] args)
        {
            Order order = new Order(10);
            OrderItem orditem = new OrderItem();
            OrderRepository or = new OrderRepository();
            OrderDisplay od = or.RetrieveOrderDisplay(10);
            OrderDisplayItem odi = new OrderDisplayItem();
            Console.WriteLine(od.FirstName+" "+od.LastName);
            Console.WriteLine(od.OrderDate);
            //or.RetrieveOrderDisplay(10);

            /*var a=or.RetrieveOrderDisplay(10).OrderDisplayItemList;
           // odi.
            Console.WriteLine(a); //or.Retrieve(10);
            List<OrderDisplay> lOrder = new List<OrderDisplay>();
            lOrder.Add(or.RetrieveOrderDisplay(10).OrderDisplayItemList.Or);
            //foreach (OrderRepository orr in lOrder)
            //Console.WriteLine(or.Retrieve(10) ); //or.Retrieve(10);
            //List<Order> lOrder = new List<Order>();
            //lOrder.Add(or.RetrieveOrderDisplay(10));
            foreach(Order orr in lOrder)
            {
                Console.WriteLine(orr.OrderId);
                Console.WriteLine(orr.OrderDate);
                Console.WriteLine(orr.orderItems);
            }
            //Console.WriteLine(or.RetrieveOrderDisplay(10));*/
        }
    }
}
