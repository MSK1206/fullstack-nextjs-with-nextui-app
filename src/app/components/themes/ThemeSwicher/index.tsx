'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import SunIcon from '../SunIcon';
import MoonIcon from '../MoonIcon';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {theme === 'light' ? (
        <button onClick={() => setTheme('dark')}>
          <MoonIcon />
        </button>
      ) : (
        <button onClick={() => setTheme('light')}>
          <SunIcon />
        </button>
      )}
    </div>
  );
}
