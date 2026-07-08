//Function Expression - not hoisted, preferred style of writing functions
const getSpendalert = function(amount){
    return `Warning! you just spent $${amount}` 
}

console.log(getSpendalert(30))

const getspendalert = amount => `Warning! you just spent $${amount}` ; //if single parameter and single return , can get rid of braces


const getspendalert = (amount) => {  
    if(amount>50){
        return  `Warning! you just spent $${amount}`
    } 
}

console.log(getspendalert(35))