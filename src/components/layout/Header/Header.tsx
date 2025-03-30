'use client';

import { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/helpers/combineClasses';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import { getUserInfo } from '@/store/auth/authSlice';
import { getCartItems } from '@/store/cart/cartSlice';
import { useAppSelector } from '@/store/hooks';
import { getFavorites } from '@/store/products/productsSlice';

import { Container } from '@/components/shared/Container/Container';
import { Icon } from '@/components/shared/Icon/Icon';
import { Logo } from '@/components/shared/Logo/Logo';
import { RoundButton } from '@/components/shared/RoundButton/RoundButton';

import { PhoneNumbersSet } from '../PhoneNumbersSet/PhoneNumbersSet';
import { Avatar } from './Avatar/Avatar';
import { Drawer } from './Drawer/Drawer';
import css from './Header.module.scss';
import { Navigation } from './Navigation/Navigation';

export function Header() {
  const [showDrawer, setShowDrawer] = useState<null | 'menu' | 'basket'>(null);

  const pathname = usePathname();

  const cartLength = useAppSelector(getCartItems).length;
  const favoriteLength = useAppSelector(getFavorites).length;
  const userInfo = useAppSelector(getUserInfo);

  const width = useWindowWidth();

  const isUserAdmin = () => {
    return userInfo?.role === 'Admin' || userInfo?.role === 'Viewer';
  };

  const showMenu = () => {
    setShowDrawer('menu');
  };

  const closeDrawer = () => {
    setShowDrawer(null);
  };

  return (
    <header className={css.header}>
      <Container>
        <div className={css.headerItem}>
          <RoundButton onClick={showMenu}>
            <Icon svg="burger" iconWidth={40} iconHeight={40} color="main" />
          </RoundButton>
          {showDrawer === 'menu' && (
            <Drawer title="Меню" closeDrawer={closeDrawer}>
              <Navigation closeDrawer={closeDrawer} />
            </Drawer>
          )}
          <Logo />
          <div className={css.headerLinks}>
            <div className={css.phoneNumberSet}>
              <PhoneNumbersSet />
            </div>
            <Link
              className={cn(
                css.navLink,
                pathname === '/login' ? css.active : ''
              )}
              href={'/login'}
              aria-label="login page"
            >
              {userInfo !== null ? (
                <Avatar />
              ) : (
                <Icon svg="user" iconWidth={34} iconHeight={34} />
              )}
            </Link>
            <Link
              className={cn(
                css.navLink,
                pathname === '/favorite' ? css.active : ''
              )}
              href={'/favorite'}
              aria-label="favorite page"
            >
              <Icon svg="heart" iconWidth={34} iconHeight={34} />
              {favoriteLength !== 0 && <span>{favoriteLength}</span>}
            </Link>
            <Link
              className={cn(
                css.navLink,
                pathname === '/cart' ? css.active : ''
              )}
              href={'/cart'}
              aria-label="cart page"
            >
              <Icon svg="basket" iconWidth={34} iconHeight={34} />
              {cartLength !== 0 && <span>{cartLength}</span>}
            </Link>
            {isUserAdmin() && width > 768 && (
              <Link
                className={cn(
                  css.navLink,
                  pathname === '/admin' ? css.active : ''
                )}
                href={'/admin'}
                aria-label="admin page"
              >
                <Icon svg="settings" iconWidth={34} iconHeight={34} />
              </Link>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}
