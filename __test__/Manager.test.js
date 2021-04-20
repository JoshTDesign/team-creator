const Manager = require('../lib/Manager');

  describe("Manager", () => {
    it("return the name value this.name", () => {
      const str = "Steven";
      const emailTest = "test@test.com";
      const phoneTest = "555-555-5555"
      const newManager = new Manager(str, 10, emailTest, phoneTest);


      expect(newManager.name).toEqual(str);
      expect(newManager.email).toEqual(emailTest);
      expect(newManager.id).toEqual(10);
      expect(newManager.phone).toEqual(phoneTest);
      expect(newManager.getName()).toEqual(str);
      expect(newManager.getEmail()).toEqual(emailTest);
      expect(newManager.getRole()).toEqual('Manager');
    });
  });