import React, { useState } from 'react';
import Editor from '@components/Editor';
import UploadedFile from '@components/UploadedFile';
import { DocumentState } from './types/document';

import './styles/globals.scss';

const App: React.FC = () => {
	const [document, setDocument] = useState<DocumentState>({
		isUploadedFile: false,
		documentFile: '',
	});

	const handleFileUpload = (fileContent: string) => {
		setDocument({
			isUploadedFile: true,
			documentFile: fileContent,
		});
	};

	return (
		<>
			{!document.isUploadedFile ? (
				<UploadedFile onFileUpload={handleFileUpload} />
			) : (
				<Editor documentItem={document.documentFile} />
			)}
		</>
	);
};

export default App;
