import Link from 'next/link'
import { useState, useEffect } from 'react'

export function ListPosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function loadPosts() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/posts/`)
      const posts = await res.json()
      console.log(posts)
      setPosts(posts)
    }
    loadPosts()
  }, [])

  const formatUrl = (str) => {
    const replace = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    return replace.split(' ').join('_');
  }

  return (
    <main className='main gris-nordico'>
      <div className="container">
        <h3 className='azul-fjord'>Articles, info and tips about Danish culture
        </h3>

        <div className='main-post'>
          <ul className='main-posts flex'>
            {posts.map((post) => (
              <li key={post.id}>
                <Link
                  className='' 
                  href={{
                    pathname: `/${formatUrl(post.title)}`,
                    query: {post: post.id}
                  }}
                  query={post.id}
                  key={post.id}>
                  <h2 className='terracota-natural'>{post.title}</h2>
                  <p className='description azul-fjord'>{post.first_text}</p>
                  <p>{post.country}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>
        {`
          .main {
            padding: 20px 0;
          }
          .main h3 {
            // color: #660029;
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
            height: 70px;
            overflow: hidden;
          }

          .main-post .description {
            height: 56px;
            overflow: hidden;
          }

          .main-posts {
            flex-wrap: wrap;
          }
        `}
      </style>

    </main>
  )
}

export default ListPosts