import parseDOM from './parse-dom'

/*
 * Retrieves image URL from collection of data transfer
 * items, if one is present.  As the item will contain
 * an HTML string containing an img element, it's
 * necessary to parse the HTML and then pull the src
 * attribute off the image.
 */
const retrieveImageURL = (dataTransferItems: any, callback: Function) => {
  for (let i = 0; i < dataTransferItems.length; i++) {
    let item = dataTransferItems[i]

    if (item.type === 'text/html') {
      item.getAsString((value: string) => {
        const doc = parseDOM(value)
        if(doc != null){
          const img = doc.querySelector('img')
          if (img && img.src) {
            callback(img.src)
          }
        }
      })
      break
    }
  }
}

export default retrieveImageURL