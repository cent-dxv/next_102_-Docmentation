import { useRouter } from "next/router";

function Post_d({ post, user }) {

  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <h1>post</h1>

       <h2> {user.name}</h2> 
       <h3> {post.title}</h3>
      <p> {post.body}</p> 
    </div>
  );
}

export default Post_d;



export async function getServerSideProps(context) {
  const { params, req, res } = context;
  console.log(req.headers.cookies)
  res.serHeaders('Set-Cookie',['name = cent' ])
  // http://localhost:4000/user
  //   http://localhost:4000/post

  const responce = await fetch(
    `http://localhost:4000/post/${params.postid}`
    // `https://jsonplaceholder.typicode.com/posts/${params.postid}`
  );
  const data = await responce.json();
    console.log("server side rendering")
  if (!data.id) {
    
    return {
      notFound: true
    }
  }

  const user_responce = await fetch(
    `http://localhost:4000/user/${data.userId}`
//    `https://jsonplaceholder.typicode.com/users/${data.userId}`

    );
  const user_data = await user_responce.json();

 
  
  return {
    props: {
      post: data,
      user: user_data,
    }
  };
}
