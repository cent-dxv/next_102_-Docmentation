// import styles from "../../styles/Home.module.css"

import styles from "../../styles/post.module.scss"


function index({post}) {
  return (
    <div>
    <h1  className={styles.highlight}> calling on data from oun API</h1>
    {
      post.map(post => {
        return (
          <div key={post.id}>
            <h2> {post.id}</h2>
            <h2> {post.name}</h2>
          </div>
        )
      })
    }
    
    
    </div>
  )
}

export default index

export async function getServerSideProps() {
  const responce = await fetch("http://localhost:3000/api/post");
  const data = await responce.json();

  return { props: { post: data } };
}
