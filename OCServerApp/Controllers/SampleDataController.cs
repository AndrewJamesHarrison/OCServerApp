using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using OCServerApp.Models;

namespace OCServerApp.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {

        [HttpGet("[action]")]
        public JsonResult GetGroups()
        {
            var g = new Group()
            {
                Name = "Attributes",
                Properties = new List<Property>()
                {
                    new Property(){Name = "Strength", DisplayType=DisplayTypeEnum.Number, Value="10"},
                    new Property(){Name = "Dexterity", DisplayType=DisplayTypeEnum.Number, Value="10"},
                    new Property(){Name = "Wisdom", DisplayType=DisplayTypeEnum.Number, Value="10"},
                    new Property(){Name = "Constitution", DisplayType=DisplayTypeEnum.Number, Value="10"},
                    new Property(){Name = "Intelligence", DisplayType=DisplayTypeEnum.Number, Value="10"},
                    new Property(){Name = "Charisma", DisplayType=DisplayTypeEnum.Number, Value="10"},
                }
            };
            return new JsonResult(g);
        }


    }
}
