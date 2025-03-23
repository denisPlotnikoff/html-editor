import { FC, ButtonHTMLAttributes } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	text?: string;
	children?: React.ReactNode;
};

const Button: FC<TButtonProps> = ({ type = 'button', className, text, children, ...rest }) => {
	return (
		<>
			<button
				{...{ type, ...rest }}
				className={classNames(styles['btn'], className && styles[`btn--${className}`])}
			>
				{text}
				{children && children}
			</button>
		</>
	);
};
export default Button;
