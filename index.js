import { getResistorOhms } from './resistor.js';

const listen = (target, event, callback, capture = false) => {
  target.addEventListener(event, callback, !!capture);
};

const blackList = document.querySelectorAll('div.box.black');
const brownList = document.querySelectorAll('div.box.brown');
const redList = document.querySelectorAll('div.box.red');
const orangeList = document.querySelectorAll('div.box.orange');
const yellowList = document.querySelectorAll('div.box.yellow');
const greenList = document.querySelectorAll('div.box.green');
const blueList = document.querySelectorAll('div.box.blue');
const violetList = document.querySelectorAll('div.box.violet');
const greyList = document.querySelectorAll('div.box.grey');
const whiteList = document.querySelectorAll('div.box.white');
const goldList = document.querySelectorAll('div.box.gold');
const silverList = document.querySelectorAll('div.box.silver');
const resistorElement = document.querySelector('.answer');
const bandZero = document.getElementById('b0');
const bandOne = document.getElementById('b1');
const bandTwo = document.getElementById('b2');
const bandThree = document.getElementById('b3');

let deafultBands = {
  color1: 'red',
  color2: 'green',
  multiplier: 'violet',
  tolerance: 'gold',
};

let bandOutput = getResistorOhms(deafultBands);
resistorElement.innerText = bandOutput;

// Black Bands

const bandOneBlack = () => {
  deafultBands.color1 = 'black';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandZero.style.backgroundColor = '#000000';
};

const bandTwoBlack = () => {
  deafultBands.color2 = 'black';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandOne.style.backgroundColor = '#000000';
};

const bandThreeBlack = () => {
  deafultBands.multiplier = 'black';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandTwo.style.backgroundColor = '#000000';
};

// Brown Bands

const bandOneBrown = () => {
  deafultBands.color1 = 'brown';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandZero.style.backgroundColor = '#654321';
};

const bandTwoBrown = () => {
  deafultBands.color2 = 'brown';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandOne.style.backgroundColor = '#654321';
};

const bandThreeBrown = () => {
  deafultBands.multiplier = 'brown';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandTwo.style.backgroundColor = '#654321';
};

const bandFourBrown = () => {
  deafultBands.tolerance = 'brown';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandThree.style.backgroundColor = '#654321';
};

// Red Bands

const bandOneRed = () => {
  deafultBands.color1 = 'red';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandZero.style.backgroundColor = '#cc0000';
};

const bandTwoRed = () => {
  deafultBands.color2 = 'red';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandOne.style.backgroundColor = '#cc0000';
};

const bandThreeRed = () => {
  deafultBands.multiplier = 'red';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandTwo.style.backgroundColor = '#cc0000';
};

const bandFourRed = () => {
  deafultBands.tolerance = 'red';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandThree.style.backgroundColor = '#cc0000';
};

// Orange Bands

const bandOneOrange = () => {
  deafultBands.color1 = 'orange';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandZero.style.backgroundColor = '#ef7708';
};

const bandTwoOrange = () => {
  deafultBands.color2 = 'orange';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandOne.style.backgroundColor = '#ef7708';
};

const bandThreeOrange = () => {
  deafultBands.multiplier = 'orange';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandTwo.style.backgroundColor = '#ef7708';
};

// Yellow Bands

const bandOneYellow = () => {
  deafultBands.color1 = 'yellow';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandZero.style.backgroundColor = 'yellow';
};

const bandTwoYellow = () => {
  deafultBands.color2 = 'yellow';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandOne.style.backgroundColor = 'yellow';
};

const bandThreeYellow = () => {
  deafultBands.multiplier = 'yellow';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandTwo.style.backgroundColor = 'yellow';
};

// Green Bands

const bandOneGreen = () => {
  deafultBands.color1 = 'green';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandZero.style.backgroundColor = 'green';
};

const bandTwoGreen = () => {
  deafultBands.color2 = 'green';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandOne.style.backgroundColor = 'green';
};

const bandThreeGreen = () => {
  deafultBands.multiplier = 'green';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandTwo.style.backgroundColor = 'green';
};

const bandFourGreen = () => {
  deafultBands.tolerance = 'green';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandThree.style.backgroundColor = 'green';
};

// Blue Bands

const bandOneBlue = () => {
  deafultBands.color1 = 'blue';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandZero.style.backgroundColor = '#1a1552';
};

const bandTwoBlue = () => {
  deafultBands.color2 = 'blue';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandOne.style.backgroundColor = '#1a1552';
};

const bandThreeBlue = () => {
  deafultBands.multiplier = 'blue';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandTwo.style.backgroundColor = '#1a1552';
};

