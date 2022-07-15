import './styles.css'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import { MdPlayArrow, MdPause, MdReplay } from 'react-icons/md'

const Clock = () => {
	return (
		<div className='clock-container'>
			<div className='main-tittle'>25 + 5 Clock</div>
			<div className='clock-length'>
				<div className='break-label'> Break Length</div>
				<AiOutlineArrowUp style={{ width: '1rem', height: '1rem' }} />
				5
				<AiOutlineArrowDown style={{ width: '1rem', height: '1rem' }} />
			</div>
			<div className='clock-length'>
				<div className='break-label'> Session Length</div>
				<AiOutlineArrowUp style={{ width: '1rem', height: '1rem' }} />
				5
				<AiOutlineArrowDown style={{ width: '1rem', height: '1rem' }} />
			</div>
			<div className='screen-session'>
				<div>Session</div>
				<p><span id="seconds">00</span>:<span id="tens">00</span></p>
			</div>
			<div>
				<MdPlayArrow />
				<MdPause />
				<MdReplay />
			</div>
			<div className='signature'>Directed by: Mario Suarez</div>
		</div>
	)
}

export default Clock
