import { TimerState } from "../types";

export function getStateButtonText(timerState: TimerState): string {
    switch (timerState){
        case TimerState.Running:
            return "PAUSE";
        case TimerState.Finished:
            return "RESTART"
        case TimerState.Stopped:
        case TimerState.Paused:
        default:
            return "START";
    }
}