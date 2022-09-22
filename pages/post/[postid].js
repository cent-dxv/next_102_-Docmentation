import { useRouter } from "next/router";
import useSWR from "swr";


const params = useRouter()
const fetch = async () => {
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postid}`
  );
  const data = await responce.json();
  return data;
};

function Post_d() {

  const router = useRouter();
  const { post, erro } = useSWR('post', fetch);
  if (erro) return "somting went wring";
  if(!post) return "loadding"

  return (
    <div>
      <h1>post Swr fetcher</h1>

      {/* <h2> {user.name}</h2> */}
      <h3> {post.title}</h3>
      <p> {post.body}</p>
    </div>
  );
}

export default Post_d;
