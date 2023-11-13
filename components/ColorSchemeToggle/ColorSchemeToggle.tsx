import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun, IconSunMoon } from '@tabler/icons-react';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group justify="center" mt="xl">
      <ActionIcon size={'lg'} variant="light" color="yellow" onClick={() => setColorScheme('light')}><IconSun /></ActionIcon>
      <ActionIcon size={'lg'} variant="light" color="dark" onClick={() => setColorScheme('dark')}><IconMoon /></ActionIcon>
      <ActionIcon size={'lg'} variant="light" color="gray" onClick={() => setColorScheme('auto')}><IconSunMoon /></ActionIcon>
    </Group>
  );
}
