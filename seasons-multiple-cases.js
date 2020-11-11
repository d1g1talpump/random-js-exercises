let season = "";
let day = "";

switch (new Date().getMonth()) {
    // December, January, February, 
    case 11:
    case 0:
    case 1:
        season = "Winter";
        break;
    // March, April, May, 
    case 2:
    case 3:
    case 4:
        season = "Spring";
        break;
    // June, July, August, 
    case 5:
    case 6:
    case 7:
        season = "Summer";
        break;
    // September, October, November, 
    case 8:
    case 9:
    case 10:
        season = "Autumn";
        break;
    default:
        console.log("!Something went wrong!");
}

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        console.log("!Something went wrong!");
}

let output = "We are in the season of " + season + " and today is " + day;
console.log(output)