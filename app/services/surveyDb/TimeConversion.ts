export class TimeConversion
{
    static toDate(strJsonDate: string): Date
    {
        let dateReturn = new Date(strJsonDate);
        return dateReturn;
    }

    static fromDate(dateFrom: Date): string
    {
        return dateFrom.toISOString();
    }
}