// create an array of words
const word = ['quigon jin', 'obiwan kenobi', 'mace windu', 'yoda',];
// choose word randomly
let randNum = Math.floor(Math.random() * word.length);
let rightWord = [];
let wrongWord = [];
let choosenWord = word[randNum];
let underScore = [];
let counter = 0;

// DOM manipulation
let docUnderScore = document.getElementsByClassName('underscore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');


//main
//==================================================================
console.log(choosenWord);

// create underscores based on length of word
let generateUnderscore = () => {
    for(let i = 0; i < choosenWord.length; i++){
        underScore.push('_');

    }
    return underScore;
}

// get users guess
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);
    // if user is right
    if(choosenWord.indexOf(keyword) > -1){
    //add to right words array
    rightWord.push(keyword);
    // replaces underscore with right letter
    underScore[choosenWord.indexOf(keyword)] = keyword;
    docUnderScore[0].innerHTML = underScore.join(' ');
    docRightGuess[0].innerHTML = rightWord.join(' ');
    //checks to see if user word matches guesses
    if(underScore.join('') == choosenWord) {
        alert('You Win');
        document.location.reload(true)
    }
    } else{
        wrongWord.push(keyword);
        docWrongGuess[0].innerHTML = wrongWord.join(' ')
        // add counter for number of guesses
        alert('letter is wrong try again')
        counter ++;
        if(counter > 10){
            alert('You Lose')
            document.location.reload(true)
        }
        
        
        
    }
});



docUnderScore[0].innerHTML = generateUnderscore().join(' ');