/*<div class="box3">Awesome jokes is loading</div> */// <button id="button">pagla</button>
const box3 = document.querySelector('.box3')
const body = document.querySelector('.box1')
const button = document.querySelector('#button')
const jokes = async ()=>
{ 
    const setheader = {
        headers : {
        Accept : "application/json"
        }
    }
    fetch('https://icanhazdadjoke.com',setheader).then((res) => res.json() )
         
    .then((data) => {
           box3.innerHTML = data.joke})
        
    .catch((error) => {
         console.log(error);
     })
    // const box3 = document.querySelector('.box3').style.background = "red"
    
}
button.addEventListener('click',()=>
{
    jokes();
});
console.log(`${body}`)
// box3.style.background= "red"
// if(body.style.background==="rgb(0, 200, 255)")
// {
    
//         box3.style.background= "red"
    
// }

