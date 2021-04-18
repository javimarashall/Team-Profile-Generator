const Manager = require("../lib/manager")

describe("Manager class", () =>{
    it("Test Manager get methods", () => {
        const manager = new Manager("javier", "10", "jamondragon@ucdavis.edu", "10");
        expect(manager.getName()).toBe("javier");
        expect(manager.getId()).toBe("10");
        expect(manager.getEmail()).toBe("jamondragon@ucdavis.edu");
        expect(manager.getOfficeNumber()).toBe("10");
    });
});