import './styles.css'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import { MdPlayArrow, MdPause, MdReplay } from 'react-icons/md'
import { useState } from 'react'
import {startTimer} from '../../startTimer'

const Clock = () => {
	const [time, setTime] = useState({seconds: '00', minutes: '00'})
	const [intervalId, setIntervalId] = useState('')
	const [play, setPlay] = useState(false)
	
	const handlePlayClick = () => {
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
	}

	return (
		<div className='clock-container'>
			<div className='main-tittle'>25 + 5 Clock</div>
			<div className='clock-length'>
				<div className='break-label'> Break Length</div>
				<AiOutlineArrowUp className='arrow-buttons' />
				5
				<AiOutlineArrowDown className='arrow-buttons' />
			</div>
			<div className='clock-length'>
				<div className='break-label'> Session Length</div>
				<AiOutlineArrowUp className='arrow-buttons' />
				5
				<AiOutlineArrowDown className='arrow-buttons' />
			</div>
			<div className='screen-session'>
				<div>Session</div>
				<p>
					<span id='minutes'>{time.minutes}</span>:<span id='seconds'>{time.seconds}</span>
				</p>
			</div>
			<div>
				<MdPlayArrow className='action-buttons' onClick={handlePlayClick} />
				<MdPause className='action-buttons' onClick={handlePauseClick}/>
				<MdReplay className='action-buttons' onClick={handleResetClick}/>
			</div>
			<div className='signature'>Directed by: Mario Suarez</div>
		</div>
	)
}

export default Clock
