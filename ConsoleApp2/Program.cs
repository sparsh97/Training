using System;
using System.Collections.Generic;
using ConsoleApp2.Address;
namespace ConsoleApp2
{
    class Program
    {
        
        static void Main(string[] args)
        {
            Console.WriteLine("Enter the Address: ");
            string name = Console.ReadLine();
            char ch = Convert.ToChar(Console.ReadLine());
            Modification m = new Modification();
            switch (ch)
            {
                case 'm': m.modify();
                    break;
                case 'a':
                    m.add();
                    break;
                case 'd':
                    m.delete();
                    break;
                case 'q':
                    m.quit();
                    break;
                default:Console.WriteLine("switch ended");
                    break;
            }
        }
    }
}
