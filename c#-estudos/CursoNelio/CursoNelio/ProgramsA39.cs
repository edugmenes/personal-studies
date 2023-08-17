using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Globalization;

namespace CursoNelio
{
    class ProgramsA39
    {
        static void Main(string[] args)
        {
            TriangleA39 x = new TriangleA39();
            TriangleA39 y = new TriangleA39();

            Console.WriteLine("Entre com as medidas do triangulo x:");
            x.A = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            x.B = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            x.C = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            
            Console.WriteLine("Entre com as medidas do triangulo y:");
            y.A = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            y.B = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            y.C = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);

            double areaX = x.Area();
            double areaY = y.Area();

            Console.WriteLine("Area de x: " + areaX.ToString("F4", CultureInfo.InvariantCulture));
            Console.WriteLine("Area de y: " + areaY.ToString("F4", CultureInfo.InvariantCulture));

            if (areaX > areaY)
            {
                Console.WriteLine("Maior areaX = " + areaX.ToString("F4", CultureInfo.InvariantCulture));
            }
            else if (areaX < areaY)
            {
                Console.WriteLine("Maior areaY = " + areaY.ToString("F4", CultureInfo.InvariantCulture));
            }
            else
            {
                Console.WriteLine("Areas iguais!");
            }
        }
    }
}
