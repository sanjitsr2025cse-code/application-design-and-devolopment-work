//oprators
function greet(name){
    console.log('hello',(name ||'visitor'));
}
greet();


//42=='42' (true)equality operator
//42==='42'(false) srict equality operator


//nullish coalescing operator
//hello
//result='null';
//result=result??hello;
//hello


//functions

function sayhello(message){
    console.log(message);
}
sayhello("sanjit.sr");

//closure
function outer(){
    var b=10;
    function inner(){
        var a=5;
        console.log(a+b);
    }
    return inner;
}
let result=outer();
result();

//arrays 

let colours=new Array('red','blue','green');
console.log(colours)
console.log(colours[0]);
colours[1]='orange';
console.log(colours);
console.log(colours.length);
//push,unshift,pop,shift;
console.log(colours.indexOf('green'));
//array maps
const product=['beans','tomato','carrot'];
const mapped=product.map(el=> el +' #');
console.log(mapped);

//array filters

var numbers=[1,3,5,7,8];
var filtered=numbers.filter(number=> number>7);
console.log({filtered});
//
var creatures=[{name:"shrak",habitat:"ocean",
                name :"whale",habitat:"ocean",
                name:"lion",habitat:"forest"}
            ];
const filtercreatures=creatures.filter(creature=> creature.habitat=="ocean");
console.log(filtercreatures);