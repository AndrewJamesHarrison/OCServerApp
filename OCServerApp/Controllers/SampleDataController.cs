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
        private List<ViewPort> viewPorts = new List<ViewPort>()
        {
                new ViewPort()
                {
                    Id=0,
                    Name = "Character Description",
                    Groups = new List<Group>() {
                        new Group()
                        {
                            Name = "Attributes",
                            Properties = new List<Property>()
                            {
                                new Property(){Name = "Name", DisplayType=DisplayTypeEnum.String, Value="-Name-"},
                                new Property(){Name = "Class", DisplayType=DisplayTypeEnum.String, Value="-Class-"},
                                new Property(){Name = "Race", DisplayType=DisplayTypeEnum.String, Value="-Race-"},
                                new Property(){Name = "Description", DisplayType=DisplayTypeEnum.String, Value="-Description-"},
                            }
                        }
                    }
                },
                new ViewPort()
                {
                    Id=1,
                    Name = "Attributes",
                    Groups = new List<Group>() {
                        new Group()
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
                        }
                    }
                }
        };

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

        [HttpGet("[action]")]
        public JsonResult GetViewPorts()
        {
            var g = new { ViewPorts = viewPorts, PageCount = viewPorts.Count() };
            return new JsonResult(g);
        }


    }
}
