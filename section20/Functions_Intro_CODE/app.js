// function singSong() {
//     console.log('ド');
//     console.log('レ');
//     console.log('ミ');
// }

// // singSong();
// // singSong();
// // singSong();
// // singSong();
// // singSong();
// // singSong();
// // singSong();

// function greet(firstName, lastName) {
//     console.log(`Hi, ${firstName} ${lastName[0]}.`);
// }

// // greet('Ken', 'Fukuyama');

// // repeat('hi', 3); // hihihi

// function repeat(str, numTimes) {
//     let result = '';
//     for (let i = 0; i < numTimes; i++) {
//         result += str;
//     }
//     console.log(result);
// }

// function add(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         return false;
//     }
//     return x + y;
// }

// const die1 = Math.floor(Math.random() * 6) + 1;

// function singSong() {
//     console.log("ド");
//     console.log("レ");
//     console.log("ミ");
// }

// singSong();

function greet(firstName, lastName) {
    console.log(`Hi, ${firstName} ${lastName[0]}.`);
}

greet('Ken', 'Fukuyama');

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

repeat('hi', 3)

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}

function returnDay(num) {
    if (num > 7) {
        return null
    }
    const weeks = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const week = weeks.splice(num-1, num);
    return week
}