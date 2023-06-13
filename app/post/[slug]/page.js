import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it'

export const dynamicParams = false;

export async function generateStaticParams() {
    const filenames = fs.readdirSync('posts');
    const paths = filenames.map((filename) => ({
        slug: filename.replace('.md', '')
    }));

    return paths;
}

async function preparePost(slug) {    // separate frontmatter from main content
    const file = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(file);
    return {
        frontmatter,
        content,
    };
}

export default async function Post({ params }) {
    const post = await preparePost(params.slug);

    return (
        <div className='prose mx-auto'>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: md().render(post.content) }} />
        </div>
    );
}