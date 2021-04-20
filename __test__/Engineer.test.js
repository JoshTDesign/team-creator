const Engineer = require('../lib/Engineer');

  describe("Engineer", () => {
    it("return the name value this.name", () => {
      const str = "Steven";
      const emailTest = "test@test.com";
      const githubTest = "TestGithub"
      const newEngineer = new Engineer(str, 10, emailTest, githubTest);


      expect(newEngineer.name).toEqual(str);
      expect(newEngineer.email).toEqual(emailTest);
      expect(newEngineer.id).toEqual(10);
      expect(newEngineer.github).toEqual(githubTest);
      expect(newEngineer.getName()).toEqual(str);
      expect(newEngineer.getEmail()).toEqual(emailTest);
      expect(newEngineer.getRole()).toEqual('Engineer');
    });
  });