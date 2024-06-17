// src/app/posts/[id]/page.js
import { notFound } from 'next/navigation';
import posts from '../../../../data/posts.json';

export async function generateStaticParams() {
    return posts.map((post) => ({
        id: post.id,
    }));
}

export async function generateMetadata({ params }) {
    const post = posts.find((post) => post.id === params.id);
    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: post.title,
        revalidate: 10,
    };
}

export default function PostPage({ params }) {
    const post = posts.find((post) => post.id === params.id);

    if (!post) {
        notFound();
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}
