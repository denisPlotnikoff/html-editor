export const handleItemDelete = (selection: Range | null): void => {
	if (!selection) return;
	selection.deleteContents();
};

export const handleItemBold = (selection: Range | null): void => {
	if (!selection) return;
  
	const spanElement = document.createElement('span');
	spanElement.style.fontWeight = 'bold';
	spanElement.appendChild(selection.extractContents());
	selection.insertNode(spanElement);
  };
  