// function fetchData(){
//     return new Promise((resolve,reject)=>{

//         setTimeout(()=>{
//             resolve('Data fetched')
//         },2000)
//     })
// }

// async function handelData(){
//     const message= await fetchData();
// console.log(message)
// }


// handelData()

function fetchData(){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve('Data fetched')
            reject('Data fetch ERROR!!!')
        },2000)
    })
}

async function handelData(){


    try {
        const message= await fetchData();
    console.log(message)
    } catch (error) {
        console.log(error)
        
    }
}


handelData()