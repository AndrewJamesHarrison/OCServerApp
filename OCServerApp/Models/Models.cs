using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OCServerApp.Models
{
    public class ViewPort
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Group> Groups { get; set; }
    }

    public class Group
    {
        public string Name { get; set; }
        public List<Property> Properties { get; set; }
    }

    public class Property
    {
        public string Name { get; set; }
        public string Value { get; set; }
        public string Display => DisplayType.ToString();
        public DisplayTypeEnum DisplayType { get; set; }
    }

    public enum DisplayTypeEnum
    {
        Number,
        String
    }
}
