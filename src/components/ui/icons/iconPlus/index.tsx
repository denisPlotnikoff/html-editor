import { IconSvg } from '@types';
import { FC } from 'react';

const IconPlus: FC<IconSvg> = ({ ...rest }) => {
	return (
		<>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 81" {...rest}>
				<path
					fill="none"
					fillRule="evenodd"
					stroke="#DEDEDE"
					d="M47.29.5H33.71v33.21H.5v13.58h33.21V80.5h13.58V47.29H80.5V33.71H47.29V.5z"
				></path>
			</svg>
		</>
	);
};

export default IconPlus;
