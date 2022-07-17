let Interval

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
}

function startTimer(seconds, minutes) {
	seconds++

	if (tens <= 9) {
		appendTens.innerHTML = '0' + seconds
	}

	if (tens > 9) {
		appendTens.innerHTML = seconds
	}

	if (minutes > 99) {
		console.log('seconds')
		minutes++
		appendSeconds.innerHTML = '0' + minutes
		seconds = 0
		appendTens.innerHTML = '0' + 0
	}

	if (minutes > 9) {
		appendSeconds.innerHTML = minutes
	}
}
