'use-client';

import { DesktopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '../@/components/ui/tabs';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; //avoid rehydration errors

  return (
    <Tabs defaultValue={theme} className='text-white z-100 '>
      <TabsList className='border'>
        <TabsTrigger
          value='light'
          onClick={() => {
            console.log('clicked', theme);
            setTheme('light');
          }}
        >
          <SunIcon className='h-[1.2rem] w-[1.2rem]' />
        </TabsTrigger>
        <TabsTrigger value='dark' onClick={() => setTheme('dark')}>
          <MoonIcon className='h-[1.2rem] mx-2 w-[1.2rem] rotate-90 transition-all dark:rotate-0' />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default ThemeSwitcher;
