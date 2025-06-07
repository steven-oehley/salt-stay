'use client';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { LucideMoonStar, LucideSun } from 'lucide-react';

import { Button } from '@/components/ui/button';

const DarkMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Ensure component is mounted before rendering to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return (
      <Button size='icon' variant='ghost'>
        <LucideSun className='h-[1.2rem] w-[1.2rem]' />
        <span className='sr-only'>Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      className='relative cursor-pointer'
      size='icon'
      variant='ghost'
      onClick={handleThemeToggle}
    >
      {/* Sun icon - visible in light mode */}
      <LucideSun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />

      {/* Moon icon - visible in dark mode */}
      <LucideMoonStar className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />

      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
};

export default DarkMode;
