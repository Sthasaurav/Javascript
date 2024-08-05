
// //Fetch using async await
// async function getAllusers(){
// try {
//     const response=await fetch('https://jsonplaceholder.typicode.com/users')
//     // console.log(response)
   
//     const data = await response.json();
//     console.log(data)
// } catch (error) {
//     console.log("E:",error);
// }
  

// }
// getAllusers();

//Fetch using .then
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
} )
.then((data)=>{console.log(data);

})
.catch((error)=>console.log(error));
