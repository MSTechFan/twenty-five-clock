import './styles.css'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import { MdPlayArrow, MdPause, MdReplay } from 'react-icons/md'
import { useReducer, useState } from 'react'
import { reducer, ACTIONS} from '../../reducerFunction'
/* import {startTimer} from '../../startTimer' */

const Clock = () => {
	const [time, setTime] = useState({minutes: '15', seconds: '00'})
	// eslint-disable-next-line no-unused-vars
	const [{session="break",breakLength="15",lunchLength="15", interval, play = false},dispatch] = useReducer(reducer, {})

	const handleArrows = (timeObj, operation) => {
		let minutes = +(timeObj.minutes)
		if(operation === 'add'){
			minutes += 15
			setTime(timeObj => ({
				...timeObj,
				minutes: '' + minutes,
			}))
		}
		if(operation === 'substract'){
			minutes -= 15
			setTime(timeObj => ({
				...timeObj,
				minutes: '' + minutes,
			}))
		}
	}

	const handleClickSession = () => {
		if(clicked === 'break'){
			setSession('Break')
			setClicked('break')
		}
		if(clicked === 'lunch')
		setSession('Lunch')
		setClicked('lunch')
	}
	
	/* const handlePlayClick = () => {
		if(!play) {
			setPlay(true)
			const Interval = setInterval(() => {
				setTime(time => ({
					...time, 
					...startTimer(time)
				}))
			}, 1000)
			setIntervalId(Interval)
		}
	}

	const handlePauseClick = () => {
		clearInterval(intervalId)
		setPlay(false)
	}

	const handleResetClick = () => {
		clearInterval(intervalId)
		setTime({seconds: '00', minutes: '00'})
		setPlay(false)
	} */

	return (
		<div className='clock-container'>
			<div className='main-tittle'>Lunch & Break Timer</div>
			<div id='break-session' className={`clock-length ${session === 'break' ? 'on-click-break': null}`} onClick={() => dispatch({type: ACTIONS.SESSION, payload: {session: 'break'}})}>
				<div className='break-label'> Break Length</div>
				<AiOutlineArrowUp className='arrow-buttons' onClick={() => dispatch({type: ACTIONS.LENGTH, payload: {value: 'add'}})}/>
				{breakLength}
				<AiOutlineArrowDown className='arrow-buttons' onClick={() => dispatch({type: ACTIONS.LENGTH, payload: {value: 'substract'}})}/>
			</div>
			<div id='lunch-session' className={`clock-length ${session === 'lunch' ? 'on-click-lunch': null}`} onClick={handleClickSession}>
				<div className='break-label'> Lunch Length</div>
				<AiOutlineArrowUp className='arrow-buttons' onClick={() => dispatch({type: ACTIONS.LENGTH, payload: {value: 'add'}})}/>
				{lunchLength}
				<AiOutlineArrowDown className='arrow-buttons' onClick={() => dispatch({type: ACTIONS.LENGTH, payload: {value: 'substract'}})}/>
			</div>
			<div className='screen-session'>
				<div>{`${session}`}</div>
				<p>
					<span id='minutes'>{time.minutes}</span>:<span id='seconds'>{time.seconds}</span>
				</p>
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
