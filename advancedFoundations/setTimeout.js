console.log('What is the capital of Peru?')  ;

const answer = setTimeout(function(){
    console.log('Lima!')
    setTimeout(function(){
    answer;
    console.log('Ready for next question?');
},3000)
}, 3000);

function logAnswer(answer, num) {
    console.log(`The answer is ${answer} of course! If you got that right, giver yourself ${num} points.`)
}

console.log('What is the capital of Peru?')

    // 1. After a 3 second delay, call the 'logAnswer' function.
    // 2. Make sure 'logAnswer' has all the info it needs. 
    //    The answer is 'Lima' and it's 10 points for getting it right. 

setTimeout(logAnswer, 3000, 'Peru' , 10);


// we can use clearTimeout to interrupt the setTimeout