import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = async (params) => {
  const responce = await fetch(`https://jsonplaceholder.typicode.com/posts/${params}`);
  const data = await responce.json();
  return data;
};

function Post_d() {
  const router = useRouter();
  const params = router.query.postid;

  const { data, error } = useSWR(params, fetcher);
  if (error) return "somting went wring";
  if (!data) return "loadding";
  console.log(data);
  return (
    <div>
      <h1>post Swr fetcher</h1>

      {/* <h2> {user.name}</h2> */}
      <h3> {data.title}</h3>
      <p> {data.body}</p>
    </div>
  );
}

export default Post_d;
