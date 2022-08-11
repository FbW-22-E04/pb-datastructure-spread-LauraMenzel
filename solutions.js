//1.

let euroCountries=["Ireland","Spain","France","Poland","Norway"];
let asianCountries=["Thailand","Japan","Vietnam","Korea","Bhutan","Laos"];

euroCountries=[...euroCountries,...asianCountries]
console.log("1.");
console.log(euroCountries);
console.log("---------------------------------------------------------------");

let euroCities=["Paris","Dublin","Berlin","Prag"];
let asianCities=["Kuala Lumpur","Tokyo","Seoul"];

let worldCities=[...euroCities,...asianCities];
console.log(worldCities);
console.log("-----------------------------------------------------------------");

//2.

let vegetables=["tomatos","cucumber","salat"];
let food=[...vegetables];

console.log("2.");
console.log(food);
console.log(vegetables);
console.log("---------------------------------------------------------------");

//3.
const maxNumber = (array) => Math.max(...array);

console.log("3.");
console.log(maxNumber([5, 8, 10]));
console.log("----------------------------------------------------------");


//4.
const minNumber = (array) => Math.min(...array);

console.log(4.);
console.log(minNumber([5,8,10]));

console.log("-------------------------------------------------------------------");

//5.
const person = {name: "John"};
const job = {role:"Theater"};

//5.1
const copyOfPerson = {...person};
console.log("5.1");
console.log(copyOfPerson);
console.log("-------------------------------------------------------------------");
//5.2

let employee ={...person,...job};
console.log("5.2");
console.log(employee);
console.log("-------------------------------------------------------------------");
//5.3

employee.name = "Heidi";
employee.role = "Film";
console.log("5.3");
console.log(employee);