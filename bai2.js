let num=parseInt(prompt("Nhap so"));
//chuyen so sang dang chuoi
let str=num.toString();
//bat dau 1 mang voi ki tu dau cua chuoi
let result=[str[0]];
for(let i=0;i<str.length;i++){
    if(str[i-1]%2===0 && str[i]%2===0){
        result.push('-', str[i]);
    }else{
        result.push(str[i]);
    }
}
console.log(result.join(''));