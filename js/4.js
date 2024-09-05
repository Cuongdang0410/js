var dongho = {
    hangsx : "casio",
    mau: "den",
    gia:50000000,
    gioitinh:"nam",
    xemngay : function(){
        console.log("Hom nau ngay 19-8-2017")
    }
}
console.log(dongho.hangsx)
console.log(dongho.gia)
console.log(dongho.xemngay)

var hocvien = {
    ten:"Viet",
    ho:"Nguyen",
    tuoi:31,
    chieucao:172,
    cannang:45,
    tendaydu:function(){
        return this.ho + " " + this.ten ;
    },
    danhgia:function(){
        if(this.chieucao/this.cannang < 3){
            return "dep trai";
        }
        else {
            return "hoi gay can boi boi them !"
        }
    }
}
console.log(hocvien.tendaydu());
console.log(hocvien.danhgia());