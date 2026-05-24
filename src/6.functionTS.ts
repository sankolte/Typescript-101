function greet(name:string):string{
    console.log(`hello ${name} welcome to the backchodi !!`);
    return name
    // ye kyu coz mene return ka bhi type de diya he pehele se 
}

greet("sanskar");


// this is how > normal function works ok 

// we can also 

type halchal={
    grettings:string;
    flowers:"rose"|"tulips"|"sunflowers";    // inke alava kuch bhi nahi chalega 
    handshake:boolean;
}

function newgreet(obj:halchal){
    console.log(`${obj.grettings} here are ${obj.flowers} for u `);

}

newgreet({
    grettings:"hey",
    flowers:"rose",
    handshake:true
});

// this is how we can do !!


//-------------------

// logger functions >>
// soemtimes function doesent returns anything likek jarurat hi nahi hoti 
function logger():void{
 
   console.log("aise hi kcuh bhi log karne ke liye ");
    // dont need to return something 
}



//------------------------\\
// we can also add optional para in fucton
function chai(type?:string){

}
//like this 
// agar function pass karte hue nahi bhi kiya pass to bhi its okay

// bus rememeber if multiple para he function me > toh ye jo optional para he inko sab se end me likha jata he 

// thoda final boss >>

function makechai(chai:{
    name:string;
    sugar:number;
    quantity:number;

}):number{
    console.log(`${chai.name} chai made with sugar ${chai.sugar} for quantity of ${chai.quantity}`);
    return 0;  // hehe udahr number diya he na toh hume toh pata he na 

}

makechai({
    name:"elaichi",
    sugar:2,
    quantity:3
});

// like this 