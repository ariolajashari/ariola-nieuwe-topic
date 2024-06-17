// src/app/page.js
import Link from 'next/link';
import posts from '../../data/posts.json';

export default function Home() {
  return (
      <div>
        <h1>Blog</h1>
        <ul>
          {posts.map((post) => (
              <li key={post.id}>
                <Link href={`/posts/${post.id}`}>
                  {post.title}
                </Link>
              </li>
          ))}
        </ul>
      </div>
  );
}
