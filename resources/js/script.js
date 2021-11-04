'use strict';
const intro = ["The atmosphere is asking for permission.", "There is something big happening.", "My crystal ball is shaking...", "I need all my powers for this fortune.", "Well, if you ask me...", "I'm not sure how to tell you this...", "I'm not sure how to tell you this.", "Mmmmhhhh...", "Is that smoke? How did that happen? Anyway..."];
const object = ["a full moon", "a pile of money", "a black figure", "a black cat", "the Dark Lord", "a balzing sun", "an eclipse", "a tall woman", "Saturn", "a vampire"];
const context = ["forest", "dark cloud", "dog's house", "little shelter", "toilet", "giant belly", "old woman's purse", "man's heart", "lake", "tree house"];
const action = ["will give you a lot of pleasure.", "will make you forget all your sorrows.", "is going to make you extremely sad.", "will pee on you.", "has absolutely nothing to do with your mother.", "will make you wanna kill yourself. Don't do it!", "is the proof that you are in a simulation.", "may come to your birthday party.", "might give you a headache.", "is going to marry you.", "has got to be a bad sign!"];

//fading effect
const fade = (elemtofade) => {
    elemtofade.classList.toggle('fade');
};

//say hi + user name
function sayHi(event) {
    if (event.keyCode == 13) {
        let name = document.getElementById("name").value;
        name = name[0].toUpperCase() + name.substring(1);
        document.getElementById('greeting').innerHTML = "Hi, " + name + "! Curious to see what lies ahead?";
        fade(document.getElementById('confirm'));
        fade(document.getElementById('askforname'));
    }
}

//print random intro
const randIntro = () => {
    fade(document.getElementById('first'));
    let rand = Math.floor(Math.random() * 9);
    document.getElementById('introtext').innerHTML= intro[rand];
    fade(document.getElementById('introtext'));
};

// print a random line
const randMsg = () => {
    let random = Math.floor(Math.random() * 9);
    let randNum = Math.floor(Math.random() * 9);
    let randNumber = Math.floor(Math.random() * 10);
    document.getElementById('randomMsg').innerHTML = " I see " + object[random] + ", in a " + context[randNum] + ", that " + action[randNumber];
    fade(document.getElementById('randomMsg'));
};

const displayMsg = () => {
    setTimeout(randMsg, 4000);
}

const end = () => {
    setTimeout(function(){ fade(document.getElementById('final')); }, 10000);
  }