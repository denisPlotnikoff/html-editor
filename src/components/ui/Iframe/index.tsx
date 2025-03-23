import { forwardRef, IframeHTMLAttributes, useImperativeHandle, useRef } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
type IFrameProps = IframeHTMLAttributes<HTMLIFrameElement> & {
	isEditing: boolean;
};

export type IframeRef = {
	enableEditing: () => void;
	getDocument: () => Document | null;
};

const Iframe = forwardRef<IframeRef, IFrameProps>(({ isEditing, ...rest }, ref) => {
	const iframeRef = useRef<HTMLIFrameElement | null>(null);
	useImperativeHandle(ref, () => ({
		enableEditing: () => {
			const iframeDocument = iframeRef.current?.contentDocument;
			if (iframeDocument) {
				iframeDocument.body.contentEditable = !isEditing ? 'true' : 'false';
				iframeDocument.body.focus();
			}
		},
		getDocument: () => iframeRef.current?.contentDocument || null,
	}));

	return (
		<iframe
			ref={iframeRef}
			className={classNames(styles['iframe'], !isEditing && styles['iframe__none'])}
			{...rest}
		/>
	);
});

export default Iframe;
