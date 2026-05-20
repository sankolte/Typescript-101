
//this is not simething we do only in Ts >> these are just good programing practices we follow 

//type narroing :  in ts basic type naroowing is basiclaly > when union used ( or has options in datatypes ) we check what will be the 
// exact type by using if else foloowed by we can also do some work like exicute some actions in those if else blocks after validation the typr


function getname (product : string|number){
    if(typeof product==="string"){
        return `The name of product is ${product}`;
        // he bagh yaha pe humne type narriw kar liya like yaha pe i am 100 percent quarrented ki iss block me sirf string value ayegi 
    }
    else{
        return `The quantity of product is ${product}`;   // and iss block me sirf number hi ayega 
    }
}


// not only this but also we can check turthiness 

function getMsg(msg ? : String){      //? cha arth ki bow mahit nahi msg yein ki nahi mhanje ala ter giid but nahi ala ter ok asa 
    if(msg){
        return `yeahh msg aagaya jisme likha he ${msg}`;
    }
    else{
        return `nahi bhai nahi aya msg ha `;
    }
}
//like this we can cehck thruthiness ki bhai sach me aya ki nhai msg like i told u these are just mast wale coding practies 



//Also  we can do exhaustive checks >> 
// exhaustive check in programming means:

// Checking all possible cases, conditions, or values before finishing the logic.

function orderbeer(size:"Large"|"medium"|"small"|number){
    if (size==="Large"){
        return `are kam pi bhai cummon `
    }
    if(size==="medium") {
        return `good bro aise hi medium pine ki `
    }
    if(size==="small"){
        `isskeliye aur mangao !`
    }
    else{
        return `number of beers ordered are ${size}`   //etha number wala yeil
    }
}
 

//  aur kuuch cheeze  basiclly diff lasses having same method name toh usko bhi we can wrote properly by exhasutive check where bys using anotation 

class Circle {
  draw() { return "○"; }
}
class Square {
  draw() { return "□"; }
}
class Triangle {
  draw() { return "△"; }
}



function render(shape:Circle | Square | Triangle) {
  if (shape instanceof Circle) {
    console.log("Circle:", shape.draw());
  } else if (shape instanceof Square) {
    console.log("Square:", shape.draw());
  } else if (shape instanceof Triangle) {
    console.log("Triangle:", shape.draw());
  } 
}

// intanceof cha kay vishay :
// Whether an object was created from a particular class or constructor function.  

//------------------------------------------------------------
// KHUD KE TYPES >>>>>>>>>>>>>>>

// types MHANJE KAY  ter tech je pahila apan bascially apan kay expec kartoy let name:string; here string is type okay tph aise khud ke banana yes  

type chaiorder ={
    type:string
    sugar:number
}   //idhar toh bahercha type is a keyword pan aat madhe je vatel te lihycha bindas those are just values 

function ischaiorder(obj:any):obj is chaiorder{       //this is how we use it like custom errors ann bascially jo bhi ayega value bahar iss function se uska type will be alwsys chaiorder
    return(
        typeof obj==="object" &&
        obj !== null  &&
        obj.type === "string" &&
        obj.sugar === "number"
    )
}
//ekk simple sa function he jo validation check karta he ki chaiorder ka type thik he ki nahi

// uper vishay ksas ahe its a type guard iss liye udhar had to use any and that format
// coz its like initially  it means
// "I don't know what this thing is initially.
// Let me check it at runtime   aisa 

// Very important understanding:

// This:

// obj: chaiorder

// is compile-time trust.

// This:

// obj is chaiorder

// is runtime verification + type narrowing.

// Huge difference.
//------------------------------------------------------------

// ekbar hogaya type gurd se validate ki koi tension nahi

function serve(item:chaiorder|string){
    if(ischaiorder(item)){      //ye idahr type narowing hote hue 
        return `serve the item where type of item is ${item.type} and sugar is in quantity of ${item.sugar} `
    }
}

// ---- one more eg  >>>>>>>>


type MasalaChai = {
    type: "masala";
    spiceLevel: number;
};

type GingerChai = {
    type: "ginger";
    amount: number;
};

type ElaichiChai = {
    type: "elaichi";
    aroma: number;
};

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai) {             //type narowing 
    switch (order.type) {

        case "masala":
            return `Making Masala Chai with spice level ${order.spiceLevel}`;

        case "ginger":
            return `Making Ginger Chai with ginger amount ${order.amount}`;

        case "elaichi":
            return `Making Elaichi Chai with aroma level ${order.aroma}`;

        
    }
}
