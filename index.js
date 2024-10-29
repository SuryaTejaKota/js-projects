// var a = 1;
// b();
// function b(){
//     a = 2;
//     console.log(a);
// }
// console.log(a);

// Outer function
function outer() {
    let arr = [];
    let i;
    for (i = 0; i < 4; i++) {
        // storing anonymous function
        arr[i] = close(i);
    }
    function close(x){
        return x;
    }

    // returning the array.
    return arr;
}

let get_arr = outer();

console.log(get_arr[0]);
console.log(get_arr[1]);
console.log(get_arr[2]);
console.log(get_arr[3]);