const chaiFlours :string[] =["masala","adarak"];
// array me string stro kar rahe hr toh aisa

const prices :number[]=[20,35];

// araay jims esirf numbers chahiye ho 

//------------------------------------------------
// also one more typr of delcaring a array 

const rating :Array<number>=[2,4,5];

const name:Array<string>=["nmaes","aise "];

//--------------------------------------------------

// now array of objects  ( also custom datatypes me kaise kare array declare)

type chai={
    name:string;
    price:number;

}


const menu: chai[]=[
    {
        name:"masala",
        price:15
    },
    {
        name:"adarak",
        price:20
    }
];

// like this >>>>

//--------------------------------
// Readonly array >> radonly property is > bascially u can only definr it > but values cant be manipulated lik epush pop kuch nahi karne dega 

const cities : readonly string[] =["pune","mumbai"];

// cities.push("jaipur")   this not possile 


//-----------------------------------

 const table :number[][]=[

    [1,2,3],
    [5,6,7]
 ]
// called multidimensnla arrays '


//---------------------------------



//     TUPLES IN Ts

//   Normal array:

// let arr: string[] = ["a", "b", "c"];

// Meaning:

// every element must be string

// No fixed length.
// No fixed positions.

// Tuple:

// let person: [string, number] = ["Sanskar", 20];

// Meaning:

// first value MUST be string
// second value MUST be number
// order matters
// length matters

let chaituple : [string,number] = ["sansakr",34];

// ye exact format me hi rahega >>> remembr > at end of the day > tuple > array me hi convert hoga 

let onemoreTuple :[string, NamedCurve,boolean ?];
// aise for optional 

let tuplebhaiya: readonly[number,string];
// for readonly 


const chaiItems :[Name:string,price:number ]=["masala",3];

// the standard way to right tuples like names ke sath likho >> s

//-------------------------------------------------------------------

//     ENUM in Ts

enum cupsize{
    SMALL,
    MEDIUM,
    LARGE                     // standard prac > caps me hi likho
}

// basically giving a choize to user 

const size=cupsize.LARGE;

const enum chaiType {              // const laga sakte he koi prob nahi he >> coz agar baad me agar chage na karna hua to cinst laga do thats it 
    MASALA="masala",
    GINGER="ginger"
}

function makechai(type:chaiType){
    console.log("chaiiiii")
}

// like this >> for giving user option 

// we can also use union at this place 

// alsoooooooo

let naam :[string,number ]=["chai",3];
 naam.push("extra");

// yeah thi is possible coz end of the day tuplle is array

