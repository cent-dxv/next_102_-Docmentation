import { useRouter } from "next/router";

function Post_d({ post }) {
  return (
    <div>
      <h1>post</h1>

      <h2> {post.title}</h2>
      <p> {post.body}</p>
    </div>
  );
}

export default Post_d;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { postid: '1' },
      },
      {
        params: { postid: '2' },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postid}`
  );
  const data = await responce.json();

  return {
    props: {
      post: data,
    },
  };
}
