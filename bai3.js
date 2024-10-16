//Khai bao chuoi nhap vao
let str=prompt('Nhap chuoi');
//Dinh nghia viet thuong va viet hoa
let upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lower='abcdefghijklmnopqrstuvwxyz';
//Bat dau 1 mang de luu tru ket qua
var result=[];
//
for(let i=0;i<str.length;i++){
    //Check neu ky tu hien tai la chu hoa
    if(upper.indexOf(str[i]) !== -1){
        //chuyen thanh chu thuong va them vao chuoi result
        result.push(str[i].toLowerCase());
    }else if(lower.indexOf(str[i]) !== -1){
        result.push(str[i].toUpperCase());
    }else{
        result.push(str[i]);
    }
}
console.log(result.join(''));
