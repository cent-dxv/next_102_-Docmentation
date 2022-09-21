import Link from "next/link"
function Post({post}) {
  console.log(post)
  return (
    <div>
      <h1>Post list</h1>

      {
        post.map(post=>{
          return(
            <>
            <Link href= {`/post/${post.id}`}  >

            <div key = {post.id}>
              <h2>
                {post.id}
              </h2>
                {post.title}
            </div>
            </Link>
            </>
          )
        })
      }
    </div>
  )
}

export default Post

export async function getStaticProps(){
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data  = await responce.json()
  
  return{ props : { post: data.slice() }}
}