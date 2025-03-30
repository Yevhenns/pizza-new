import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { cn } from '@/helpers/combineClasses';

import { Icon } from '@/components/shared/Icon/Icon';
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
      {createPortal(
        <div className={cn(css.drawer, appear === 'right' ? css.right : '')}>
          <p>{title}</p>
          <RoundButton onClick={closeDrawer}>
            <Icon svg="close" color="black" iconWidth={24} iconHeight={24} />
          </RoundButton>
          {children}
        </div>,
        document.body
      )}
    </>
  );
}
