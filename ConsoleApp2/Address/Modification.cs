using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp2.Address
{
    class Modification
    {
        public void modify()
        {
            Console.WriteLine("Modify"); 
        }
        public void add()
        {
            Console.WriteLine("Added the address");
        }
        public void delete()
        {
            Console.WriteLine("Delete the address");
        }
        public void quit()
        {
            Console.WriteLine("Item Deleted");
        }
    }
}
