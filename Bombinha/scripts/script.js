// const time_picker_element = document.querySelector('.time-picker');

// const hr_element = document.querySelector('.time-picker .hour .hr');
// const min_element = document.querySelector('.time-picker .minute .min');

// const hr_up = document.querySelector('.time-picker .hour .hr-up');
// const hr_down = document.querySelector('.time-picker .hour .hr-down');

// const min_up = document.querySelector('.time-picker .minute .min-up');
// const min_down = document.querySelector('.time-picker .minute .min-down');


// let hour = 1;
// let minute = 0;
// setTime();

// // Aumentando os valores
// hr_up.addEventListener('click', hour_up);
// hr_down.addEventListener('click', hour_down);

// min_up.addEventListener('click', minute_up);
// min_down.addEventListener('click', minute_down);

// hr_element.addEventListener('change', hour_change);
// min_element.addEventListener('change', minute_change);

// function hour_change (e) {
// 	if (e.target.value > 05) {
// 		e.target.value = 05;
// 	} else if (e.target.value < 0) {
// 		e.target.value = '00';
// 	}

// 	if (e.target.value == "") {
// 		e.target.value = formatTime(hour);
// 	}

// 	hour = e.target.value;
// }

// function minute_change (e) {
// 	if (e.target.value > 59) {
// 		e.target.value = 59;
// 	} else if (e.target.value < 0) {
// 		e.target.value = '00';
// 	}

// 	if (e.target.value == "") {
// 		e.target.value = formatTime(minute);
// 	}

// 	minute = e.target.value;
// }

// function hour_up () {
// 	hour++;
// 	if (hour > 05) {
// 		hour = 0;
// 	}
// 	setTime();
// }
// function hour_down () {
// 	hour--;
// 	if (hour < 0) {
// 		hour = 05;
// 	}
// 	setTime();
// }

// function minute_up () {
// 	minute++;
// 	if (minute > 59) {
// 		minute = 0;
// 		hour++;
// 	}
// 	setTime();
// }
// function minute_down () {
// 	minute--;
// 	if (minute < 0) {
// 		minute = 59;
// 		hour--;
// 	}
// 	setTime();
// }

// function setTime () {
// 	hr_element.value = formatTime(hour);
// 	min_element.value = formatTime(minute);
// 	time_picker_element.dataset.time = formatTime(hour) + ':' + formatTime(minute);
// }

// function formatTime (time) {
// 	if (time < 10) {
// 		time = '0' + time;
// 	}
// 	return time;
// }

//Cronometro

// let [hour, minute] = [formatTime(hour),formatTime(minute)];
// let timerRef = document.querySelector('#timer');
// let int;

document.getElementById('startTimer').addEventListener
('click', ()=> {
    // int = setInterval(displayTimer,10);
    
    // function displayTimer() {
    //     if(formatTime(minute) == 59){
    //         formatTime(minute) = 00;
    //         formatTime(hour)--; 
    //         if(formatTime(hour) > 05){
    //             formatTime(hour) = 00;
    //             formatTime(minute)--;
    //     }
    // }

    //     let h = formatTime(hour) <= 05 ? "" + formatTime(hour) : formatTime(hour);
    //     let m = formatTime(minute) <= 59 ? "" + formatTime(minute) : formatTime(minute);

	function startTimer(duration, display) {	
		var timer = duration, minutes, seconds;
		setInterval(function () {
			minutes = parseInt(timer / 60, 10);
			seconds = parseInt(timer % 60, 10);
	
			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;
	
			display.textContent = minutes + ":" + seconds;

            
			if (--timer < 0) {
                timer = duration;
				window.location.assign("../pages/5.html")
			}
            if (timer <= 9) {
                document.getElementById('time').style.color="red"
            }
            if (timer == 48) {
               alert("Talvez o fio vermelho tenha uma maior chance de ser o certo!")
            }
            if (timer == 28) {
                alert("O Branco parece ser legal também")
             }
             if (timer == 18) {
                alert("Você quer morrer?!")
             }
		}, 1000);
	}
	
	window.onload = function () {
		var fiveMinutes = 59 * 1,
			display = document.querySelector('#time');
		startTimer(fiveMinutes, display);
	};

		

        document.getElementById('startTimer').style.display = "none"

        document.getElementById('vermelho').style.display = "inline-block"
        document.getElementById('preto').style.display = "inline-block"
        document.getElementById('branco').style.display = "inline-block"
    
        // timerRef.innerHTML = `${h} : ${m}` 

return(onload())
    }
);

//Fios aleatórios

const FioVermelho = document.querySelector("#vermelho")
const FioBranco = document.querySelector("#branco")
const FioPreto = document.querySelector("#preto")

    function Corte() {
        const random = (min, max) => Math.random() * (max - min) + min

    const branco    = Math.floor(random(1, 10))
    const preto     = Math.floor(random(1, 10))
    const vermelho  = Math.floor(random(1, 10))

        if(vermelho == 1 && vermelho <= 5 ) {
            window.location.assign("../pages/6.html")
        }
        else if (vermelho > 5){
         window.location.assign("../pages/5.html")
     }
                else if(preto == 1 && preto <= 5 ) {
                    window.location.assign("../pages/6.html")
                }
                else if (preto > 5) {
                window.location.assign("../pages/5.html")
            }
                        else if(branco == 1 && branco <= 5 ) {
                            window.location.assign("../pages/6.html")
                        }
                        else if (branco > 5) {
                        window.location.assign("../pages/5.html")
                    }
    }   



