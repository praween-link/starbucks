// ======== Variable Life Cycle ==========
/* --------------------------------
console.log(x);
// x = 18;
// var x = 18;
// const x = 18; // --Temporal Dead Zone
let x = 18; // --Temporal Dead Zone(TDZ)

 ----------------*****----------------
*/

/* --------------------------------
'use strict';

// x = 18; // --error x is not defined
// console.log(x);

let number = 10;

if (number) {
    numbr = 18; // --here speling mistake but strict mode help to find this error or mistaks
}

console.log(number);

 ----------------*****----------------
*/
// ========== Variable Life Cycle --- END


// ============ Closures ============
/*
let x = "Globle";

function fun1() {
    let y = "FunctionOneOutter";

    return function fun2() {
        let z = "FunctionTwoInner";
        return `${x} -> ${y} -> ${z}`;
    }

}

const show = fun1();
console.log(show);

const printValue = show();
console.log(printValue);

const printValue2 = show();
console.log(printValue2);
*/

// -----
/* Note: 
Q.) Closures are only created for functions that are declared inside another function.
A.-> In JavaScript, Closures are created when object methods, functions returned from other functions, 
or functions accessing variables in the global scope retain access to their parent scopes, enabling 
persistent access to those variables.
*/
function cart() {
    let items = 0;

    return {
        addItem: function () {
            items++;
        },
        getItems: function () {
            return items;
        }
    }
}

const closure = cart();

closure.addItem();
closure.addItem();
closure.addItem();

const items = closure.getItems();
console.log(items);

// ============ Closures --END


// ============ Java Script Runtime Environment =======
/*
1. JS Engine
   - Crome (V8 Js Engine)
   - Mozilla Firefox (Spider Monkey Js Engine)

2. In JS Engine
   - Call Stack
   - Memory Heap

3. Java Scrip Run Environment
   - JS Engine
   - Wep API (api calling)
   - Call Back Queue (event loop)
*/

// ====================
/**
 * Q.) What is the concept of accessing variables from the outer scope in the inner scope called?
 * A.-> Scope chain: By following the scope chain, JavaScript can resolve variable and function references
 * based on their lexical scope. This mechanism ensures that variables and functions are accessed within
 * the appropriate scope.
 *
 * Q.) Which of the following options accurately describe the components of a lexical environment and
 * their functions?
 * A.-> - Environment Record: Stores variables, function declarations, and block declarations and manages
 * their accessibility and lifecycle.
 *    - Outer Environment Reference: Provides access to variables and functions in the parent environment,
 * enabling scope chain traversal.
 *    - Memory Allocator: Manages memory allocation and deallocation for variables and objects within the
 * lexical environment.
 *
 * Q.) Which of the following statements accurately describes the parts/phases of the execution
 * context in JavaScript?
 * A.-> - Creation Phase: Variable and function declarations are hoisted, and memory is allocated
 * for variables. The "this" value is determined.
 *    - Execution Phase: Code is executed line by line, and variables are assigned values. Function
 * invocations are executed.
 *    - Cleanup Phase: Garbage collection is performed to free up the memory used by unreferenced
 * objects and variables.
 */

// Read about: lexical environment 