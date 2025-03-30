import { Metadata } from 'next';

import Login from '@/components/Login/Login';
import { SectionContainer } from '@/components/shared/SectionContainer/SectionContainer';

import css from './page.module.scss';

export const metadata: Metadata = {
  title: 'Nostra Pizza | Логін',
};

export default async function LoginPage() {
  return (
    <div className={css.page}>
      <SectionContainer>
        <Login />
      </SectionContainer>
    </div>
  );
}
