// Type assertion > means forced type inferencing

let name:any="sanskar"        // ts dosent know ki what is datatype but still hume to pata he na ki string he obvio 

let namelength:number= (name as string).length                       //bhai ts sunn name jo he na wo string he 

console.log(namelength);  

//-----------------one more use case 

let input= document.getElementById("my-input")
// ts galat infere karega 

let input1 =( document.getElementById("my-input")) as HTMLInputElement
//ye he sahi wala

// kaha kaha pe type assertion use karan hi padta he > buss pata hona chahihye busss dekh ke rakho 

//-----------thoda duff btween any and unknown 

let value:any;
value=1
value="sanskar"
value=true
value.ToUpperCase();

// see yaha pe error nahi aya but jab run karoge tab 100 oercent ayega ALSO  agar notice kiya hoga toh koi suggestion bhi nahi aya jab value.Touppercase kiya tab yee to thik nahi he na bhai 

let newvalue:unknown;
newvalue=1
newvalue=true
newvalue="sanskar"
// but when i do
// newvalue.ToUpperCase();  error aya tha like curly lines >> why ?? -> ciz unknwnn me value ko define arna padta he uspe koi operation karne se pehele >  using unknown when hum assigning kar rahe he varibale s=me value is cool like wo any jaise hi behave karta he but the moment hum usko use karna chahe nahiiii asie kaise >>>>>>

// toh issilye hum thida narrow kar lenege 

if(typeof newvalue==="string"){
    newvalue.toUpperCase();    //dekha iss bar suggestion bhi aya ts ka >>>
}

//this is the diff between any and unknown 

//----------------------------------
// try - catch 

try{
    //---
} catch (error){
    if(error instanceof Error){

        console.log(error.message);
    }
}
// this is how we do it by type narrowin  >> detailed notes in handwritten notes>>>>>>>>>


//------------------------------------------------------------

// NEVER ki gmasti
// wo kabhi hona hi nahi chaihe tha , like jab narowing karke sab types cover kar lete he but still if gmasti kar rahe he toh NEVER

type Role = "admin"|"user"

function redirectBasedOnRole(role:Role):void {

    if(role==="admin"){
        console.log("redirectiong to admin dashboard ");
        return
    }

    if(role === "user"){
        console.log("user dashboard pe redirect karo");
        return
    }
    //ata zhala padhatshir narowing > ata there are no other options for type narowing 

    role;      //u shud just know ki agar ye aisa lika he vinakaran toh kyu likha he like future purpose >> agar naya koi role add kiya toh abhi sidha it will automatically assigned to this role done > supposen new role added superadmin upper to ab ye direct this role will be superadmin aisa /........


                         
}

// ekk aur jaghe ata he >>

function neverReturn ():never{
    while(true){}
}

//kabh kabhi aise functions jo kuch bhi nahi return karte unke liye bbhi use karte he never 
// ye server continuesly chalu rahega 
// eg le lo server ka wo humeshs chalu reheat he right ??
// asie hi 