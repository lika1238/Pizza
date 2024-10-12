// Challenge number two : 25/25 Picarats

// let countries = ['China','Japan','South Korea','Vietnam','Malaysia']
// let capital = ['Beijing','Tokyo','Seoul','Hanoï','Kuala Lumpur']

// My dear friend, Miyazaki, told me that they wanted an automated system to display each country with its capital city.

// Write a script that will output to the console a message in this form :

// Your country : COUNTRY has the capital named : CAPITAL.

// COUNTRY and CAPITAL will be pulled from the two arrays respectively.




let countries = ['China', 'Japan', 'South Korea', 'Vietnam', 'Malaysia'];
let capitals = ['Beijing', 'Tokyo', 'Seoul', 'Hanoi', 'Kuala Lumpur'];

for (let i = 0; i < countries.length; i++) {
    console.log(`Your country: ${countries[i]} has the capital named: ${capitals[i]}.`);
}

// Challenge number three : 35/35 Picarats

// The titan is a machine capable of predicting the future, using its advanced random number generator. It can give you one of 3 fates, are you ready to learn it?

// let randomizer

// Write a variable, randomizer, that receives a random number between 0 and 3.
// for your three fates, here they are 👏
// If randomizer is equal to 0, your fate is “A certain victory”
// if randomizer is equal to 1, your fate is “not so certain victory”
// if randomizer is equal to 2, your fate is “an uneasy victory
// for all other cases, the titan will give the same answer “Your fate is unclear, ô chosen undead”

let randomizer = Math.floor(Math.random() * 4); // Generates a random number between 0 and 3

let fate;

if (randomizer === 0) {
    fate = "A certain victory";
} else if (randomizer === 1) {
    fate = "not so certain victory";
} else if (randomizer === 2) {
    fate = "an uneasy victory";
} else {
    fate = "Your fate is unclear, ô chosen undead";
}



// Challenge number four : 45/45 Picarats

// Oh bummer! We want to know which season we are in right now, but we have no idea!! i need your help to conceive a function that can tell me which season i am, in order to cultivate the right plants!!!



// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

// No hints this time! you have to solve it yourself!!!


function checkSeason(month) {
    // Convert the month to lowercase for consistency
    month = month.toLowerCase();

    // Determine the season based on the month
    if (['december', 'january', 'february'].includes(month)) {
        return 'Winter';
    } else if (['march', 'april', 'may'].includes(month)) {
        return 'Spring';
    } else if (['june', 'july', 'august'].includes(month)) {
        return 'Summer';
    } else if (['september', 'october', 'november'].includes(month)) {
        return 'Autumn';
    } else {
        return 'Invalid month';
    }
}

// Example usage:
console.log(checkSeason('March')); // Output: Spring
console.log(checkSeason('August')); // Output: Summer
console.log(checkSeason('November')); // Output: Autumn
console.log(checkSeason('InvalidMonth')); // Output: Invalid month
