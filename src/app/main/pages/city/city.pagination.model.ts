import {District} from "../district/district.pagination.model";
import {Country} from "../country/country-pagination.model";
import {State} from "../state/state-pagination.model";

export class City {
    cityId?: number | null;
    cityName?: string | null;
    cityCode?: string | null;
    cityShortName?: string | null;
    isActive?: boolean | null;
    countryId?: number | null;
    country?: Country | null;
    stateId?: number | null;
    state?: State | null;
    districts?: District[] | null;
    createdBy?: number | null;
    createdDate?: Date | null;
    updatedBy?: number | null;
    updatedDate?: Date | null;

    public constructor(init?: Partial<City>) {
        // noinspection TypeScriptValidateTypes
        Object.assign(this, init);
    }
}