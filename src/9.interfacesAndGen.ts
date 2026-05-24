//                 INTERFACE ''

// iska kaam he ki basically apne data ko shape dena > ok thTS ALL '

interface chai{
    flavour: string
    price: number
    milk?:number
}

const mastchai:chai={
    flavour:"masala",
    price:20
}

// see this  cna be also done by type >> yes bilkul >>> 80 % thikani we can use wo ekk dusre ke thikani no prob same hi he wo mostly 

// bacially interface : use karte he tab jab we are working with objects and oop

interface shop {
    readonly id:number
    name:string

}

const s:shop={
    id:1,
    name:"jaha"
}

// ye banaya object interface se 

// s.id=3;  will give error 
s.name="dukan";  // ye ho jaeyga 


//-------------------------------------------------------

//        INTERFACE WITH FUNCTIONS 

// >>>>     Basically > interface me hum data ko achese shape dete he matlab usko achese format dete he >> abhi function he to function definneition bhi det he achese 

interface DiscountCalculator{
    (price:number):number
}

const apply50: DiscountCalculator=(p)=>{
    return p*0.5;

}

// This means:

// "Any function of this type must:

// take a number parameter
// return a number"

// That’s it.

//------------------

//      INTERFACE WITH METHODS 

interface piyochai{
    drink():void;
    split():void;
}

let pi_liya_chai:piyochai={
    drink(){
        console.log("idhar kuch bhi karo tum");
    },
    split(){
        console.log("same here ")
    }
}
 
/// like this >>>>  MORE DEATILS NOTES IN NOTES 


//------------------------------

//     INTERFACE NA MERGE HO JATE HE 

// Suppose mene ekk lib import kii he ok.. uska ekk interface banaya ok > usme meno suppose name lagta he 

interface user{
    name:string
}

// ekk aur interface mene banaya foro taking age (like sane hi naam ka coz kaam same hi he hume (llike hum ekk scenario imagine kar rahe he ))

interface user{
    age:number 
}

const u:user={
    name:"sansakr",
    age:23
}
// abb ye dono ke dono interfaces merge ho jaeyga > and jaha me unko use karunga > waha pe muzhe sare data ya to kya bolte he sare cheeze (age as well as name ) sab cover karna pdega 

