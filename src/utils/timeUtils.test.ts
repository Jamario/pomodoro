import { getMinutesAndSeconds, displayTime, convertMinutesToSeconds} from './timeUtils';

describe('Time Utility Functions: getMinutesAndSeconds', () => {
    it('should return 1 minute and 0 seconds, given 60 seconds', () => {
        const timeInSeconds = 60;
        const expectedValue = {minutes: 1, seconds: 0};
        const actualValue = getMinutesAndSeconds(timeInSeconds);
        expect(actualValue).toEqual(expectedValue);
    });

    it('should return 2 minutes and 11 seconds, given 131 seconds', () => {
        const timeInSeconds = 131;
        const expectedValue = {minutes: 2, seconds: 11};
        const actualValue = getMinutesAndSeconds(timeInSeconds);
        expect(actualValue).toEqual(expectedValue);
    });

    it('should return 0 minutes and 59 seconds, given 59 seconds', () => {
        const timeInSeconds = 59;
        const expectedValue = {minutes: 0, seconds: 59};
        const actualValue = getMinutesAndSeconds(timeInSeconds);
        expect(actualValue).toEqual(expectedValue);
    });

    it('should return 99 minutes and 99 seconds, given 5999 seconds', () => {
        const timeInSeconds = 5999;
        const expectedValue = {minutes: 99, seconds: 59};
        const actualValue = getMinutesAndSeconds(timeInSeconds);
        expect(actualValue).toEqual(expectedValue);
    });
});

describe('Time Utility Functions: displayTime', () => {
    it('should return 00:00, given 0 minutes and 0 seconds', () => {
        const minutes = 0;
        const seconds = 0;
        const expectedValue = '00:00';
        const actualValue = displayTime(minutes, seconds);
        expect(actualValue).toBe(expectedValue);
    });

    it('should return 05:09, given 5 minutes and 9 seconds', () => {
        const minutes = 5;
        const seconds = 9;
        const expectedValue = '05:09';
        const actualValue = displayTime(minutes, seconds);
        expect(actualValue).toBe(expectedValue);
    });

    it('should return 99:99, given 99 minutes and 99 seconds', () => {
        const minutes = 99;
        const seconds = 99;
        const expectedValue = '99:99';
        const actualValue = displayTime(minutes, seconds);
        expect(actualValue).toBe(expectedValue);
    });
});

describe('Time Utility Functions: convertMinutesToSeconds', () => {
    it('should return 60 seconds, given 1 minute', () => {
        const minutes = 1;
        const expectedValue = 60;
        const actualValue = convertMinutesToSeconds(minutes);
        expect(actualValue).toBe(expectedValue);
    });
    it('should return 1500 seconds, given 25 minute', () => {
        const minutes = 25;
        const expectedValue = 1500;
        const actualValue = convertMinutesToSeconds(minutes);
        expect(actualValue).toBe(expectedValue);
    });
    it('should return 5940 seconds, given 99 minute', () => {
        const minutes = 99;
        const expectedValue = 5940;
        const actualValue = convertMinutesToSeconds(minutes);
        expect(actualValue).toBe(expectedValue);

    });
});