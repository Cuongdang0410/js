// function vd1() {
//     var ten = "Viet";
//     console.log("Di choi khong:" +  ten);
// }
// vd1();

// function vd2(ten){
//     console.log("Toi di hoc khong:"+ ten); 
// }
// vd2("huong");

// function tinhtbc(x,y) {
//     var z = (x+y) /2;
//     return z;

// }
// console.log(tinhtbc(5,10));
// if(tinhtbc(5,10) > 5) {
//     console.log("Trung binh cong lơn hơn 5");
// }

const z = function (x,y){
    return (x+y)/2
}
console.log(z(2,4));    

// function chao(){
//     var ten = "Vietnd";
//     return function(){
//         console.log("Cafe khong ha:" +  ten );
//     }
// }
// var h = chao();
// h();

// var cacmonan = {
//     ten:"Thitkhotau",
//     nguyenlieu:"Thilon",
//     gia:200,
// }
function MonAn(ten,nl,gia){
    this.ten = ten;
    this.nguyenlieu = nl;
    this.gia = gia;
}
var mon1 = new MonAn('Rau xao','Rau muong',900);
console.log(mon1);

var a2 = () =>{
    console.log("hello");
}
a2();

var a1 = function () {
    console.log("hello");
}