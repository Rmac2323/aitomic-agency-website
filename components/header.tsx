"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';

const MoonIcon = dynamic(() => import('lucide-react').then((mod) => mod.Moon), { ssr: false });
const SunIcon = dynamic(() => import('lucide-react').then((mod) => mod.Sun), { ssr: false });
const MenuIcon = dynamic(() => import('lucide-react').then((mod) => mod.Menu), { ssr: false });

const Header = () => {
  const { setTheme, theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="bg-background shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            AItomic Agency
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-foreground hover:text-primary">Home</Link>
            <Link href="/services" className="text-foreground hover:text-primary">Services</Link>
            <Link href="/about" className="text-foreground hover:text-primary">About</Link>
            <Link href="/contact" className="text-foreground hover:text-primary">Contact</Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </Button>
            <Button variant="default" asChild>
              <Link href="/book-call">Book a Call</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <MenuIcon />
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background py-2">
          <nav className="flex flex-col space-y-2 px-4">
            <Link href="/" className="text-foreground hover:text-primary">Home</Link>
            <Link href="/services" className="text-foreground hover:text-primary">Services</Link>
            <Link href="/about" className="text-foreground hover:text-primary">About</Link>
            <Link href="/contact" className="text-foreground hover:text-primary">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;