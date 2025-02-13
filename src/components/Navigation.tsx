
import { Button } from './ui/button';
import { Moon, Sun, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Toggle } from './ui/toggle';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigation = [
  { name: 'nav.about', href: '#about' },
  { name: 'nav.skills', href: '#skills' },
  { name: 'nav.projects', href: '#projects' },
  { name: 'nav.reviews', href: '#reviews' },
  { name: 'nav.contact', href: '#contact' }
];

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }
];

export const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    applyTheme(initialTheme);

    // Check for saved language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const applyTheme = (newTheme: 'light' | 'dark') => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('language', langCode);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b border-border transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between h-16">
          <span className="text-lg font-semibold text-foreground transition-colors w-22">
            Christian RG
          </span>

          <div className="flex items-center gap-4">
            <div className="space-x-8 mr-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {t(item.name)}
                </a>
              ))}
            </div>

            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="w-9 px-0">
                  <Globe className="h-4 w-4" />
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
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Toggle
              pressed={theme === 'dark'}
              onPressedChange={toggleTheme}
              size="sm"
              className="relative inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
            >
              <div className="p-1">
                {theme === 'dark' ? (
                  <Moon className="h-4 w-4 text-primary" />
                ) : (
                  <Sun className="h-4 w-4 text-primary" />
                )}
              </div>
            </Toggle>
            <Button>{t('nav.downloadCV')}</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
