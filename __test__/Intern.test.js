const Intern = require('../lib/Intern');

  describe("Intern", () => {
    it("return the name value this.name", () => {
      const str = "Steven";
      const emailTest = "test@test.com";
      const schoolTest = "school name"
      const newIntern = new Intern(str, 10, emailTest, schoolTest);


      expect(newIntern.name).toEqual(str);
      expect(newIntern.email).toEqual(emailTest);
      expect(newIntern.id).toEqual(10);
      expect(newIntern.school).toEqual(schoolTest);
      expect(newIntern.getName()).toEqual(str);
      expect(newIntern.getEmail()).toEqual(emailTest);
      expect(newIntern.getRole()).toEqual('Intern');
    });
  });