const bandFourBlue = () => {
  deafultBands.tolerance = 'blue';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandThree.style.backgroundColor = '#1a1552';
};

// Violet Bands

const bandOneViolet = () => {
  deafultBands.color1 = 'violet';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandZero.style.backgroundColor = '#6967ce';
};

const bandTwoViolet = () => {
  deafultBands.color2 = 'violet';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandOne.style.backgroundColor = '#6967ce';
};

const bandThreeViolet = () => {
  deafultBands.multiplier = 'violet';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandTwo.style.backgroundColor = '#6967ce';
};

const bandFourViolet = () => {
  deafultBands.tolerance = 'violet';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandThree.style.backgroundColor = '#6967ce';
};

// Grey Bands

const bandOneGrey = () => {
  deafultBands.color1 = 'grey';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandZero.style.backgroundColor = '#666666';
};

const bandTwoGrey = () => {
  deafultBands.color2 = 'grey';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandOne.style.backgroundColor = '#666666';
};

const bandThreeGrey = () => {
  deafultBands.multiplier = 'grey';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandTwo.style.backgroundColor = '#666666';
};

const bandFourGrey = () => {
  deafultBands.tolerance = 'grey';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandThree.style.backgroundColor = '#666666';
};

// White Bands

const bandOneWhite = () => {
  deafultBands.color1 = 'white';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandZero.style.backgroundColor = '#fff';
};

const bandTwoWhite = () => {
  deafultBands.color2 = 'white';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandOne.style.backgroundColor = '#fff';
};

const bandThreeWhite = () => {
  deafultBands.multiplier = 'white';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandTwo.style.backgroundColor = '#fff';
};

// Gold Bands

const bandOneGold = () => {
  deafultBands.multiplier = 'gold';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandTwo.style.backgroundColor = '#d4af37';
};

const bandTwoGold = () => {
  deafultBands.tolerance = 'gold';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandThree.style.backgroundColor = '#d4af37';
};

// Silver Bands

const bandOneSilver = () => {
  deafultBands.multiplier = 'silver';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandTwo.style.backgroundColor = '#bab7c3';
};

const bandTwoSilver = () => {
  deafultBands.tolerance = 'silver';
  bandOutput = getResistorOhms(deafultBands);
  resistorElement.innerText = bandOutput;
  bandThree.style.backgroundColor = '#bab7c3';
};

// Event Listeners

listen(blackList[0], 'click', bandOneBlack);
listen(blackList[1], 'click', bandTwoBlack);
listen(blackList[2], 'click', bandThreeBlack);

listen(brownList[0], 'click', bandOneBrown);
listen(brownList[1], 'click', bandTwoBrown);
listen(brownList[2], 'click', bandThreeBrown);
listen(brownList[3], 'click', bandFourBrown);

listen(redList[0], 'click', bandOneRed);
listen(redList[1], 'click', bandTwoRed);
listen(redList[2], 'click', bandThreeRed);
listen(redList[3], 'click', bandFourRed);

listen(orangeList[0], 'click', bandOneOrange);
listen(orangeList[1], 'click', bandTwoOrange);
listen(orangeList[2], 'click', bandThreeOrange);

listen(yellowList[0], 'click', bandOneYellow);
listen(yellowList[1], 'click', bandTwoYellow);
listen(yellowList[2], 'click', bandThreeYellow);

listen(greenList[0], 'click', bandOneGreen);
listen(greenList[1], 'click', bandTwoGreen);
listen(greenList[2], 'click', bandThreeGreen);
listen(greenList[3], 'click', bandFourGreen);

listen(blueList[0], 'click', bandOneBlue);
listen(blueList[1], 'click', bandTwoBlue);
listen(blueList[2], 'click', bandThreeBlue);
listen(blueList[3], 'click', bandFourBlue);

listen(violetList[0], 'click', bandOneViolet);
listen(violetList[1], 'click', bandTwoViolet);
listen(violetList[2], 'click', bandThreeViolet);
listen(violetList[3], 'click', bandFourViolet);

listen(greyList[0], 'click', bandOneGrey);
listen(greyList[1], 'click', bandTwoGrey);
listen(greyList[2], 'click', bandThreeGrey);
listen(greyList[3], 'click', bandFourGrey);

listen(whiteList[0], 'click', bandOneWhite);
listen(whiteList[1], 'click', bandTwoWhite);
listen(whiteList[2], 'click', bandThreeWhite);

listen(goldList[0], 'click', bandOneGold);
listen(goldList[1], 'click', bandTwoGold);

listen(silverList[0], 'click', bandOneSilver);
listen(silverList[1], 'click', bandTwoSilver);
