using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPIService
{
    public class EmployeeEntity
    {
        public string Name { get; set; }
        public string Code { get; set; }
        public string Gender { get; set; }
        public string DOB { get; set; }
        public int AnnualSalary { get; set; }
    }
}
