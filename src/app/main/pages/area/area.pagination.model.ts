import {Colony} from "../colony/colony.pagination.model";

export class Area {
    areaId?: number | null;
    areaName?: string | null;
    areaShortName?: string | null;
    pinCode?: string | null;
    isActive?: boolean | null;
    districtId?: number | null;
    colonies?: Colony[] | null;
    countryId?: number | null;
    stateId?: number | null;
    cityId?: number | null;
    createdBy?: number | null;
    createdDate?: Date | null;
    updatedBy?: number | null;
    updatedDate?: Date | null;

    public constructor(init?: Partial<Area>) {
        // noinspection TypeScriptValidateTypes
        Object.assign(this, init);
    }
}