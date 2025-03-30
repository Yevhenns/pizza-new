import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/helpers/combineClasses';

import { Logo } from '@/components/shared/Logo/Logo';

import css from './Navigation.module.scss';

type NavigationProps = {
  closeDrawer: () => void;
};

export function Navigation({ closeDrawer }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={css.nav}>
      <hr />
      <Link
        onClick={closeDrawer}
        className={cn(
          css.link,
          pathname === '/' && css.active,
          css.hideOnMobile
        )}
        href={'/'}
      >
        Головна
      </Link>
      <Link
        onClick={closeDrawer}
        className={cn(css.link, pathname === '/pizzas' && css.active)}
        href={'/pizzas'}
      >
        Піца
      </Link>
      <Link
        onClick={closeDrawer}
        className={cn(css.link, pathname === '/appetizers' && css.active)}
        href={'/appetizers'}
      >
        Закуски
      </Link>
      <Link
        onClick={closeDrawer}
        className={cn(css.link, pathname === '/drinks' && css.active)}
        href={'/drinks'}
      >
        Напої
      </Link>
      <Link
        onClick={closeDrawer}
        className={cn(css.link, pathname === '/sushi' && css.active)}
        href={'/sushi'}
      >
        Суші
      </Link>
    </nav>
  );
}
