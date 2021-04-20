const Employee = require('../lib/Employee');

  describe("Employee", () => {
    it("return the name value this.name", () => {
      const str = "Steven";
      const emailTest = "test@test.com";
      const newEmployee = new Employee(str, 10, emailTest);

      expect(newEmployee.name).toEqual(str);
      expect(newEmployee.email).toEqual(emailTest);
      expect(newEmployee.id).toEqual(10);
      expect(newEmployee.getName()).toEqual(str);
      expect(newEmployee.getEmail()).toEqual(emailTest);
      expect(newEmployee.getRole()).toEqual('Employee');
    });
  });

