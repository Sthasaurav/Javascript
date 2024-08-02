let promiseOne= new Promise(function(resolve,reject){
    
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"Saurav",Address:"Banepa"})
        }
        else{
            reject("ERROR!!!")
        }
    },2000)
 
})

promiseOne.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error)
}).finally(()=>console.log("The promise is either resolved or rejected"))



const promiseFive=new Promise(function(resolve,reject){

    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"Jenisha",Address:"Banepa"})
        }
        else{
            reject("ERROR!!! in JS")
        }
    },2000)
})

async function consumePromiseFive(){
    try{
        const response= await promiseFive;
        console.log(response);
        console.log(response.username);
        console.log(response.Address);

     
    }
    catch(error){
        console.log(error)
    }
}
consumePromiseFive()

