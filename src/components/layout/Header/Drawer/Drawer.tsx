import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { cn } from '@/helpers/combineClasses';

import { Icon } from '@/components/shared/Icon/Icon';
import { Logo } from '@/components/shared/Logo/Logo';
import { RoundButton } from '@/components/shared/RoundButton/RoundButton';

import css from './Drawer.module.scss';

type DrawerProps = {
  children: ReactNode;
  closeDrawer: () => void;
  appear?: 'left' | 'right';
  title: string;
};

export function Drawer({
  children,
  closeDrawer,
  appear = 'left',
  title,
}: DrawerProps) {
  return (
    <>
      <div className={cn(css.drawer, appear === 'right' ? css.right : '')}>
        <div className={css.titleWrapper}>
          <p>{title}</p>
          <RoundButton onClick={closeDrawer}>
            <Icon svg="close" color="black" iconWidth={24} iconHeight={24} />
          </RoundButton>
        </div>
        {children}
        <div className={css.logoWrapper}>
          <Logo isLight={false} />
        </div>
      </div>
    </>
  );
}
