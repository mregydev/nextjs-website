import { css } from '../../../styled-system/css';
import HeaderLink from './HeaderLink';

function HeaderComponent() {
  return (
    <header
      className={css({
        height: '50px',
        width: '100%',
        top: 0,
        left: 0,
        bg: 'gray.800',
        display: 'flex',
        alignItems: 'center',
      })}
    >
      <HeaderLink href="/projects"> Projects</HeaderLink>
      <HeaderLink href="/cart"> Cart</HeaderLink>
    </header>
  );
}

export default HeaderComponent;
