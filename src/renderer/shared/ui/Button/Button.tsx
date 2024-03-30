import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import './Button.css';

interface IButtonProps extends PropsWithChildren {
  // eslint-disable-next-line react/require-default-props
  type?: 'main' | 'function' | 'operation' | 'additional' | 'zero';
  // eslint-disable-next-line react/require-default-props
  onClick?: () => void;
  // eslint-disable-next-line react/require-default-props
  style?: React.CSSProperties;
}

export function Button(props: IButtonProps) {
  const { type = 'main', children, style, onClick } = props;

  const classNames = clsx('Button', {
    'Button--function': type === 'function',
    'Button--operator': type === 'operation',
    'Button--additional': type === 'additional',
    'Button--zero': type === 'zero',
  });

  return (
    <button
      style={style}
      className={classNames}
      type="button"
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
}
