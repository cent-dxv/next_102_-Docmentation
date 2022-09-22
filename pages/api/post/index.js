
import  {data} from '../../../components/Get_post'
const dataa = fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((data) => data).catch('error')

export default async function  handler (req, res , next)  {
  
  if (req.method === 'GET'){
    
      const responce = await fetch ("https://jsonplaceholder.typicode.com/users")
      const in_data = await responce.json()
      console.log(in_data)

    res.status(200).json(in_data)
  }
  else if(req.method === 'POST'){
    const commnet =  req.body.text
    const new_comment = {
      'id': Date.now(),
      'text' : commnet
     }
     data.push(new_comment)
     res.status(201).json({new_comment})

  }

}

