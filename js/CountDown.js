class CountDown {
  constructor(twentyMinutes, today) {
    this.twentyMinutes = twentyMinutes;
    this.today = today;

    this.countDownDate = new Date(this.today + this.twentyMinutes).getTime();

    this.startCountdown();
  }

  startCountdown() {
    let x = setInterval(() => {
      let now = new Date().getTime();

      let distance = this.countDownDate - now;

      localStorage.setItem(
        "minutes",
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      );
      localStorage.setItem(
        "seconds",
        Math.floor((distance % (1000 * 60)) / 1000)
      );

      document.getElementById("timeleft").innerHTML =
        localStorage.getItem("minutes") +
        "m " +
        localStorage.getItem("seconds") +
        "s "; 

      if (distance < 0) {
        clearInterval(x);
        document.getElementById("timeout").innerHTML =
          "Le délais de réservation de votre vélo à expiré";
      }
    }, 1000);
  }
}


// // VALID JS FOR COUNTDOWN
// var twentyMinutes = 1000 * 60 * 20;

// var today = new Date().getTime();
// var countDownDate = new Date(today + twentyMinutes).getTime();

// var x = setInterval(function() {
//   var now = new Date().getTime();

//   var distance = countDownDate - now;

//   localStorage.setItem(
//     "minutes",
//     Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
//   );
//   localStorage.setItem("seconds", Math.floor((distance % (1000 * 60)) / 1000));

//   document.getElementById("timeleft").innerHTML =
//     localStorage.getItem("minutes") +
//     "m " +
//     localStorage.getItem("seconds") +
//     "s ";

//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("timeout").innerHTML =
//       "Le délais de réservation de votre vélo à expiré";
//   }
// }, 1000);

// console.log(countDownDate)
// FIN VALID JS
