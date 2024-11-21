import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const FullPost = (props) => {
  console.log(props)
  const router = useRouter()
  console.log(router, 'info')
  const { id } = router.query
  const cleanId = id?.charAt(id.length - 1)

  const [post, setPost] = useState(''); 

  useEffect(() => {
    async function loadPosts() {
      const res = await fetch(`http://127.0.0.1:8000/api/posts/${cleanId}/`)
      const post = await res.json()
      setPost(post)
      console.log(post)
    }
    loadPosts()
  }, [])

  return (
    <div>
      <h3>FullPost - {cleanId}</h3>
      <ul>
        <li>
          <p>{post.title}</p>  - <u>{post.created_at}</u>
          <p>{post.main_description}</p>
          <p>{post.h2_title}</p>
          <p>{post.h2_description}</p>
        </li>
      </ul>
    </div>
  )
}

export default FullPost