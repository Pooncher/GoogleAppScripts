class Constants
{
  constructor() {
      if (this instanceof Constants) {
        throw Error('A static class cannot be instantiated.');
    }
  }
}

// ECMA2015 compatible for static members
Constants.payrollId = "1EEFNUDYR7BVwOwkdLyzFwqvUpiZ-izF3x4f0SOyFH08";
