import { startTimer } from "./startTimer"

export const ACTIONS  = {
    PLAY: "play",
    RESET: "reset",
    STOP: "stop",
    SESSION: "session",
  }

let Interval  

export function reducer (state, {type, payload}) { 
// eslint-disable-next-line no-empty
switch(type) {
    case ACTIONS.PLAY:
        if(!state.play){
            Interval = setInterval(() => {
                payload.setter(time => ({
                    ...time, 
                    ...startTimer(time)
                }))
            }, 1000)
            return {
                ...state,
                interval : Interval,
                play: true
            }
        }
        return state
    case ACTIONS.STOP:
        clearInterval(state.interval)
        return {
            ...state,
            play: false
        }
    case ACTIONS.RESET:
        clearInterval(state.interval)
        payload.setter({seconds: '00', minutes: '00'})
        return {
            ...state,
            play: false
        }
    case ACTIONS.SESSION:
        switch(payload.session){
            case "Break":
                return {
                    ...state, 
                    session: payload.session
                }
            case "Lunch":
                return {
                    ...state,
                    session: payload.session
                }
            default:
                return state
        }
    }
}