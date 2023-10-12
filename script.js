 function guess(){



let a= Math.floor(Math.random()*100)
console.log("Number is Genrated in between 0 to 100")
let num;
let count=0;
do{
  num=prompt("Guess The Number")
  num=Number.parseInt(num)
 if(num<a){
  console.log(num,"Your Guessed  number is less than randam number")
  
 }
 else{
    console.log(num,"Your Guessed  number is greter than randam number")

 }
 count++
}while(num!==a);
console.log("You Have guessed right number after",count,"atempt")
console.log("Randam Number",a);
}
