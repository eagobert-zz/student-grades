const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60, 79]

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A

//Create an array to hold each grade range based on the comments above
let gradeA = [];
let gradeB = [];
let gradeC = [];
let gradeD = [];
let gradeF = [];

//Create an object to hold the grade range array
const gradesDatabase = {
    "A":gradeA,
    "B":gradeB,
    "C":gradeC,
    "D":gradeD,
    "F":gradeF
}


//Create for loop to cycle thru the scores array
for (let i = 0; i < scores.length; i++) {
    
    //Each score is evaluated based on the conditions below and pushed to the appropriate array, which is then stored in the "gradesDatabase" object
    if (scores[i] >= 91 && scores[i] <= 100) {
        gradeA.push(scores[i]);
        
    } 
    
    if (scores[i] >= 81 && scores[i] <= 90) {
        gradeB.push(scores[i]);
        
    } 
    
    if (scores[i] >= 71 && scores[i] <= 80) {
        gradeC.push(scores[i]);
        
    } 
    
    if (scores[i] >= 61 && scores[i] <= 70) {
        gradeD.push(scores[i]);
    }
    
    if (scores[i] <= 60){
        gradeF.push(scores[i]);
    }
}

// How many of each grade? Accomplish this with a for..in loop.
for (let key in gradesDatabase) {
    
    //This code logs to console the key and count of key values for each grade range
    console.log("There are " + gradesDatabase[key].length + " " + key + "'s in the grade database");
    
    // This code logs to console the min grade for each grade range using the compare function to ensure sort order
    let minGrade = Math.min.apply(null, gradesDatabase[key])
    console.log(minGrade + " is the lowest " + key + " grade");
    
    // This code logs to console the max grade for each grade range using the compare function to ensure sort order
    let maxGrade = Math.max.apply(null, gradesDatabase[key])
    console.log(maxGrade + " is the highest " + key + " grade");
    

}

// Which grade had the most students achieve it? Use an if statment, and a currentGradeCount variable, in your for..in loop to see if the current grade's value is higher than the last one.

//Create a variable to hold the grade and key of the winner
let winner = 0;
let winningGrade = "";
 
//Create a "for...in" loop to loop thru gradesDatabase
for(let key in gradesDatabase){
    //Create a variable to hold the gradesDatabase key
    let currentGrade = gradesDatabase[key]
    currentGrade.length //Not sure here why i made this statement but didn't store it

    //Create conditional statement to determine highest grade..."If whatever number at the current grade length is greater than winner...". Winner is initialized at zero and the statement evaluate each length against the winner.
    if(currentGrade.length > winner) {
        winner = currentGrade.length
        winningGrade = key
    }

    //Create conditional statement to determine lowest grade

}

console.log(winner, winningGrade)