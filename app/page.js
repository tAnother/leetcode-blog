import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';


async function getData() {  /// seems like there's no need for async here
  // Get all posts
  const filenames = fs.readdirSync('posts');
  const posts = filenames.map((filename) => {
    const slug = filename.replace('.md', '');
    const file = fs.readFileSync(`posts/${filename}`, 'utf-8');
    const { data: frontmatter } = matter(file);
    return {
      slug,
      frontmatter,
    };
  });

  return posts;
}


export default async function Home() {
  const posts = await getData();

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
      {posts?.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col'
        >
          <Link href={`/post/${slug}`}>
              <Image
                width={650}
                height={340}
                alt={frontmatter.title}
                src={frontmatter.socialImage} // notice the default root for src is `public/`
                style={{objectFit: 'contain'}}  /// TODO: resize img
              />
              <h1 className='p-4'>{frontmatter.title}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
}