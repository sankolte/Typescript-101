  interface TeaRecipe{

  }

  // this is covered in handwritten notes 

  // but some additional concepts

  type Basechai ={tealeaves:number}
  type extra ={masala:number}

  type masalachai=Basechai & extra
// yes hum aisa kar sakte he usme dono ka rahega abb masalachai me 

let varibale:masalachai={
    tealeaves:2,
    masala:2
}
//aise abhi dono ke madat se bhi variabl declare kar sakte he 
// rahi baat undate karne ki

varibale.tealeaves=3
//hogaya asie karte he hum ok....

//---------------------
//what if kabh kabhi pata nahi ki koi type paaka hoyga ya nhai 

type profile={
    name:string;
    age:number;
    email ?:string;     //ye yaha pe ? isse wo bolta he ki" ho bhi sakta he and nahi bhi ho sakta he "
}

const unser1:profile={
    name:"sansakr",
    age:23
} //yaha pe emial nhai fir bhi no error nothing

unser1.email="kltesansakr.1406@gmail.com";
// ye lo abb add kar diya 
//easy and nice 

//--------------------------------

// readonly means:

// "This value can be read, but cannot be changed after initialization."

// It is a TypeScript feature for preventing accidental mutation

type useer ={
    readonly id:number;
    name:string;

}

const u1:useer={
    id:2,
    name:"sanskar"
}

// u1.id=3;   this will give error >  coz its a readonly type




