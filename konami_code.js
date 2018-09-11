 const codes = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

 function init() {
   let index = 0;

   document.body.addEventListener('keypress' || 'keydown', function(event) {
     const eventType = event.type;
     const whichKey = event.code;
     const repeating = event.repeat;
     const locate = event.location;

     console.log(eventType);

     if (whichKey === codes[index]) {
          console.log(codes[index]);
          index++;
          console.log(codes[index]);

         if (index === codes.length) {
           window.alert("Hurray!");
           //console.log("YAY!!!");
           index = 0;
         }

      } else {
         index = 0;
         //console.log(keys);
         //console.log(" incorrect key");
      }
    })
 }




 // [
 //   "ArrowUp",
 //   "ArrowUp",
 //   "ArrowDown",
 //   "ArrowDown",
 //   "ArrowLeft",
 //   "ArrowRight",
 //   "ArrowLeft",
 //   "ArrowRight",
 //   "b",
 //   "a"
 // ];
//
//
//
// function init() {
//   // Write your JavaScript code inside the init() function
//   let index = 0;
//
//   document.body.addEventListener('keydown', function(e) {
//       const keyPressed = e.key;
//
//       if (keyPressed === codes[index]) {
//         // console.log(keyPressed);
//         index++;
//
//         if (index === codes.length) {
//
//           window.alert("Hurray!");
//           index = 0;
//         }
//       } else {
//         index = 0;
//
//         }
//
//       })
//
//
// }
