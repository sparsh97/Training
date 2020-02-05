using System;
using System.Linq;

namespace ExtensionClass
{
    static class Method1
    {
        public static void  newString(this string o)
        {
            Console.WriteLine(o.First().ToString().ToUpper() + String.Join("", o.Skip(1)));
        }
    }
}
