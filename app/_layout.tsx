import { Tabs } from 'expo-router/tabs';

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home', href: '/' }} />
      <Tabs.Screen name="page2" options={{ title: 'Page 2', href: '/page2' }} />
    </Tabs>
  );
}
