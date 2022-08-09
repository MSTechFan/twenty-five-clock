/* let Interval

buttonStart.onclick = function () {
	clearInterval(Interval)
	Interval = setInterval(startTimer, 10)
}

buttonStop.onclick = function () {
	clearInterval(Interval)
}

buttonReset.onclick = function () {
	clearInterval(Interval)
	tens = '00'
	seconds = '00'
	appendTens.innerHTML = tens
	appendSeconds.innerHTML = seconds
} */

export function startTimer(time) {

	let seconds 
	let minutes 

	seconds = +time.seconds
	minutes = +time.minutes
	

	if(minutes === 0 && seconds === 0){
		// se acabo el temporizador
		minutes = '0' + minutes
		seconds = '0' + seconds
		return {minutes, seconds}
	}

	if(seconds === 0){
		minutes--
		minutes += ''
		seconds = 60
		seconds += ''
		return {minutes, seconds}
	}

	if(seconds <= 10){
		seconds --
		seconds = '0' + seconds
		minutes += ''
		return {minutes, seconds}
	}

	seconds--
	seconds += ''
	minutes += ''

	return {minutes, seconds}
}