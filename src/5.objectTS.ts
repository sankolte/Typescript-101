// fist quis >> why we use const for declaring a obj

// So why still use const?

// Because in most cases:

// you don't want variable reassignment
// you only want to modify properties if needed

// Example:

// const order = {
//     type: "tea",
//     sugar: 2
// }

// You may update:

// order.sugar = 3

// Fine.

// But completely replacing object accidentally:

// order = "random strin

const user = {
    name: "Sanskar",
    age: 20
}

// here ts automtically inference the types > we dint have to do it explaicitly >  direct likho

// {
//     name:string;
//     age: number ;      //behind the scenes aisa infer ho raha he 
// }

// agar hume object ke liye fir bhi likhna he achese types pehele se hi 

type tea={
    name:string;
    price:number;
    ishot:boolean;

}

 const chai:tea={
    name:"ginnger ",
    price:20,
    ishot:true
}

//aisa karne ka 


//----------------- CONCETNOF DUCKTYPING IN TS

type cup={
    size:string;
}
let smallcup:cup={
    size:"200ml"
}

let bigcup ={size:"200ml",material:"paper"};

smallcup=bigcup;
//yep bascialy 
// this is called structural typing
// This works.

// Why?

// Because bigcup HAS everything required by Cup.

// Cup only demands:

// {
//    size: string
// }

// And bigcup contains:

// size ✅
// material ✅ extra

// Extra properties are allowed here.
// How TS thinks internally

// smallcup needs:

// {
//    size: string
// }

// Now TS checks bigcup:

// {
//    size: string,
//    material: string
// }

// Question:

// "Does it at least have size:string?"

// YES.

// So assignment allowed.


type brew={
    brewtime:number;
}

const coffee={
    brewtime:5,
    beans:"arabica"
}

const chaibrew : brew = coffee;
// extra values aa jaye to koi issue nai hota he in ts

//-------------------------------------------
// aur ekk concept ts meka

type Item={
    name:string;
    quantity:number;

}

type Address={
    street:string;
    pin:number;
}

type order={
    id:string;
    item:Item[];
    // ye aisa chalat he > promotes code reunsability
    address:Address;
    //like thhis
}