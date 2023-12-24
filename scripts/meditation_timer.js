// meditation timer
let starttime;
let duration;
let endtime;
let clock_on = false;
let clockID;
function meditate2() {
  let mins = document.getElementById("meditationMins").value;
  if (mins < 0) { return; } // no funny business
  starttime = Date.now();
  duration = mins*60*1000;
  endtime = starttime + duration;
  bar.style.width = 0;
  
  // set up clock if necessary
  if (clock_on == false) {
	clockID = setInterval(barUpdate, 50);
	clock_on = true;
  }
}

let bar = document.getElementById("meditationBar");
function barUpdate() {
  timeNow = Date.now();
  timeElapsed = timeNow - starttime;
  percentComplete = timeElapsed/duration*100;
  (percentComplete > 100) ? percentComplete = 100 : "we're chillin";
  bar.style.width = percentComplete + "%";
  if (timeNow >= endtime) {
	clearInterval(clockID);
	ringbell();
	clock_on = false;
  }
	
}

function ringbell() {
	let volume = document.getElementById("bellVolume").value;
	let bell = document.getElementById("bell");
	bell.volume = volume;
	bell.play();
}

let emomodeOFF = true;
function emomodeToggle() {
	if (emomodeOFF) {
		emomode()
		emomodeOFF = false;
	} else {
		regularmode()
		emomodeOFF = true;
	}
}

function emomode() {
	document.getElementById("meditationBar").style.backgroundColor = "blue";
}
  
function regularmode() {
	document.getElementById("meditationBar").style.backgroundColor = "green";
}