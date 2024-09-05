// for (var i = 0; i < 100; i++) {
//    //Cau lenh thuc hien
// }
// for(var i =0; i<10; i++ ){
//     console.log(i);
// }
// var sv = ['viet','nam','huong','lan','ngan'];
// console.log('in ra tat ca phan tu bang vong lap');
// console.log(sv[0])
// for(var i =0; i < sv.length; i++){
//     console.log(sv[i]);
// }
var hocvien = {
     ten : "Viet",
     tuoi: 31,
     diemtoan: 9,
     diemhoa:8,
     diemly:7,
     chieucao:172
}
var x;
for(x in hocvien)
{
    console.log(hocvien[x]);
}