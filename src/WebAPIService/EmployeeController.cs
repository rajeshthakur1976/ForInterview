using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPIService
{
    [Route("api/[controller]")]
    public class EmployeeController : Controller
    {
        private IEnumerable<EmployeeEntity> _employeeService;
        EmployeeContext employeeContext = new EmployeeContext();
        public EmployeeController()
        {
            
            
            _employeeService= employeeContext.GetEmployeeData();
        }
        // GET: api/values
        [HttpGet]
        public IEnumerable<EmployeeEntity> Get()
        {
            return _employeeService;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IEnumerable<EmployeeEntity> Get(string id)
        {
            return employeeContext.GetEmployeeByID(id);
        }

        //[HttpGet("{Gender}")]
        //public IEnumerable<EmployeeEntity> GetByGender(string gender)
        //{
        //    return employeeContext.GetEmployeeByGender(gender);
        //}

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
