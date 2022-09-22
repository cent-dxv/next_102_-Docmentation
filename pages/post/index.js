import Link from "next/link";
import useSWR from "swr";


const fetcher = () => fetch('https://jsonplaceholder.typicode.com/posts').then((post) =>post.json())


function Post() {
  // console.log(post);
  const {data , error} = useSWR('get' , fetcher)
  const post  = data
  console.log(post)
  if (error) return "somting went wring";
  if (!post) return "loadding";
  return (
    <div>
      <h1>Post list</h1>

      {post.map((post) => {
        return (
          <>
            <Link href={`/post/${post.id}`}>
              <div key={post.id}>
                <h2>{post.id}</h2>
                {post.title}
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
}

export default Post;


