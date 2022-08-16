export function startTimer(time) {

	let seconds 
	let minutes 

	seconds = +time.seconds
	minutes = +time.minutes
	

	if(minutes === 0 && seconds === 0){
		minutes = '0' + minutes
		seconds = '0' + seconds
		return {minutes, seconds}
	}

	if(seconds === 0){
		if(minutes <= 10){
			minutes--
			minutes = '0' + minutes
			seconds = 11
			seconds += ''
			return {minutes, seconds}
		}
		minutes--
		minutes += ''
		seconds = 11
		seconds += ''
		return {minutes, seconds}
	}

	if(seconds <= 10){
		if(minutes < 10){
			seconds--
			seconds = '0' + seconds
			minutes = '0' + minutes
			return {minutes, seconds}
		}
		seconds--
		seconds = '0' + seconds
		minutes += ''
		return {minutes, seconds}
	}

	if(minutes < 10){
		seconds--
		seconds += ''
		minutes = '0' + minutes
		return {minutes, seconds}
	}

	seconds--
	seconds += ''
	minutes += ''

	return {minutes, seconds}
}