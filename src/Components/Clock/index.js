import './styles.css'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import { MdPlayArrow, MdPause, MdReplay } from 'react-icons/md'
import { useState } from 'react'
/* import {startTimer} from '../../startTimer' */

const Clock = () => {
	/* const [intervalId, setIntervalId] = useState('')
	const [play, setPlay] = useState(false) */
	// eslint-disable-next-line no-unused-vars
	const [session, setSession] = useState('break')
	const [time, setTime] = useState({minutes: '15', seconds: '00'})
	const [clicked, setClicked] = useState(false)

	const handleArrows = (timeObj, operation) => {
		let minutes = +(timeObj.minutes)
		if(operation === 'add'){
			minutes += 1
			setTime(timeObj => ({
				...timeObj,
				minutes: '' + minutes,
			}))
		}
		if(operation === 'substract'){
			minutes -= 1
			setTime(timeObj => ({
				...timeObj,
				minutes: '' + minutes,
			}))
		}
	}

	const handleClickSession = () => {
		setSession('Break')
		setClicked(!clicked)
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
			<div className={`clock-length ${clicked ? 'on-click': ""}`} onClick={handleClickSession}>
				<div className='break-label'> Break Length</div>
				<AiOutlineArrowUp className='arrow-buttons' onClick={() => handleArrows(time, 'add')}/>
				{time.minutes}
				<AiOutlineArrowDown className='arrow-buttons' onClick={() => handleArrows(time, 'substract')}/>
			</div>
			<div className={`clock-length ${clicked ? 'on-click': ""}`} onClick={handleClickSession}>
				<div className='break-label'> Lunch Length</div>
				<AiOutlineArrowUp className='arrow-buttons' onClick={() => handleArrows(time, 'add')}/>
				{time.minutes}
				<AiOutlineArrowDown className='arrow-buttons' onClick={() => handleArrows(time, 'substract')}/>
			</div>
			<div className='screen-session'>
				<div>{`${session}`}</div>
				<p>
					<span id='minutes'>{time.minutes}</span>:<span id='seconds'>{time.seconds}</span>
				</p>
			</div>
			<div>
				<MdPlayArrow className='action-buttons'  />
				<MdPause className='action-buttons' />
				<MdReplay className='action-buttons'/>
			</div>
			<div className='signature'>Designed and coded by: <br></br>Mario Suarez</div>
		</div>
	)
}

export default Clock
