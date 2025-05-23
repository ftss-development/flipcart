export class Attendance {
    companyID?: number | null;
    unit?: string | null;
    shift?: string | null;
    vehicleNo?: string | null;
    employeeID?: number | null;
    cardNo?: string | null;
    doj?: Date | null;
    bloodGroupID?: number | null;
    qualificationID?: number | null;
    experienceInMonth?: string | null;
    shiftStartTime?: Date | null;
    shiftEndTime?: Date | null;
    shiftHours?: string | null;
    halfDayMarkingInMinutes?: string | null;
    lunchStartTime?: Date | null;
    lunchDuration?: string | null;
    lunchEndTime?: Date | null;
    permissibleEarlyMinutes?: string | null;
    permissibleLateArrivalInMinutes?: string | null;
    weeklyOffID?: number | null;
    punchesRequiredInADayID?: number | null;
    createdBy?: number | null;
    createdDate?: Date | null;
    updatedBy?: number | null;
    updatedDate?: Date | null;

    public constructor(init?: Partial<Attendance>) {
        // noinspection TypeScriptValidateTypes
        Object.assign(this, init);
    }

}
