// generics are basically templates >> ha interfcaes bhi to templates hi hot ehe diff kya he ??

// Problem first

// Suppose you write:

function printNumber(value:number){
   return value;
}

// Works only for numbers.

// Now for strings:

function printString(value:string){
   return value;
}

// Now for boolean:

function printBoolean(value:boolean){
   return value;
}

// This is repetitive nonsense.


//   to reduce the xode repetivetines >> we have a generic soluton 

function printValue<T>(value:T):T{
   return value;
}

// t is a placeholder > wo jab tum value pass karte ho wo apne app wo type ka ho jata he 

printValue(10);
// T becomes number 
printValue("sanskar");
// T becomes string
printValue(true);
// T becomes boolean 

// -----------  MORE EGS >>

function wrapArray<T>(item:T):T[]{
    return [item]
}

// basicaly a funcntion is there jaha pe humne generics kiya declre <T> uske baad normally parameter pass kiya jaha pe uska bhi type where wo vahi T rehega and yaha pe function will return a array 

wrapArray("me jo bhi add karu usko ye funcntion array me daal dega thats why wraparray");
wrapArray(23);

//---- more egs

function pair<A,B>(a:A,b:B):[A,B]{
    return [a,b];
}

pair("masalsa","elaichi");
pair("chb",{obj:"ekk object"});

// toh baciallyv generic is used for boot are bhinna bhinna prakar ke values lene ke liye 

//  --- inteface with generics 

interface box<T> {
    item:T
}

const newbox:box<number>={
    item:10
}

// toh bacially thi is the syntax and jo tu pass karega in <__> this in a object teko vahi data type ke sath khela padega 

const one_more_box:box<string>={
    item:"new item"
}
// like hthis 


//------------------    REAL USE CSE KAHA HE ISKA 

//                   API KE SARE GANDMASTI

interface apipromise<T>{
    status :number,
    data:T
}

const res:apipromise<{flavour:string}> ={
     status:200,
     data:{flavour:"maslasal"}
}

// Your generic interface is like a template:

// interface apipromise<T>{
//    status:number,
//    data:T
// }

// Template says:

// I always have:
// - status

// But you decide what data type should be.

// Then later you fill the blank:

// apipromise<{flavour:string}>

// Like:

// T = {flavour:string}

const nums: apipromise<number[]> = {
   status:200,
   data:[1,2,3]
}

// this is also possible here >>> t=data=[1,2,3]  easy 