// Code your solution in this file!
function distanceFromHqInBlocks(value){
if (value >= 42){
    return value - 42;
} else if (value < 42){
    return 42 - value;
    };
};

function distanceFromHqInFeet(feet){
   return distanceFromHqInBlocks(feet) * 264;
    
};

function distanceTravelledInFeet(start, destination){
    if (start < destination){
    return (destination - start) * 264;
} else if (destination < start){
    return (start - destination) * 264;
    };
};



function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
    return 0;
    } else if (distance > 400 && distance < 2000) {
        return (distance - 400) * .02;
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else 
        return 'cannot travel that far';
};
/*
function calculatesFarePrice(start, destination){
    if (start < destination){
        if ((destination - start) * 264 < 400){
            return 0;
     } else if ((destination - start) * 264 > 400){
        if ((destination - start) * 264 < 2000){
            return (((destination - start) * 264 - 400) * 0.2);
            } else if (destination - start > 2000){
            if (destination - start < 2500){
                return 25;
                } else if (destination - start >2500){
                return 'cannot travel that far';
                }
            }
        }
    } else if (start > destination)
    if ((destination - start) * 264 < 400){
        return 0;
 } else if ((destination - start) * 264 > 400){
    if ((destination - start) * 264 < 2000){
        return (((destination - start) * 264 - 400) * 0.2);
        } else if (destination - start > 2000){
        if (destination - start < 2500){
            return 25;
            } else if (destination - start >2500){
            return 'cannot travel that far';
            }
        }
    }
}*/