 const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

 function init() {
   let index = -1;

   document.body.addEventListener('keydown', (event) => {
      const keyPressed = event.key;
      console.log("match " + konami[length] ++);

      if (keyPressed === konami[index]) {
          console.log("pressed ")
          index++;

         if (index === konami.length) {
           window.alert("Hurray!");
           //console.log("YAY!!!");
           index = -1;
         }

      } else {
         index = -1;
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
