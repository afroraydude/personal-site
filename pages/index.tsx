import { Container, Title, Text, Avatar, Flex, Anchor } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import styles from '../styles/Home.module.css';

const links = [
  {
    title: 'Non-GMU Website',
    url: 'https://raythomas.dev',
  },
  {
    title: 'GitHub',
    url: 'https://github.com/afroraydude',
  },
  {
    title: 'Development Blog',
    url: 'https://afroraydude.com',
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
          gradient={{ from: 'rgba(0, 132, 255, 1)', to: 'green', deg: 90 }}
        >
          {' '}
          I Am Ray Thomas
        </Text>
        <Text className={styles.description}>
          I am a full time student at George Mason University studying Computer Science. I like experimenting with
          various software and hardware projects. I also like to play video games and watch anime. I am currently
          working on a few projects, including a few video games and some web applications.
        </Text>
      </Flex>
      <Flex align={'center'} justify={'center'} direction={'row'} wrap={'wrap'} mt={50}>
        {links.map((link) => (
          <Anchor href={link.url} target="_blank" key={link.url} style={{ margin: 10 }}>
            <Title order={3}>{link.title}</Title>
          </Anchor>
        ))}
      </Flex>
      <ColorSchemeToggle />
    </Container>
  );
}
