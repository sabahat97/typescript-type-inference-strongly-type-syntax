// type inference

let person        =   "faraz";
let gender        =    "male";
let nationality   =   "pakistan";
let birth_palce   =    "karachi";
let isMarried     =     false;
let contact       =     +921047395738;
 
let a = (`${person} ${gender} ${nationality} ${birth_palce} ${isMarried} ${contact}`);
console.log(a);

//strongly type syntax

let persSon: string = "faraz";
let Gender : string = "male";
let Nationality: string = "pakistan";
let Birth_Place: string = "karachi";
let ismarried: boolean = false;
let Contact: number = +921047395738;

let b = (`${persSon} ${Gender} ${ Nationality} ${Birth_Place} ${ismarried} ${Contact}`);
console.log(b);