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

export function startTimer(seconds, minutes) {
	seconds = +seconds
	minutes = +minutes
	seconds++

	if (seconds <= 9) {
		return '0' + seconds.toString()
	}

	if (seconds > 9) {
		return seconds
	}

	if (minutes > 99) {
		console.log('seconds')
		minutes++
		minutes = '0' + minutes.toString()
		seconds = '00'
		return [seconds, minutes]
	}

	if (minutes > 9) {
		return minutes
	}
}
