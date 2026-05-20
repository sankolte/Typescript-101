// type anotations and type inferencing


//anotations >>
// You explicitly tell TypeScript what type a variable/parameter/function is

let age: number = 25;
let name: string = "Sam";

function add(a: number, b: number): number {
  return a + b;
}

// : number, : string are type annotations.

//inferencing >>>


// TypeScript figures out the type automatically based on the value you assign.
// You don’t write a type annotation; TS infers it.

let dad = "papaa";
let num=3;

//thats all man
