
#include <chaiscript/chaiscript.hpp>

double function(double i, double j)
{
    return i * j;
}

int main()
{
    chaiscript::ChaiScript chai;
    chai.add(chaiscript::fun(&function), "function");

    double d = chai.eval<double>("function(3, 4.75);");
    printf("Result: '%f'\n", d);

    return 0;
}

