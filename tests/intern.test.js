const Intern = require("../lib/intern")

describe("Intern class", () => {
    it("Test get methods", () => {
        const intern = new Intern("javier", "10", "jamondragon@ucdavis.edu", "university");
        expect(intern.getName()).toBe("javier");
        expect(intern.getId()).toBe("10");
        expect(intern.getEmail()).toBe("jamondragon@ucdavis.edu");
        expect(intern.getSchool()).toBe("university");
    });
})



