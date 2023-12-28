import { css } from '../../styled-system/css';

function Loading() {
  return (
    <div
      className={css({
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      <span className={css({ fontSize: '2xl', color: 'blue.500', fontWeight: 'bold' })}>Loading....</span>
    </div>
  );
}
export default Loading;
