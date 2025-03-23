import React, { FC } from 'react';

import styles from './styles.module.scss';
type ToolbarProps = {
	top: number;
	left: number;
	children: React.ReactNode;
};

const Toolbar: FC<ToolbarProps> = ({ top, left, children }) => {
	return (
		<div className={styles['toolbar']} style={{ left, top }}>
			{children}
		</div>
	);
};

export default Toolbar;
