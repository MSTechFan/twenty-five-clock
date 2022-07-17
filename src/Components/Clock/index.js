import './styles.css'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import { MdPlayArrow, MdPause, MdReplay } from 'react-icons/md'
import { useState } from 'react'

const Clock = () => {
	// eslint-disable-next-line no-unused-vars
	const [secs, setSegs] = useState('00')
	// eslint-disable-next-line no-unused-vars
	const [mins, setMins] = useState('00')
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
					<span id='minutes'>{mins}</span>:<span id='seconds'>{secs}</span>
				</p>
			</div>
			<div>
				<MdPlayArrow className='action-buttons' />
				<MdPause className='action-buttons' />
				<MdReplay className='action-buttons' />
			</div>
			<div className='signature'>Directed by: Mario Suarez</div>
		</div>
	)
}

export default Clock
