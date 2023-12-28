import { ReactNode } from 'react';
import Link from 'next/link';
import { css } from '../../../styled-system/css';

interface HeaderLinkProps {
  children: ReactNode;
  href: string;
}

function HeaderLink({ children, href }: HeaderLinkProps) {
  return (
    <Link href={href}>
      <div
        className={css({
          textDecoration: 'none',
          fontWeight: 'bold',
          color: 'white',
          padding: 4,
          cursor: 'pointer',
          _hover: {
            bg: 'gray.100',
            border: 2,
            borderColor: 'white',
            color: 'gray.600',
          },
        })}
      >
        {children}
      </div>
    </Link>
  );
}

export default HeaderLink;
