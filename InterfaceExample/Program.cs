using System;

namespace InterfaceExample
{
    public interface IWriter
    {
        void WriteFile();
    }
    public class FileBase
    {
        public virtual void SetName()
        {
            Console.WriteLine("Setting name in the base Writer class");
        }
    }
    public class XmlWriter: FileBase, IWriter
    {
       
        public void WriteFile()
            {
                Console.WriteLine("Writing name in the base Writer class");
            }
        
        public override void SetName()
        {
            Console.WriteLine("Setting XMLWRITER");
        }
    }
    
      
    public class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("Hello World!");
            IWriter iw = new XmlWriter();
            iw.WriteFile();
            Console.ReadLine();

        }
    }
}
