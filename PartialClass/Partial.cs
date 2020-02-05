using System;

namespace PartialClass
{
    public partial class PClass
    {
        public void Display()
        {
            Console.WriteLine("Author's name is : " + Author_name);
            Console.WriteLine("Total number articles is : " + Total_articles);
        }
    }
    class Demo
    {
        public static void Main(string[] args)
        {
            PClass p = new PClass("Dev", 5);
            p.Display();
        }
    }
}
