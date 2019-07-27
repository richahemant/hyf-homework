let t = 2;
console.log(t);

//Rewriting Promises for setTimeOut.
new Promise(function(resolve, reject){
    setTimeout(function(){
        //Create a condition for reject
        if(t>=3){
            //reject as a return statement for the reject condition
            reject(t + " seconds is just too long for me to wait...");
        } //Else resolve is played out..
        else{
        //resolve as a return statement for the resolve condition.
        resolve("Acted after " + t +" seconds");
        }
    }, t * 1000);
})
//The first then accepts the return from the the resolve and then acts on the same
.then(function(result){
    console.log(result);
})
//The catch accepts the return from the reject and then acts on the same.
.catch(function(reject){
    console.log(reject);
})