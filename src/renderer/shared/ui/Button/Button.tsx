import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import './Button.css';

interface IButtonProps extends PropsWithChildren {
  type?: 'main' | 'function' | 'operation' | 'zero';
}

export function Button(props: IButtonProps) {
  const { type = 'main', children, style } = props;

  const classNames = clsx('Button', {
    'Button--function': type === 'function',
    'Button--operator': type === 'operation',
    'Button--zero': type === 'zero',
  });

  return (
    <button style={style} className={classNames} type="button">
      <span>{children}</span>
    </button>
  );
}
