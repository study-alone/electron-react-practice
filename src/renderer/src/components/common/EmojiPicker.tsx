import { useTheme } from '@mui/material'
import Picker from '@emoji-mart/react'
import emojiData from '@emoji-mart/data'

type EmojiPickerProps = {
	onSelect(emoji: string): void
	onClickOutside(): void
	autoFocus?: boolean
	open: boolean
}

export const EmojiPicker = ({ onClickOutside, onSelect, open, autoFocus }: EmojiPickerProps) => {
	const { palette } = useTheme()

	const handleEmojiSelect = (emoji: string) => {
		onSelect(emoji)
	}

	const handleClickOutside = () => {
		if (open) {
			onClickOutside()
		}
	}

	return (
		<Picker
			theme={palette.mode}
			data={emojiData}
			onEmojiSelect={handleEmojiSelect}
			autoFocus={autoFocus}
			onClickOutside={handleClickOutside}
			previewPosition="bottom"
		/>
	)
}
