const Employee = require("../lib/employee")

describe("Employee class", () => {
    it("Test get methods", () => {
        const employee = new Employee("javier", "10", "jamondragon@ucdavis.edu");
        expect(employee.getName()).toBe("javier");
        expect(employee.getId()).toBe("10");
        expect(employee.getEmail()).toBe("jamondragon@ucdavis.edu");
    });
})