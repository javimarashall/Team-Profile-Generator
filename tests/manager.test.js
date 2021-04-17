const Manager = require("../lib/manager")

describe("Manager class", () =>{
    describe("getManagerName", () => {
        it("Get manager name", () => {
            const name = "javier";
            const manager = new Manager(name, "10", "jamondra@ucdavis.edu", "javimarashall");
            expect(manager.getInternName().ToBe("javier"));
})
});
    describe("getID", () => {
        it("Get manager id", () => {
            const id = "10";
            const manager = new Manager("javier", ID, "jamondra@ucdavis.edu", "javimarashall");
            expect(manager.getID().ToBe("10"));
        })
});
    describe("getEmail", () => {
        it("Get manager e-mail", () => {
            const email = "jamondragon@ucdavis.edu";
            const manager = new Manager("javier", "10", email, "javimarashall");
            expect(manager.getEmail().ToBe("jamondragon@ucdavis.edu"));
    })
});
    describe("getOfficeNumber", () => {
        it("Get office number", () => {
            const officeNumber = "10";
            const manager = new Manager("javier", "10", "jamondra@ucdavis.edu", officeNumber);
            expect(manager.getOfficeNumber().ToBe("10"));
    })
});
})