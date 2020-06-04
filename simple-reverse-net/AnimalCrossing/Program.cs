using System;

namespace AnimalCrossing
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            var joan = new Joan();
            var price = joan.GetTurnipPrice();
            Console.WriteLine($"Today's turnip price is: {price}");
            Console.WriteLine("Don't tell Nook about this!");
        }
    }
}