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

export async function getStaticPaths() {
  const responce = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await responce.json();

  // // this fore fall back to fallse and dynamically fill
  // // fill all paht
  // const paths = data.map((post) => ({
  //   // params: { postid: post.id.toString() },
  //   params: { postid: `${post.id}` },
  // }));

  // return {
  //   paths: paths,
  //   fallback: false,
  // };

  // this for fall back true
  // the path not generated durign build time
  // will not result 404 page instade it
  // call for api in back ground and serve while it done

  return {
    paths: [
      {
        params: { postid: "1" },
      },
      {
        params: { postid: "2" },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postid}`
  );
  const data = await responce.json();
    console.log(data)
  if (!data.id) {
    return {
      notFound: true
    }
  }

  const user_responce = await fetch(
    `https://jsonplaceholder.typicode.com/users/${data.userId}`
  );
  const user_data = await user_responce.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: data,
      user: user_data,
    },
  };
}
