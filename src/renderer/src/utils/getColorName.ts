type ColorHexCode =
	| '#00AB55'
	| '#000000'
	| '#FFFFFF'
	| '#FFC0CB'
	| '#FF4842'
	| '#1890FF'
	| '#94D82D'
	| '#FFC107'

export function getColorName(hex: ColorHexCode) {
	const color = hex

	const colors: Record<ColorHexCode, string> = {
		'#00AB55': 'Green',
		'#000000': 'Black',
		'#FFFFFF': 'White',
		'#FFC0CB': 'Pink',
		'#FF4842': 'Red',
		'#1890FF': 'Blue',
		'#94D82D': 'Greenyellow',
		'#FFC107': 'Orange'
	}

	return colors[hex] || color
}
