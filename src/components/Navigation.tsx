import { Button } from './ui/button';
import { Moon, Sun, Globe } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';
import { Toggle } from './ui/toggle';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import debounce from 'lodash/debounce';
import {
  type NavigationItem,
  type LanguageOption,
  type ThemeType
} from '@/types';

const navigation: readonly NavigationItem[] = [
  { name: 'nav.about', href: '#about', sectionId: 'about' },
  { name: 'nav.skills', href: '#skills', sectionId: 'skills' },
  { name: 'nav.projects', href: '#projects', sectionId: 'projects' },
  { name: 'nav.reviews', href: '#reviews', sectionId: 'reviews' },
  { name: 'nav.contact', href: '#contact', sectionId: 'contact' }
] as const;

const languages: readonly LanguageOption[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }
] as const;

export const Navigation = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState<ThemeType>('light');
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect((): void => {
    const savedTheme = localStorage.getItem('theme') as ThemeType | null;
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const initialTheme: ThemeType =
      savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    applyTheme(initialTheme);

    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      void i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const applyTheme = (newTheme: ThemeType): void => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleTheme = (): void => {
    const newTheme: ThemeType = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  const changeLanguage = (langCode: string): void => {
    void i18n.changeLanguage(langCode);
    localStorage.setItem('language', langCode);
  };

  const handleScroll = useCallback(
    debounce((): void => {
      const sections = navigation.map((nav) =>
        document.getElementById(nav.sectionId)
      );
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(navigation[i].sectionId);
            break;
          }
        }
      }
    }, 100),
    []
  );

  useEffect((): (() => void) => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return (): void => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ): void => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b border-border transition-colors duration-300"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-3">
        <div className="flex items-center justify-between h-16">
          <span className="text-lg font-semibold text-foreground transition-colors">
            Christian RG
          </span>

          <div className="flex items-center gap-4">
            <ul className="space-x-8 mr-6 list-none flex">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`text-sm font-medium transition-colors relative ${
                      activeSection === item.sectionId
                        ? 'text-primary'
                        : 'text-foreground/80 hover:text-primary'
                    } after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:bottom-[-4px] after:transition-transform after:duration-300 after:scale-x-0 ${
                      activeSection === item.sectionId
                        ? 'after:scale-x-100'
                        : ''
                    }`}
                  >
                    {t(item.name)}
                  </a>
                </li>
              ))}
            </ul>

            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-9 px-0"
                  aria-label="Change language"
                >
                  <Globe className="h-4 w-4" aria-hidden="true" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-background/95 backdrop-blur-sm"
                sideOffset={8}
              >
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className="cursor-pointer"
                  >
                    <span className="mr-2" aria-hidden="true">
                      {lang.flag}
                    </span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Toggle
              pressed={theme === 'dark'}
              onPressedChange={toggleTheme}
              className="relative inline-flex h-7 w-[52px] shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-muted transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-zinc-800 data-[state=unchecked]:bg-zinc-200"
              aria-label="Toggle theme"
            >
              <span
                className={`${
                  theme === 'dark' ? 'translate-x-0' : 'translate-x-[26px]'
                } pointer-events-none flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-lg ring-0 transition-transform duration-200 ease-in-out`}
              >
                {theme === 'dark' ? (
                  <Moon
                    className="h-3.5 w-3.5 text-zinc-800"
                    aria-hidden="true"
                  />
                ) : (
                  <Sun
                    className="h-3.5 w-3.5 text-orange-500"
                    aria-hidden="true"
                  />
                )}
              </span>
            </Toggle>
            <Button type="button">{t('nav.downloadCV')}</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
