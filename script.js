const button=document.querySelector("button")
const bt=document.querySelector(".bt")
 
const color=['red','green','orange','yellow']

// bt.style.backgroundColor='green'
let i=0;
button.addEventListener('click',changeC)

function changeC()
{
    const cd=parseInt(Math.random()*color.length)
   
        bt.style.backgroundColor=color[cd]
    i++;

}
