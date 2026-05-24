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
}  //idhar ts apna pan infer kar lega uska tension mat lo 

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

//--------------------------------------

// DATATYPE EKK TAREKE SE DEFINE KARKE >> USKO OBJECT ME USE BPHOT TAREKE SE KAR SAKTE HE 

type chai={
    name:string ;
    type:string;
    quantity:number;
}
// abhi object me ki nai gmasti 

const updateChai = (updates:Partial<chai>)=>{
  
    console.log("updating chai with ", updates);



}

// abhi now what i can do is >> like a cool thing 


updateChai({name:"elaichi"});

// i can do this >> like i dont hvae to put all values for updaing me PARTIALLY bhi update kar sakta hu 

// but kaise >> are wo he he na partila function wo sare dattypes ko optional (?) wala samjhta he >> matlab hua to bhi acha he nahi hua to bhi no problem aisa 

// bus yaad rakho ki empty obj pass mat kar dena galti he 
//like
updateChai({});

//--- ONE MORE VARIATION IN THIS 

type chaiorder={
    name :string;
    quantity :number;
}

const placeOrder = (order:Required<chaiorder>)=>{
    // this cna be also done 
    console.log(order);

}

//  in this case i cant 

// placeOrder({name:"elaichi tea})
// but u can 

placeOrder({name:"elaichi tea",quantity:2});

//coz wo Required ka meaning is >> all all the types are required to mention >>


//------one more OMIT

type newchai={
    name :string;
    quantity:number;
    ishot:boolean;
    secretingredient:string;
}

//supppose i dont want that secretingredient wala thing like suppos ei dont ahve toshow it in my donrennt and this data is going in frontend 
// so for imit one perticular thing 

type newnameofobject =Omit<chai,"secretingredient">;

// now new type cretaed withiut writnig sab ku h firse> where this type has everythinh same as newchai but no secretinngredients 

//---------------------------------------------------------------------------------------
