

// Function declaration - hoisted
function getSpendAlert(amount){
    return `Warning! you just spent $${amount}` 
}

console.log(getSpendAlert(25))

//Function Expression - not hoisted, preferred style of writing functions
const getSpendalert = function(amount){
    return `Warning! you just spent $${amount}` 
}

console.log(getSpendalert(30))