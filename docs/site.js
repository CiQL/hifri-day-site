function starshower() {
	const elem=document.getElementsByClassName("stars")
	for (const e of elem){
		const star = e.textContent
		const starcount = star.split(".")
		e.textContent = "★".repeat(star)+(starcount.length>1?"☆":"")+" ("+star+")"
	}
}

function unixtc() {
	const elem=document.getElementsByClassName("time")
	for (const e of elem){
		const time = e.dataset.time
		const current = new Date()
		current.setTime(time*1000)
		e.textContent = current.toString()
	}
}
