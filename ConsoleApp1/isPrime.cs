/*using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
{
    class isPrime
    {
        public static bool chkprime(int num)
        {
            for (int i = 2; i < num; i++)
                if (num % i == 0)
                    return false;
            return true;
        }
        public static void Main()
        {
            int n = Convert.ToInt32(Console.ReadLine());
            if (chkprime(n))
                Console.WriteLine(n + " is a prime number");
            else
                Console.WriteLine(n + " is not a prime number");
        }
    }
}
*/