import { Container, Title, Text, Avatar, Flex, Anchor } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import styles from '../styles/Home.module.css';

const links = [
  {
    title: 'GitHub',
    url: 'https://github.com/afroraydude',
  },
  {
    title: 'Projects',
    url: '/projects',
  },
  {
    title: 'Blog',
    url: '/blog',
  },
];

export default function HomePage() {
  return (
    <Container mt={50}>
      <Flex align={'center'} justify={'center'} direction={'column'}>
        <Avatar size={250} src={'https://github.com/afroraydude.png'} alt="Ray Thomas" />
        <Text
          className={styles.title}
          variant="gradient"
          gradient={{ from: 'violet', to: 'cyan', deg: 90 }}
        >
          {' '}
          I Am Ray Thomas
        </Text>
        <Text className={styles.description}>
          Full Stack Software Engineer, Game Developer, and Student
        </Text>
        <Text>
          React, Next.js, TypeScript, Node.js, MongoDB, PostgreSQL, Rust, C#, C++, Unity, Unreal
        </Text>
      </Flex>
      <Flex align={'center'} justify={'center'} direction={'row'} wrap={'wrap'} mt={50}>
        {links.map((link) => (
          <Anchor href={link.url} target="_blank" key={link.url} style={{ margin: 10 }}>
            <Title order={3}>{link.title}</Title>
          </Anchor>
        ))}
      </Flex>
      {
        //<ColorSchemeToggle />
      }
    </Container>
  );
}
