
export default async function  handler (req, res , next)  {
  
  if (req.method === 'GET'){
    
      const responce = await fetch("https://jsonplaceholder.typicode.com/users")
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
     res.status(201).json({new_comment})

  }

}

