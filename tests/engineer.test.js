const Engineer = require("../lib/engineer")

describe("Engineer class", () =>{
    describe("getEngineerName", () => {
        it("Get engineer name", () => {
            const name = "javier";
            const engineer = new Engineer(name, "1", "jamondra@ucdavis.edu", "javimarashall");
            expect(engineer.getEngineerName().ToBe("javier"));
})
});
    describe("getID", () => {
        it("Get engineer id", () => {
            const ID = "10";
            const engineer = new Engineer("javier", ID, "jamondra@ucdavis.edu", "javimarashall");
            expect(engineer.getID().ToBe("10"));
        })
});
    describe("getEmail", () => {
        it("Get engineer e-mail", () => {
            const email = "jamondragon@ucdavis.edu";
            const engineer = new Engineer("javier", "10", email, "javimarashall");
            expect(engineer.getEmail().ToBe("jamondragon@ucdavis.edu"));
    })
});
    describe("getGitHub", () => {
        it("Get engineer GitHub", () => {
            const gitHub = "javimarashall";
            const engineer = new Engineer("javier", ID, "jamondra@ucdavis.edu", gitHub);
            expect(engineer.getGitHub().ToBe("javimarashall"));
    })
});
})