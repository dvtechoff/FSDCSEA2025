// function info(name, age, branch){
//     return "Hi " + name +", my age is "+ age +", my branch is " + branch;
// }

// console.log(info("Devansh Verma",21,"CSE"))


// const data = function(name, age, branch){
//     return "Hi " + name +", my age is "+ age +", my branch is " + branch;
// }

// // console.log(info("Devansh Verma",21,"CSE"))
// console.log(data("Devansh Verma",21,"CSE"))


// const data = (name, age, branch)=>{
//     return "Hi " + name +", my age is "+ age +", my branch is " + branch;
// }

// console.log(data("Devansh Verma",21,"CSE"))


// const data = (name, age, branch)=>{
//     return "Hi " + name +", my age is "+ age +", my branch is " + branch;
// }

// console.log(data("Devansh Verma",21,"CSE"))


// const data = ()=>{
//     let name = "Devansh Verma"
//     let age = 21
//     let branch = "CSE"
//     return "Hi " + name +", my age is "+ age +", my branch is " + branch;
// }


// console.log(data())

// function info(str="Hii"){
//     console.log("Haye " +str);
// }

// info("Daiya ");


//IIFE

// (function(){
//     console.log("hello, inside function");
// })();

// (()=>{
//     console.log("Hello with arrow function");
// })();


// setTimeout(function(){console.log("Hello")},1000);


// setTimeout(()=>{
//     console.log("Hello Auto timer");
// },1000);


function selectLanguage(lang="Good Bro"){
    let data;
    if(lang =='java'){
        function javaCompiler(){
            return "java Compiler Calling"
        }
        data = javaCompiler();
    } else if(lang == 'c'){
        function cCompiler(){
            return "C Compiler Calling"
        }
        data = cCompiler();
    }
    else{
        data = "Language not Supported."
        // data = lang;
    }
    return data;
}

console.log(selectLanguage("java"));