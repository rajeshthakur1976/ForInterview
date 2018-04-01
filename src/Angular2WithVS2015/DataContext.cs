using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.Data.Entity;

namespace Angular2WithVS2015
{
    public class DataContext: DbContext
    {
        DbSet<Employee> Employee;
    }
}
