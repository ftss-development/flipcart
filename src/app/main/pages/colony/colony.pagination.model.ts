import {Country} from "../country/country-pagination.model";
import {State} from "../state/state-pagination.model";
import {District} from "../district/district.pagination.model";
import {Area} from "../area/area.pagination.model";
import {City} from "../city/city.pagination.model";

export class Colony {
    colonyId?: number | null;
    colonyName?: string | null;
    colonyShortName?: string | null;
    isActive?: boolean | null;
    areaId?: number | null;
    area?: Area | null;
    countryId?: number | null;
    country?: Country | null;
    stateId?: number | null;
    state?: State | null;
    cityId?: number | null;
    cities?: City[] | null;
    districtId?: number | null;
    districts?: District[] | null;
    createdBy?: number | null;
    createdDate?: Date | null;
    updatedBy?: number | null;
    updatedDate?: Date | null;


    public constructor(init?: Partial<Colony>) {
        // noinspection TypeScriptValidateTypes
        Object.assign(this, init);
    }
}