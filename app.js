document.addEventListener('DOMContentLoaded', ()=>{
    fechData()
})


const fechData= async () =>{
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users')           
        const data = await res.json()
        console.log(data)
    } catch (error){
        console.log(error)
    }
}
