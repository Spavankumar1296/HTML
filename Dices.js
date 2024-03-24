function Rolldices()
{
    const one=document.getElementById("one").value;
    const result=document.getElementById("result");
    const two=document.getElementById("two");
    const values=[];
    const image=[];
    for(let i=0;i<one;i++)
    {
        const value=Math.floor(Math.random()*6)+1;
       // console.log(value);
       values.push(value);
       image.push(`<img src="Dices_program/${value}.png" alt="try again">`);
    }
    //console.log(values);
    result.textContent=`Dice: ${values.join(', ')}`;
    two.innerHTML=image.join('');
}