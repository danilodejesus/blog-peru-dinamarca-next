import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../app/containers/Layout";

const FullPost = () => {
  const router = useRouter()
  const params = router.query
  const [post, setPost] = useState('');

  useEffect(() => {
    async function loadPosts() {
      console.log(router)
      if (params == {}) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/posts/${params.post}/`)
        const post = await res.json()
        setPost(post)
      } else {
        if (window.location.search) {
          const param = new URLSearchParams(window.location.search);
          const id = param.get('post')
          console.log(param.get('post'))
          const res = await fetch(`${process.env.NEXT_PUBLIC_API}/posts/${id}/`)
          const post = await res.json()
          setPost(post)
        }
      }
    }
    loadPosts()
  }, [])

  return (
    <Layout>
      <article className="article">
        <div className="container">
          <h1>{post.title}</h1>
          <p>{post.main_description}</p>
          <p>{post.h2_title}</p>
          <p className='description'>{post.categories}</p>
          <p className='description'>{post.first_text}</p>
          <p className='description'>{post.second_text}</p>
          <p className='description'>{post.third_text}</p>
          <p className='description'>{post.fourth_text}</p>
          <p className='description'>{post.five_text}</p>
          <img src="https://cdn.getyourguide.com/img/tour/0917617002933ea0d406ceeb0148ec02e11dc6086ec88857fd8f2c328d1e2c58.jpg/146.jpg" />
        </div>

        <style>
          {`
            .article {
              background: #d2d2d2;
              padding: 50px 0;
              text-align: center;
            }
            .article .container{
              max-width: 600px;
              margin: auto;
            }
            .article img {
              width: 100%;
              margin-top: 40px;
            }
            .article h1 {
              color: #A0522D;
            }
            .article .description {
              color: #264653;
            }
          `}
        </style>
      </article>
    </Layout>
  )
}

export default FullPost