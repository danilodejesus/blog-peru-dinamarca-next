import Link from 'next/link'
import { useState, useEffect } from 'react'

export function ListPosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function loadPosts() {
      const res = await fetch('http://127.0.0.1:8000/api/posts/')
      const posts = await res.json()
      console.log(posts)
      setPosts(posts)
    }
    loadPosts()
  }, [])

  const formatUrl = (str) => {
    return str.split(' ').join('_');
  }

  return (
    <main className='main'>
      <div className="container">
        <h3>Articles, info and tips about Danish culture
        </h3>

        <div className='main-post'>
          <ul className='flex'>
            {posts.map((post) => (
              <Link href={`/${formatUrl(post.title)}${post.id}`} key={post.id}>
                <li key={post.id}>
                  <h2>{post.title}</h2>
                  <p className='description'>{post.h2_description}</p>
                  <p>{post.country}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <style>
        {`
          .main {
            padding: 20px 0;
            background: white;
          }
          .main h3 {
            color: #660029;
          }
          .main-post ul {
            align-items: inherit;
          }
          .main-post li {
            max-width: 350px;
            margin: 10px;
            border: 1px solid gray;
            padding: 0 8px;
            border-radius: 6px;
          }

          .main-post h2 {
            font-size: 20px;
            max-height: 36px;
            height: 100%;
          }

          .main-post .description {
            height: 56px;
            overflow: hidden;
          }
        `}
      </style>

    </main>
  )
}

export default ListPosts