/* utils file - all methods MUST be pure */

type ImageSource = {
  uri: string
}

export const prepareThumbnailSource = (book: Book): ImageSource => {
  const url = book.volumeInfo.imageLinks.thumbnail
  const formattedUrl = `https${url.substr(4)}`

  return { uri: formattedUrl }
}