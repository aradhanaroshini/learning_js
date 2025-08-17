
let vara="ab12c5";
let varast=vara.split("");
let varano=varast.length;
let a=[];
let b=[];
for (let i=0;i<varano;i++){
    try{
        let num=parseInt(varast[i]);
        if (isNaN(num)){
            throw new Error("Cannot parse character");
            b.push(num);
        }
        else{
            a.push(num);
        }
    }
    catch(err){
        console.log("Error:"+err);
    }
}
console.log(a);
let a2=[];
for(let j=0;j<a.length;j++){
    let num2=String(a[j]);
    
}