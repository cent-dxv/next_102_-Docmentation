import { useRouter } from "next/router";

function Post_d({ post ,user}) {
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
  const paths = data.map((post) => ({
    // params: { postid: post.id.toString() },
    params: { postid: `${post.id}` },
  }));

  return {
    paths: paths,
    fallback: false,
  };
  // return {
  //   paths: [
  //     {
  //       params: { postid: '1' },
  //     },
  //     {
  //       params: { postid: '2' },
  //     },
  //   ],
  //   fallback: false,
  // };
}

export async function getStaticProps(context) {
  const { params } = context;
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postid}`
  );
  const data = await responce.json();

  const user_responce = await fetch(
    `https://jsonplaceholder.typicode.com/users/${data.userId}`
  );
  const user_data = await user_responce.json();

  return {
    props: {
      post: data,
      user: user_data
    },
  };
}
