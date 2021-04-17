const Employee = require("../lib/employee")

describe("Employee class", () =>{
    describe("getEmployeeName", () => {
        it("Get employee name", () => {
            const name = "javier";
            const employee = new Employee(name, "1", "jamondra@ucdavis.edu", "javimarashall");
            expect(employee.getEmployeeName().ToBe("javier"));
})
});
    describe("getID", () => {
        it("Get employee id", () => {
            const ID = "10";
            const employee = new Employee("javier", ID, "jamondra@ucdavis.edu", "javimarashall");
            expect(employee.getID().ToBe("10"));
        })
});
    describe("getEmail", () => {
        it("Get employee e-mail", () => {
            const email = "jamondragon@ucdavis.edu";
            const employee = new Employee("javier", "10", email, "javimarashall");
            expect(employee.getEmail().ToBe("jamondragon@ucdavis.edu"));
    })
});
    describe("getGitHub", () => {
        it("Get employee GitHub", () => {
            const gitHub = "javimarashall";
            const employee = new Employee("javier", ID, "jamondra@ucdavis.edu", gitHub);
            expect(employee.getGitHub().ToBe("javimarashall"));
    })
});
})