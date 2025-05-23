export class Employee {
    employeeID?: number | null;
    shortCode?: string | null;
    dob?: Date | null;
    genderID?: number | null;
    employeeName?: string | null;
    fathersName?: string | null;
    address?: string | null;
    stateID?: string | null;
    cityID?: number | null;
    designationID?: number | null;
    supervisorID?: number | null;
    userTypeID?: number | null;
    contactID?: number | null;
    emailID?: number | null;
    statusID?: number | null;
    createdBy?: number | null;
    createdDate?: Date | null;
    updatedBy?: number | null;
    updatedDate?: Date | null;

    public constructor(init?: Partial<Employee>) {
        // noinspection TypeScriptValidateTypes
        Object.assign(this, init);
    }
}
