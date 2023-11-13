import { remark } from 'remark';
import html from 'remark-html';
import fs from 'fs';
import path from 'path';
import { Container, Title } from '@mantine/core';

export async function getPostBySlug(slug: string) {
  // go to the blog posts directory and get the database file
  // file is /projectpath/blogposts/db.json
  const postsDirectory = path.join(process.cwd(), 'blogposts');

  // read the database file
  const fileContents = fs.readFileSync(path.join(postsDirectory, 'db.json'), 'utf8');
  const db = JSON.parse(fileContents);

  // get the post from the database
  const post = db.posts.find((post: any) => post.slug === slug);

  // now load the file contents for the post
  const fullPath = path.join(postsDirectory, post.filename);

  // read the file contents
  const fileContents2 = fs.readFileSync(fullPath, 'utf8');

  return {
    ...post,
    content: fileContents2
  }
}

export async function getStaticProps({ params }: any) {
  const post = await getPostBySlug(params.post);

  const processedContent = await remark()
    .use(html)
    .process(post.content);

  const contentHtml = processedContent.toString();

  return {
    props: {
      ...post,
      contentHtml
    }
  }
}

export async function getStaticPaths() {
  // go to the blog posts directory and get the database file
  // file is /projectpath/blogposts/db.json
  // go to the blog posts directory and get the database file
  // file is /projectpath/blogposts/db.json
  const postsDirectory = path.join(process.cwd(), 'blogposts');

  // read the database file
  const fileContents = fs.readFileSync(path.join(postsDirectory, 'db.json'), 'utf8');
  const db = JSON.parse(fileContents);

  // the paths are each post slug
  const paths = db.posts.map((post: any) => {
    return {
      params: {
        post: post.slug
      }
    }
  });
  
  return {
    paths,
    fallback: false
  }
}

export default function BlogPost({ name, contentHtml }: any) {
  return (
    <Container>
      <Title order={1}>{name}</Title>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </Container>
  )
}

