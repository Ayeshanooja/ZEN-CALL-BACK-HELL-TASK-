// setTimeout(function() {
//     console.log("10");
//     setTimeout(function() {
//       console.log("9");
//       setTimeout(function() {
//         console.log("8");
//         setTimeout(function() {
//           console.log("7");
//           setTimeout(function() {
//             console.log("6");
//             setTimeout(function() {
//               console.log("5");
//               setTimeout(function() {
//                 console.log("4");
//                 setTimeout(function() {
//                   console.log("3");
//                   setTimeout(function() {
//                     console.log("2");
//                     setTimeout(function() {
//                       console.log("1");
//                       setTimeout(function() {
//                         console.log("Happy Independence Day!");
//                       }, 1000);
//                     }, 1000);
//                   }, 1000);
//                 }, 1000);
//               }, 1000);
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
function countdown(num, callback) {
    var countdownDiv = document.getElementById("countdown");
    
    var countdownInterval = setInterval(function() {
      countdownDiv.innerText = num;
      num--;
      
      if (num < 0) {
        clearInterval(countdownInterval);
        callback();
      }
    }, 1000);
  }
  
  countdown(10, function() {
    var countdownDiv = document.getElementById("countdown");
    countdownDiv.innerText = "Happy Independence Day!";
  });