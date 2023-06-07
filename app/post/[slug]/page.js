import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it'

export async function getStaticPaths() {
    // Retrieve all slugs
    const files = fs.readdirSync('posts');
    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        }
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function generateStaticParams() {
    const files = fs.readdirSync('posts');  /// Q: sync?
    const paths = files.map((filename) => {
        slug: filename.replace('.md', '')
    });

    return paths;
}

async function getPost(params) {
    const file = fs.readFileSync(`posts/${params.slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(file);
    return {
        frontmatter,
        content,
    };
}

export default async function Post({ params }) {
    const post = await getPost(params);

    return (
        <div className='prose mx-auto'>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: md().render(post.content) }} />
        </div>
    );
}