export function convertMinutesToSeconds(timeInMinutes: number): number {
    return timeInMinutes * 60;
}

export function getMinutesAndSeconds(timeInSeconds : number): { minutes: number, seconds: number} {
    let minutes = 0;
    let seconds = 0;
    
    if (timeInSeconds >= 60) {
        minutes = Math.trunc(timeInSeconds / 60);
        seconds = timeInSeconds % 60;
    } else {
        seconds = timeInSeconds;
    }
    


    return {minutes, seconds};
}

export function displayTime(minutes : number, seconds : number): string {
    let minutesString: string;
    let secondsString: string;

    if(minutes < 10) {
        minutesString = `0${minutes}`;
    } else {
        minutesString = minutes.toString();
    }

    if(seconds < 10) {
        secondsString = `0${seconds}`;
    } else {
        secondsString = seconds.toString();
    }

    return `${minutesString}:${secondsString}`;
}