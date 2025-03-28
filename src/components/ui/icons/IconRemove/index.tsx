import { IconSvg } from '@types';
import { FC } from 'react';

const IconRemove: FC<IconSvg> = ({ ...rest }) => {
	return (
		<>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384" {...rest}>
				<path d="M64 341.333C64 364.907 83.093 384 106.667 384h170.667C300.907 384 320 364.907 320 341.333v-256H64v256zm202.667-320L245.333 0H138.667l-21.334 21.333H42.667V64h298.666V21.333z" />
			</svg>
		</>
	);
};

export default IconRemove;
