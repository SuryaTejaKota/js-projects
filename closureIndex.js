var a = 6;
function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    y();
}
x();