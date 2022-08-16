import { startTimer } from "./startTimer"

export const ACTIONS  = {
    PLAY: "play",
    RESET: "reset",
    STOP: "stop",
    SESSION: "session",
    LENGTH: "length"
  }

let Interval  
const RANGE = 15


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
        payload.setter({minutes: state.length, seconds: '00'})
        return {
            ...state,
            play: false
        }
    case ACTIONS.SESSION:
        if(state.play){
            return state
        }
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
    case ACTIONS.LENGTH:
        if(state.play){
            return state
        }
        if(payload.operation === 'add'){
            const MINS = +(state.length) + RANGE
            if(state.length >= 60){
                return state
            }
            payload.setter(time =>({
                ...time,
                minutes: '' + MINS,
                seconds: '00'
            }))
            return {
                ...state,
                length: MINS
            }
        }
        if(payload.operation === 'substract'){
            if(state.length === 0){
                return state
            }
            const MINS = +(state.length)  - RANGE
            if(state.length === RANGE) {
                payload.setter(time => ({
                    ...time,
                    minutes: '00'
                }))
                return {
                    ...state,
                    length: 0
                }
            }
            payload.setter(time =>({
                ...time,
                minutes: '' + MINS,
                seconds: '00'
            }))
            return {
                ...state,
                length: MINS
            }
        }
    }
}