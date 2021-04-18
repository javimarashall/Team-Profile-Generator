const Engineer = require("../lib/engineer")

describe("Engineer class", () => {
    it("Test get methods", () => {
        const engineer = new Engineer("javier", "10", "jamondragon@ucdavis.edu", "javimarashall");
        expect(engineer.getName()).toBe("javier");
        expect(engineer.getId()).toBe("10");
        expect(engineer.getEmail()).toBe("jamondragon@ucdavis.edu");
        expect(engineer.getGithub()).toBe("javimarashall");
    });
})


