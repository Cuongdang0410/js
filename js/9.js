// // demo ham tao và dính phần phần tử trong javascript
// var phantu = document.createElement('h1');
// // gan noi dung cho the do
// phantu.innerHTML= "Day la noi dung ben trong";
// var khoito = document.getElementById("caccm");

// // gan noi dung vao

// khoito.appendChild(phantu);

var mangdl = [
    {
        anh:"https://i1-vnexpress.vnecdn.net/2024/09/05/matbao-6888-1725518468.png?w=680&h=408&q=100&dpr=1&fit=crop&s=23P6Ust5po0ZiVYOv19PrQ",
        ten:"Ho thi thao",
        noidungcm:"Ai sử dụng vốn nhà nước đều thấm nhuần câu 'an toàn là quan trọng, hiệu quả là thứ yếu'"
    },
    {
        anh:"https://i1-vnexpress.vnecdn.net/2024/09/05/matbao-6888-1725518468.png?w=680&h=408&q=100&dpr=1&fit=crop&s=23P6Ust5po0ZiVYOv19PrQ",
        ten:"Truong Quy Hai",
        noidungcm:"Ai sử dụng vốn nhà nước đều thấm nhuần câu 'an toàn là quan trọng, hiệu quả là thứ yếu'"
    }
];
console.log(mangdl[0]['noidungcm']);
for (var i =0; i < mangdl.length; i++){
   console.log(mangdl[i].ten);
}