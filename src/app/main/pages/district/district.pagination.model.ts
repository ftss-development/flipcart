import {Area} from "../area/area.pagination.model";
import {City} from "../city/city.pagination.model";
import {Country} from "../country/country-pagination.model";
import {State} from "../state/state-pagination.model";

export class District {
    districtId?: number | null;
    districtName?: string | null;
    districtShortName?: string | null;
    isActive?: boolean | null;
    countryId?: number | null;
    country?: Country | null;
    stateId?: number | null;
    state?: State | null;
    cityId?: number | null;
    city?: City | null;
    areas?: Area[] | null;
    createdBy?: number | null;
    createdDate?: Date | null;
    updatedBy?: number | null;
    updatedDate?: Date | null;

    public constructor(init?: Partial<District>) {
        // noinspection TypeScriptValidateTypes
        Object.assign(this, init);
    }
}