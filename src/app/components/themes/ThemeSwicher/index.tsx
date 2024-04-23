'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HeroSunIcon } from '../SunIcon';
import { HeroMoonIcon } from '../MoonIcon';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (theme === 'light') {
    return (
      <button
        type="button"
        className="inline-flex size-[40px] items-center rounded-full border-2 border-solid p-2"
        onClick={() => setTheme('dark')}
      >
        <HeroMoonIcon />
      </button>
    );
  } else {
    return (
      <button
        type="button"
        className="inline-flex size-[40px] items-center rounded-full border-2 border-solid border-stone-500 p-2"
        onClick={() => setTheme('light')}
      >
        <HeroSunIcon />
      </button>
    );
  }
}
