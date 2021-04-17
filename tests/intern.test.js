const Intern = require("../lib/intern")

describe("Intern class", () =>{
    describe("getInternName", () => {
        it("Get intern name", () => {
            const name = "javier";
            const intern = new Intern(name, "1", "jamondra@ucdavis.edu", "javimarashall");
            expect(intern.getInternName().ToBe("javier"));
})
});
    describe("getID", () => {
        it("Get intern id", () => {
            const ID = "10";
            const intern = new Intern("javier", ID, "jamondra@ucdavis.edu", "javimarashall");
            expect(intern.getID().ToBe("10"));
        })
});
    describe("getEmail", () => {
        it("Get intern e-mail", () => {
            const email = "jamondragon@ucdavis.edu";
            const intern = new Intern("javier", "10", email, "javimarashall");
            expect(intern.getEmail().ToBe("jamondragon@ucdavis.edu"));
    })
});
    describe("getSchoolName", () => {
        it("Get intern school name", () => {
            const school = "university";
            const intern = new Intern("javier", ID, "jamondra@ucdavis.edu", school);
            expect(intern.getSchoolName().ToBe("university"));
    })
});
})