/* utils file - all methods MUST be pure */

type ImageSource = {
  uri: string
};

export const prepareThumbnailSource = (book: Book): ImageSource => {
  if (!book.volumeInfo.imageLinks) return { uri: '' };

  const url = book.volumeInfo.imageLinks.thumbnail;

  const formattedUrl = `https${url.substr(4)}`;

  return { uri: formattedUrl };
};

export const getAuthors = (authors: Array<string>): string => {
  if (authors?.length) {
    return `by ${authors.join(' and ')}`;
  }

  return 'by Nobody (yup seems like nobody wrote this book)';
};

export const getPrice = (book: Book): string => {
  if (book.saleInfo.saleability === 'FOR_SALE') {
    return `$ ${book.saleInfo.listPrice.amount}`;
  }

  return '$ 0.00';
};
