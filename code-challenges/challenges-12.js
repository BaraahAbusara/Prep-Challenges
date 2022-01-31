'use strict';
// Important Note: 
// Kindly use filter instead of for in all of your solutions

// Resource:
// Filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// 1) ---------------------
// 
// Given an array of values use filter to extract odd values.
//  
// EX:
// [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200] ==> [89, 41, 31, 111, 31]
// 
// ------------------------

const oddFiltration = (arr) => {
    let helpArr= arr.filter(item=>{
        return(item%2!=0)
        
    });
    return helpArr ; 
}
// 2) ---------------------
// 
// Given data of candidates return the candidates CVs that have more than 4 years of experience 
// and works as JS developer 

// EX:
// var cvs = [
//     {
//         firstName: "Jason",
//         LastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         LastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         LastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         LastName: null,
//         yearsOfExperience: 4,
//         tech: "Java"
//     }
// ]
//
//   ===>
//
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name
// ------------------------
function findFullName(firstName,lastName)
{
    if(firstName === null )
        return lastName; 
    else if(lastName === null)
            return firstName; 
    else
    return `${firstName} ${lastName}`; 
}
const cvsFiltration = (arr) => {
    let ansArr =[]; 
    let helpArr= arr.filter(item=>{
        if(item.yearsOfExperience>4 && item.tech=="JS")
        {
            ansArr.push ({fullName: findFullName(item.firstName,item.LastName) ,tech: item.tech});

        }


    });
    // map over them and save in another array 

    return ansArr; 
}

// 3) ---------------------
//
// Given an array of words filter the names that contains one of the vowels (a, e, i, o, u)

// EX:
// ['car', 'boy', 'spy', 'building', 'why', 'dry' ] ==> ['spy', 'why', 'dry']
// 
// ------------------------

const vowelsFiltration = (arr) => {

    let regex = /[a,e,i,o,u]/gi;
    let helpArr=[];
        helpArr = arr.filter(item=>{

        return !(item.match(regex)) ; 

    }); 
    return helpArr ;
} 

// 4) ---------------------
//
// An employer wants to compare between his employees skills, write a function that will extract the differences 
// between the employees skills.

// EX:
// first_Employee = [C, C#, Java, Angular, PHP]
// first_Employee = [C#, .Net, JavaScript, React, Angular]
// ==>
// result = [C, Java, PHP, .Net, JavaScript, React]
// Hint:
// - the 'include' method can help you, read about it.
// ------------------------

const skillComparison = (arr1, arr2) => {

    let helpingArr1 = arr1.filter(item=>{

        return(!(arr2.includes(item)));
    });
    let helpingArr2 = arr2.filter(item=>{

        return(!(arr1.includes(item)));
    });
    
    let ansArr=[].concat(helpingArr1,helpingArr2);

    return ansArr; 
}


module.exports = { oddFiltration, cvsFiltration, vowelsFiltration, skillComparison };

