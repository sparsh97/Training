/*
using System;
namespace ConsoleApp1
{
    class Class2
    {
        public static void ChangeRef(ref int numberRef)
        {
            numberRef = 25;
            Console.WriteLine($"inside the changeref methof the numberref is {numberRef}");
        }
        public static void ChangeOut(out int numberOut)
        {
            numberOut = 60;
            Console.WriteLine($"inside the changeref methof the numberref is {numberOut}");
        }
        public static void Main(string[] args)
        {
            int numberRef = 15;
            Console.WriteLine($"before calling the changeRef method the number is {numberRef}");
            ChangeRef(ref numberRef);
            Console.WriteLine($"after calling the changeRef method the numberRef is {numberRef}");
            Console.WriteLine();
            int numberOut;
            Console.WriteLine("before calling the changeOut method the numberOut is assigned");
            ChangeOut(out numberOut);
            Console.WriteLine($"after calling the changeOut method the numberOut is {numberOut}");
            Console.ReadKey();
        }
    }
}
*/