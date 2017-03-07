// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Mar 07 20:55:08 AEST 2017

import {Injectable} from "@angular/core";
import {InstrumentManufacturer} from "./../../../services/surveyDb/types";

// Declare injectable provider for simple objects of type InstrumentManufacturer

@Injectable()
export class CurrentInstrumentManufacturerProvider
{
    m_InstrumentManufacturer: InstrumentManufacturer;

    get InstrumentManufacturer(): InstrumentManufacturer
    {
        if(!this.m_InstrumentManufacturer)
        {
            this.m_InstrumentManufacturer = new InstrumentManufacturer();
        }
        return this.m_InstrumentManufacturer;
    }

    set InstrumentManufacturer(value: InstrumentManufacturer)
    {
        this.m_InstrumentManufacturer = value;
    }

    hasExistingInstrumentManufacturer(): boolean
    {
        return !!this.m_InstrumentManufacturer;
    }
}

// Declare injectable provider for id context of type InstrumentManufacturer

@Injectable()
export class InstrumentManufacturerContextProvider
{
    m_ID: number;

    get InstrumentManufacturerID(): number
    {
        return this.m_ID;
    }

    set InstrumentManufacturerID(value: number)
    {
        this.m_ID = value;
    }
}

// Declare injectable provider for array of objects of type InstrumentManufacturer

@Injectable()
export class CurrentInstrumentManufacturerListProvider
{
    m_listInstrumentManufacturer: InstrumentManufacturer[];

    get InstrumentManufacturers(): InstrumentManufacturer[]
    {
        if(!this.m_listInstrumentManufacturer)
        {
            this.m_listInstrumentManufacturer = new Array<InstrumentManufacturer>();
        }
        return this.m_listInstrumentManufacturer;
    }

    set InstrumentManufacturers(value: InstrumentManufacturer[])
    {
        this.m_listInstrumentManufacturer = value;
    }
}
