using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using OCServerApp.Models;
using Newtonsoft.Json;

namespace OCServerApp.Repositories
{
    public interface IObjectRepository
    {
        Task<ViewPort> GetViewPort(int id);
        void InsertOrUpdateViewPort(int id, string jsonObject);
    }

    public class ObjectRepository : IObjectRepository
    {
        public async Task<ViewPort> GetViewPort(int id)
        {
            string jsonObject = await File.ReadAllTextAsync($"{Environment.SystemDirectory}/Templates/{id}.json");
            return JsonConvert.DeserializeObject<ViewPort>(jsonObject);
        }

        public async void InsertOrUpdateViewPort(int id, string jsonObject)
        {
            File.CreateText($"{Environment.SystemDirectory}/Templates/{id}.json");
            await File.WriteAllTextAsync($"{Environment.SystemDirectory}/Templates/{id}.json", jsonObject);
        }
    }
}
