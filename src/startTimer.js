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
	let seconds = +time.seconds
	let minutes = +time.minutes
	seconds++

	if (seconds <= 9) {
		return {seconds: '0' + seconds.toString(), minutes}
	}

	if (seconds > 9) {
		return {seconds, minutes}
	}

	if (seconds > 99) {
		minutes++
		minutes = '0' + minutes.toString()
		seconds = '00'
		return {seconds, minutes}
	}

	if (minutes > 9) {
		return {seconds, minutes}
	}
}
