import { FC, useEffect, useRef, useState } from 'react';

import IconBold from '@components/ui/icons/IconBold';
import Toolbar from '@components/Toolbar';
import Button from '@components/ui/Button';
import Iframe, { IframeRef } from '@components/ui/Iframe';
import { handleItemBold, handleItemDelete } from '@helpers';

import IconRemove from '@components/ui/icons/IconRemove';
import styles from './styles.module.scss';

type EditorProps = {
	documentItem: string;
};

const Editor: FC<EditorProps> = ({ documentItem }) => {
	const iframeRef = useRef<IframeRef | null>(null);
	const [selectionRange, setSelectionRange] = useState<Range | null>(null);
	const [toolbarPosition, setToolbarPosition] = useState<{
		x: number;
		y: number;
	} | null>(null);
	const [isEditing, setIsEditing] = useState<boolean>(false);

	const handleSelection = () => {
		const iframeDocument = iframeRef.current?.getDocument();
		if (!iframeDocument) return;

		const selection = iframeDocument.getSelection();
		if (selection && selection.rangeCount > 0) {
			const range = selection.getRangeAt(0);
			if (!range.collapsed) {
				setSelectionRange(range);
				const rect = range.getBoundingClientRect();
				setToolbarPosition({
					x: rect.left + window.scrollX,
					y: rect.top + window.scrollY - 20,
				});
			} else {
				toolbarHidden();
			}
		}
	};

	const toolbarHidden = () => {
		setSelectionRange(null);
		setToolbarPosition(null);
	};

	const enableEditing = () => {
		if (iframeRef.current) {
			iframeRef.current.enableEditing();
			setIsEditing((prev) => !prev);
		}
	};

	const handleIframeLoad = () => {
		const iframeDocument = iframeRef.current?.getDocument();
		iframeDocument?.addEventListener('mouseup', handleSelection);
	};

	useEffect(() => {
		return () => {
			const iframeDocument = iframeRef.current?.getDocument();
			iframeDocument?.removeEventListener('mouseup', handleSelection);
		};
	}, []);

	return (
		<div className={styles['editor']}>
			<Button onClick={enableEditing} text={isEditing ? 'Отменить' : 'Редактировать'} />
			<Iframe
				ref={iframeRef}
				srcDoc={documentItem}
				onLoad={handleIframeLoad}
				isEditing={isEditing}
				contentEditable={isEditing}
			/>
			{toolbarPosition && isEditing && (
				<Toolbar top={toolbarPosition.y} left={toolbarPosition.x}>
					<Button
						onClick={() => {
							toolbarHidden();
							handleItemBold(selectionRange);
						}}
						className="icon"
					>
						<IconBold width={20} height={20} />
					</Button>

					<Button
						onClick={() => {
							toolbarHidden();
							handleItemDelete(selectionRange);
						}}
						className="icon"
					>
						<IconRemove width={20} height={20} />
					</Button>
				</Toolbar>
			)}
		</div>
	);
};

export default Editor;
