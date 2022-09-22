
const get_data = async () =>{
  
  const responce = await fetch ("https://jsonplaceholder.typicode.com/users")
  const in_data = await responce.json()
return await in_data
}


const dataa = fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((data) => data).catch('error')


 const cm  =[
  {
    id: 1,
    text: 'This is the first comment'
  },
  {
    id: 2,
    text: 'This is the second comment'
  },
  {
    id: 3,
    text: 'This is the third comment'
  }
]


export const data =cm