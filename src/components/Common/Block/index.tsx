import { ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { css } from '../../../../styled-system/css';

interface SectionProps {
  children:ReactNode[]
}

function Block({ children }:SectionProps) {
  return (
    <div className={css({ lineHeight: 2, mt: 3, display: 'flex' })}>
      {(children).map((child) => (
        <span key={uuidv4()} className={css({ flex: 1 })}>
          {child}
        </span>
      ))}
    </div>
  );
}

export default Block;
