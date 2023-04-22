// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    return Math.abs(42 - someValue);
    console.log(Math.abs(50 - someValue));
  }

  function distanceFromHqInFeet(someValue) {
    return 264 * distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return 264 * Math.abs(start - destination);
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const num1 = distanceTravelledInFeet(start, destination);
    if (num1 <= 400) {
        return 0 ;
    } else if (num1 <= 2000) {
        const num2 = (0.02 * num1) - (0.02 * 400);
        const num3 = num2.toPrecision(3);  
        return Number(num3);
    } else if (num1 <= 2500) {
        return 25;
    } else if (num1 > 2500) {
        return 'cannot travel that far'
    }

  }



