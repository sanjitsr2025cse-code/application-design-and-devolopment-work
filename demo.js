//scope

const name ='sanjit,sr'

function globalname(){
    const name='thar from marvel'
   
    if(true){
        const name='santhish'
        console.log(name)
    }
     console.log(name)
}
console.log(name)
globalname()


//variable key word scope
function logname(){
    if(true){

    }
    var name='sanjit.sr'
    console.log(name)
}
logname()

//hoisting

function hoist(){
    a=10;//not initialized without keywords can be used print outside the function.
    let b=50;
    console.log(b)
}
hoist()
console.log(a)


//variable declaration(let,var,const)
//const-the value will be const!! const a=5; const a=6; not possible. definitely want to assingn a value for the variable const a=5;like this other 
// const a; not Valid

//object stores the memory so value of const can be changed!!
const person={
    name:"sanjit",
    age:14
}
person.name='sanjit.sr'
console.log(person)

//const of arryas can be changes
const cars=['maruti','bmw','buccati'];
cars.push('audi')
console.log(cars)

