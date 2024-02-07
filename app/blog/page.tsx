import { Metadata } from "next";
import Link from "next/link";
import './page.css'
async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  
    return response.json()
}

export const metadata: Metadata = {
    title: 'Blog | NextApp',
}




export default async function Blog() {
    // const posts = await getData();
    const posts = await getData();

    return (
        <>
            <h1>blog page</h1>
            <ul>
                {posts.map((item: any) => (
                    <li key={item.id}>
                        <Link className="link" href={`/blog/${item.id}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>

        </>
    )

}

