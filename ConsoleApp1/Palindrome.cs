using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
{
    class Palindrome
    {
        public static int palindrome(int x)
        {
            //int x = Convert.ToInt32(Console.ReadLine());
            int rem;
            int dig=0;
            while (x!=0)
            {
                rem = x % 10;
                dig = (dig * 10) + rem;
                x = x / 10;
            }
            //Console.WriteLine(dig);
            return dig;
        }
        public static void Main(string[] args)
        {
            Console.WriteLine("Enter the Number: ");
            int x = Convert.ToInt32(Console.ReadLine());
            if (x == palindrome(x))
            {
                Console.WriteLine("Palindrome");
            }
            else
            {
                Console.WriteLine("Not Palindrome");
            }
        }
    }

}
