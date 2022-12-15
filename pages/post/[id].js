import { useRouter } from 'next/router'
import React from 'react'

const Post = ({posts}) => {
  return (
    <div>
        {
            posts.map(post => (
               <fieldset key={post.id}>
                 <h6>{post.title}</h6>
                 <p>{post.body}</p>
               </fieldset> 
            ))
        }
    </div>
  )
}
export async function getServerSideProps(context) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const { id } = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${Number(id)}`);
    const posts = await res.json();
  
    console.log(posts);
    // Pass post data to the page via props
    return { props: { posts } };
  }
  

export default Post