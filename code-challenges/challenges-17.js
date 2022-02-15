'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// referring to the given examples find out the pattern used and
// Write a function that takes 2 integers and prints the patterns using recursion
// 
// Input: 16, 5
// Output: [16, 11, 6, 1, -4, 1, 6, 11, 16]
//
// Input: 50, 9
// Output: [50, 41, 32, 23, 14, 5, -4, 5, 14, 23, 32, 41, 50]
//
const recursionPattern = (int1, int2) => {
    let ansArr = []
    let arrived = false;
    const recursionPat = (int1, int2) => {

        ansArr.push(int1);
        if (int1 < 0) arrived = true;
        if (arrived) {
            return ansArr;
        }

        recursionPat(int1 - int2, int2);
        ansArr.push(int1);

        return ansArr;
    }
    return recursionPat(int1, int2);
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
// 
// Write a function that takes a string (HTML tag)
// and extracts the link from the HTML tag
//
// Ex: <a href="http://www.hackerrank.com"><h1><b>HackerRank</b></h1></a> ==> "www.hackerrank.com"
// Ex: <a href="http://www.something.org"><h1><b>HackerRank</b></h1></a> ==> "www.something.org"
//
// Note:
//  Assume that links end with .com, .org or .net
// 

const filterLinks = (str) => {
    let firstIdx = str.indexOf("www.");
    let lastregex = str.match(/"/g);
    let lastIdx = str.lastIndexOf(lastregex[0])
    return str.substring(firstIdx, lastIdx);

}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
// 
// A phrase is considered palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// 
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// as you can see "amanaplanacanalpanama" is a palindrome.
//
const isPalindrome = (str) => {

    let lowerArr = str.toLowerCase();
    let readyArr; 
    let regex=/[a-z]/g ;
    if(regex.test(lowerArr))
    {
         readyArr = lowerArr.match(regex);
    }
    else
    return (true); 
    console.log(readyArr);
    readyArr=readyArr.join(''); 

    let j = readyArr.length-1;
    
    for (let i = 0; i <j ; i++) {
        if (readyArr[i] != readyArr[j])
            return false;
        j--;
    }
    return true;
}

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
// 
//  Write a function that takes 2 arguments, one is a string and the other is an array
//  the function should return a boolean than indicates if both have the same pattern
//
//  EX: 
//  Input: "abba", ['cat', 'dog', 'dog', 'cat']
//  output: true
//
//  as you can see the a acted as the cat in the array, and b as the dog, and the pattern was the same
//
//  Input: "cda", ['cat', 'dog', 'cat']
//  output: false
//
//  here if the pattern had three different things so the array should had 3 different things to be true
//
function charIdx(char)
{
    return parseInt(char, 36) - 9;
    
}
function setMapArr(){
  let mapArr=[]; 
    for(let i=1;i<=30;i++)
    mapArr[i]=""; 

  return mapArr ;
}
function setFrqArr(arr){
  let frqArr=[]; 
    for(let i=0;i<arr.length;i++)
    frqArr[charIdx(arr[i])]=0; 

  return frqArr ; 

}

const samePattern = (str, arr) => {
let mapArr=setMapArr();  
let frqArr =setFrqArr(arr);


    for(let i=0; i<str.length;i++)
    {

        if(mapArr[charIdx(str[i])]=="")
        {
            if(frqArr[charIdx(arr[i])])
            {
              return false;
            }
            else
            {
            mapArr[charIdx(str[i])]=arr[i]; 
            frqArr[charIdx(arr[i])]++;
            }
        }
        else
        {
            frqArr[charIdx(arr[i])]++;
            if( mapArr[charIdx(str[i])] != arr[i])
            return false; 
        }
    }
    return true ; 
}
// -------------------------------------------------------------------------------------------------------


module.exports = { recursionPattern, filterLinks, isPalindrome, samePattern };