import { css } from '../../../styled-system/css';

const FooterComponent = () => {
  return (
    <footer
      className={css({
        color: 'blackalpha.600',
        bg: 'gray.200',
        fontWeight: 'bold',
        width: '100%',
        padding: 1,
        textAlign: 'center',
        bottom: 0,
      })}
    >
      Made with Chakra UI @2023
    </footer>
  );
};

export default FooterComponent;
