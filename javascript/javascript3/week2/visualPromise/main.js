// moveElement(document.querySelector('li'), {x: 20, y: 300})
//     .then(() => {
//         console.log('Element has been moved');
//     });

let discs = [
{ 
    name : "red",
    target: {x: 20, y: 300}
},
{
    name : "blue",
    target: {x: 400, y: 300}
},
{
    name : "green",
    target: {x: 400, y: 20}
}
]

document.getElementById('allatonce').addEventListener('click', translateAllAtOnce);
document.getElementById('onebyone').addEventListener('click', translateOneByOne);

function translateAllAtOnce(){

    for(disc of discs){
        moveElement(document.getElementById(disc.name), {x: disc.target.x, y: disc.target.y})
        .then(() => {
            console.log(disc.name + ' has been moved');
        });

    }

}

function translateOneByOne(){
    moveElement(document.getElementById(discs[0].name), {x: discs[0].target.x, y: discs[0].target.y})
    .then(() => {
        console.log('Red has been moved');
        moveElement(document.getElementById(discs[1].name), {x: discs[1].target.x, y: discs[1].target.y})   
        .then(() => {
            console.log('Blue has been moved');
            moveElement(document.getElementById(discs[2].name), {x: discs[2].target.x, y: discs[2].target.y})
            .then(()=>{
                console.log('Green has been moved');
            })
        });
    });
    
    

    
}


