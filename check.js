const one=document.getElementById("one");
const two=document.getElementById("two");
const three=document.getElementById("three");
const four=document.getElementById("four");
const mysubmit=document.getElementById("mysubmit")
const result=document.getElementById("result");
const result1=document.getElementById("result1");
mysubmit.onclick=function(){
 if(one.checked)
 {
    result.textContent=`you are subscribed`;
 }
 else{
    result.textContent=`you are not subscribed`;
 }
 if(two.checked){
 result1.textContent=`you are paying with visa`;
 }
 else if(three.checked)
 {
    result1.textContent=`you are paying with mastercard`;
 }
 else if(four.checked)
 {
    result1.textContent=`you are paying with paypal`;
 }
 else{
    result1.textContent=`you must choose anyone`;
 }
}
let username=window.prompt("enter your username");
// without method chaining//
/*
         username=username.trim();
         let letter =username.charAt(0);
         letter=letter.toUpperCase();

         let extra=username.slice(1);
         extra=extra.toLowerCase();
         username=letter+extra;
         console.log(username);
*/
// with method chaining
username=username.trim().charAt(0).toUpperCase()+username.trim().slice(1).toLowerCase();
console.log(username);