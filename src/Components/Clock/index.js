import './styles.css'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import { MdPlayArrow, MdPause, MdReplay } from 'react-icons/md'
import { useEffect, useReducer, useState } from 'react'
import { reducer, ACTIONS} from '../../reducerFunction'
import Alarm from '../../assets/alarm.wav'

const Clock = () => {
	const [time, setTime] = useState({minutes: '02', seconds: '00'})
	const [state, dispatch] = useReducer(reducer, {session: "Break", interval: null, length: 0, play : false})

	useEffect(() => {
		if(time.seconds === '00' && time.minutes === '00' && state.play === true){
			const ID = document.getElementById('audio-alarm')
			ID.play()
		}
	})

	return (
		<div className='clock-container'>
			<div className='main-tittle'>Lunch & Break Timer</div>
			<div id='break-session' className={`clock-length ${state.session === 'Break' ? 'break-active': null}`} onClick={() => dispatch({type: ACTIONS.SESSION, payload: {session: 'Break'}})}>
				Break
			</div>
			<div id='lunch-session' className={`clock-length ${state.session === 'Lunch' ? 'lunch-active': null}`} onClick={() => dispatch({type: ACTIONS.SESSION, payload: {session: 'Lunch'}})}>
				Lunch
			</div>
			<div>
				<AiOutlineArrowUp className='arrow-buttons' onClick={() => dispatch({type: ACTIONS.LENGTH, payload: {setter: setTime, operation: 'add'}})}/>
					{state.length}
				<AiOutlineArrowDown className='arrow-buttons' onClick={() => dispatch({type: ACTIONS.LENGTH, payload: {setter: setTime, operation: 'substract'}})}/>
			</div>
			<div className='screen-session'>
				<div>{`${state.session}`}</div>
				<p className={time.minutes === '00' && state.play ? 'timeover-active':null}>
					<span id='minutes'>{time.minutes}</span>:<span id='seconds'>{time.seconds}</span>
				</p>
				<audio id='audio-alarm' src={Alarm}></audio>	
			</div>
			<div>
				<MdPlayArrow className='action-buttons' onClick={() => dispatch({type: ACTIONS.PLAY, payload: {setter: setTime}})} />
				<MdPause className='action-buttons' onClick={() => dispatch({type: ACTIONS.STOP})}/>
				<MdReplay className='action-buttons' onClick={() => dispatch({type: ACTIONS.RESET, payload: {setter: setTime}})}/>
			</div>
			<div className='signature'>Designed and coded by: <br></br>Mario Suarez</div>
		</div>
	)
}

export default Clock
