// for loop

// even numbers from 0 to 12

// starting point = 0
// ending point =12
// driver = 2


// console.log(0);
// console.log(2);
// console.log(4);
// console.log(6);
// console.log(8);
// console.log(10);
// console.log(12);

// console.log("Looooooop");

// for (let sp = 0; sp <= 50; sp += 3) {
//     console.log(sp);
// }


// while loop
// % haraga

// let sp = 0;

// while (sp <= 1000) {

//     // if (sp % 27 == 0 && sp % 8 == 0) {
//     if (sp % 27 == 0) {
//         console.log(sp);
//     }
//     sp += 1;
// }

/*
This program illustrates the break statement. It finds the first number that
is both greater than or equal to 20 and divisible by 7.
*/

// starting point = 20
// ending point ?
// driver = 1

// for (let sp = 20; ; sp++) {
//     if (sp % 7 == 0) {
//         console.log("haaa wuu wqaybsama"); console.log(sp);
//         break;
//     }
// }


// continue

// starting point =1
// ending point = 10
// driver 1

// for (let sp = 1; sp <= 10; sp++) {
//     if (sp == 5 || sp == 6) {
//         continue;
//     }
//     console.log(sp);
// }

// switch statement

switch (prompt("What is the weather like?")) {

    case "rainy":
        console.log("Jawi Roobaad take care...");
        break;
    case "sunny":
        console.log("sunny use ice cream");
        break;
    case "winter":
        console.log("winter weather");
        break;
    default:
        console.log("cirkaa roob klu ogtahy");

}