import {State} from '../state/state-pagination.model';

export class Country {
    countryId?: number | null;
    countryName?: string | null;
    countryCode?: string | null;
    countryShortName?: string | null;
    isActive?: boolean | null;
    states?: State[] | null;
    createdBy?: number | null;
    createdDate?: Date | null;
    updatedBy?: number | null;
    updatedDate?: Date | null;

    public constructor(init?: Partial<Country>) {
        // noinspection TypeScriptValidateTypes
        Object.assign(this, init);
    }
}