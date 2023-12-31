import { Menu, Group, Center, Burger, Container, Text, Drawer, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './../styles/HeaderMenu.module.css';

const links = [
  { link: '/', label: 'Home' },
  {
    link: '/blog',
    label: 'Blog',
  },
  {
    label: 'Projects',
    link: '/projects',
  },
  {
    label: 'GitHub',
    link: 'https://github.com/afroraydude',
  }
];

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    // @ts-ignore
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
      >
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <Text size="xl" fw={700} className={classes.logo}>
            Ray Thomas
          </Text>
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
        <Drawer opened={opened} onClose={toggle} padding="md" size="md">
          <Flex direction="column" gap={10}>
            {items}
          </Flex>
        </Drawer>
      </Container>
    </header>
  );
}