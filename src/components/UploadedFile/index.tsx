import { FC, useRef } from 'react';

import IconPlus from '../ui/icons/iconPlus';
import styles from './styles.module.scss';

type UploadedFileProps = {
	onFileUpload: (fileContent: string) => void;
	title?: string;
};

const UploadedFile: FC<UploadedFileProps> = ({ title = 'Загрузить документ', onFileUpload }) => {
	const inputFileRef = useRef<HTMLInputElement | null>(null);

	const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onload = (e: ProgressEvent<FileReader>) => {
			if (e.target?.result) {
				onFileUpload(e.target.result as string);
			}
		};
		reader.readAsText(file);
	};

	const handleClick = () => inputFileRef.current?.click();

	return (
		<div className={styles['uploadedFile']} onClick={handleClick}>
			<IconPlus width={81} height={81} className={styles['uploadedFile__icon']} />
			<span className={styles['uploadedFile__title']}>{title}</span>
			<input
				type="file"
				accept=".html"
				onChange={handleFileUpload}
				ref={inputFileRef}
				hidden
			/>
		</div>
	);
};
export default UploadedFile;
