using System;
namespace ConsoleApp1
{
	public Class1()
	{
		 static int counter(int x)
        {
            int counter = 0;
            if (x % 2 == 0)
            {
                counter++;
                counter(x--);
            }
            return counter;
        }
		 static void Main(string[] args)
        {
            int x = Convert.ToInt32(Console.ReadLine());
            int y = counter(x);
            Console.WriteLine();
        }
	}
}
