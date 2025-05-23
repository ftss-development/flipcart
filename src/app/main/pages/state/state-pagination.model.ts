import {City} from "../city/city.pagination.model";
import {Country} from "../country/country-pagination.model";

export class State {
    stateId?: number | null;
    stateName?: string | null;
    stateShortName?: string | null;
    stateGstCode?: string | null;
    isActive?: boolean | null;
    countryId?: number | null;
    country?: Country | null;
    cities?: City[] | null;
    createdBy?: number | null;
    createdDate?: Date | null;
    updatedBy?: number | null;
    updatedDate?: Date | null;

    public constructor(init?: Partial<State>) {
        // noinspection TypeScriptValidateTypes
        Object.assign(this, init);
    }
}