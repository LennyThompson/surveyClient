// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Mar 07 20:55:08 AEST 2017

import {Injectable} from "@angular/core";
import {Instrument} from "./../../../services/surveyDb/types";

// Declare injectable provider for simple objects of type Instrument

@Injectable()
export class CurrentInstrumentProvider
{
    m_Instrument: Instrument;

    get Instrument(): Instrument
    {
        if(!this.m_Instrument)
        {
            this.m_Instrument = new Instrument();
        }
        return this.m_Instrument;
    }

    set Instrument(value: Instrument)
    {
        this.m_Instrument = value;
    }

    hasExistingInstrument(): boolean
    {
        return !!this.m_Instrument;
    }
}

// Declare injectable provider for id context of type Instrument

@Injectable()
export class InstrumentContextProvider
{
    m_ID: number;

    get InstrumentID(): number
    {
        return this.m_ID;
    }

    set InstrumentID(value: number)
    {
        this.m_ID = value;
    }
}

// Declare injectable provider for array of objects of type Instrument

@Injectable()
export class CurrentInstrumentListProvider
{
    m_listInstrument: Instrument[];

    get Instruments(): Instrument[]
    {
        if(!this.m_listInstrument)
        {
            this.m_listInstrument = new Array<Instrument>();
        }
        return this.m_listInstrument;
    }

    set Instruments(value: Instrument[])
    {
        this.m_listInstrument = value;
    }
}
