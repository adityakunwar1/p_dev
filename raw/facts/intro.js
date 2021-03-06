let varname;
let flag=true;
varname="aditya";
console.log("i am",varname);
let num;
num= 27;
for(let i=3;i*i<=num;i++){
    if(num%i==0){
        flag=false;
        
    }
    
}
if (flag=true)
console.log(" prime");
else console.log("not prime");