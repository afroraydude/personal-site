import { Container, Title, Text, Timeline, Anchor } from "@mantine/core";
//import fs from 'fs';
import path from 'path';
import fs from 'fs';
import classes from './../../styles/Blog.module.css';

export async function getPosts() {
  // go to the blog posts directory and get the database file
  // file is /projectpath/blogposts/db.json
  const postsDirectory = path.join(process.cwd(), 'blogposts');

  // read the database file
  const fileContents = fs.readFileSync(path.join(postsDirectory, 'db.json'), 'utf8');
  const db = JSON.parse(fileContents);

  return db;
}

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
    }
  }
}

export default function Blog({ posts }: any) {
  return (
    <Container>
      <Title order={1}>Blog</Title>
      <Timeline mt={32}>
        {
          posts.posts.map((post: any) => {
            return (
              <Timeline.Item
                key={post.slug}
                title={new Date(post.date).toLocaleDateString()}
                color="blue"
                style={{ marginBottom: 20 }}
                className={classes.hoverclick}
                onClick={() => {
                  window.location.href = `/blog/${post.slug}`;
                }}
              >
                <Text component="a" href={`/blog/${post.slug}`}>{post.name}</Text>
              </Timeline.Item>
            )
          })
        }
      </Timeline>
    </Container>
  )
}