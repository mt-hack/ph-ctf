using System;

namespace AnimalCrossing
{
    internal class AlienAttribute : Attribute
    {
        public string Item;

        public AlienAttribute(string item)
        {
            Item = item;
        }
    }
}