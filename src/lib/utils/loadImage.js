export function loadImage(src) {
	return new Promise((resolve, reject) => {
		const img = new Image()
		img.onload = () => resolve(img)
		img.onerror = () =>
			reject(new Error(`Fehler beim Laden des Bildes: ${src}`))
		img.src = src
	})
}
export default loadImage
