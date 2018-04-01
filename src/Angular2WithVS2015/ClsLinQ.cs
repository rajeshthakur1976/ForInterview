using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2WithVS2015
{
    public class ClsLinQ
    {
        public void Test1()
        {
            IList<string> strList1 = new List<string>() {
                                                                "One8",
                                                                "Two",
                                                                "Three",
                                                                "Four"
                                                            };

            IList<string> strList2 = new List<string>() {
                                                            "One",
                                                            "Two",
                                                            "Five",
                                                            "Six"
                                                        };

            var innerJoin = strList1.Join(strList2,
                                  str1 => str1,
                                  str2 => str2,
                                  (str1, str2) => str1);
        }
    }
}
