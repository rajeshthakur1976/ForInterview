using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPIService
{
    public class EmployeeContext
    {
        private IEnumerable<EmployeeEntity> _employeeData;
        public  EmployeeContext()
        {
            this._employeeData = this.GetData();
        }
        public IEnumerable<EmployeeEntity> GetEmployeeData()
        {
            return this._employeeData;
        }

        public IEnumerable<EmployeeEntity> GetEmployeeByID(string employeeID)
        {
            return this._employeeData.Where(p=>p.Code==employeeID);
        }

        public IEnumerable<EmployeeEntity> GetEmployeeByGender(string Gender)
        {
            return this._employeeData.Where(p => p.Gender == Gender);
        }

        private IEnumerable<EmployeeEntity> GetData()
        {
            List<EmployeeEntity> data = new List<EmployeeEntity>()
            {
                new EmployeeEntity { AnnualSalary=2000,Code="E001",DOB="10/10/2017",Gender="Male",Name="Mack" },
                new EmployeeEntity { AnnualSalary=2000,Code="E002",DOB="10/10/2017",Gender="Female",Name="Jacl" },
                new EmployeeEntity { AnnualSalary=2000,Code="E003",DOB="10/10/2017",Gender="Male",Name="Lack" },
                new EmployeeEntity { AnnualSalary=2000,Code="E004",DOB="10/10/2017",Gender="Female",Name="Tack" },
                new EmployeeEntity { AnnualSalary=2000,Code="E005",DOB="10/10/2017",Gender="Female",Name="Fack" },
                new EmployeeEntity { AnnualSalary=2000,Code="E006",DOB="10/10/2017",Gender="Male",Name="Hack" },
                new EmployeeEntity { AnnualSalary=2000,Code="E007",DOB="10/10/2017",Gender="Female",Name="Comex" }
            };

            return data;
        }

    }
}
