import { Button, IconButton, Menu, MenuItem, Stack } from '@mui/material'
import { DotsThreeVertical } from 'phosphor-react'
import { Fragment, useState } from 'react'
import { Message_options } from 'src/renderer/src/data'

export const MessageOptions = () => {
	const [element, setElement] = useState<HTMLButtonElement | null>(null)
	const [selected, setSelected] = useState<string>()
	const open = Boolean(element)

	const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
		setElement(event.currentTarget)
	}

	const handleClose: React.MouseEventHandler<HTMLButtonElement> = (/** event */) => {
		setElement(null)
	}

	const handleSelect: React.MouseEventHandler<HTMLButtonElement> = (event) => {
		const selected = event.currentTarget.dataset.value
		setSelected(selected)
		handleClose(event)
	}

	return (
		<Fragment>
			<IconButton
				id="basic-button"
				aria-controls={open ? 'message-options' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				disableRipple
				onClick={handleClick}
				sx={{ alignSelf: 'end' }}
			>
				<DotsThreeVertical size={20} />
			</IconButton>
			<Menu
				id="message-options"
				anchorEl={element}
				open={open}
				onClose={handleClose}
				MenuListProps={{ 'aria-labelledby': 'basic-button' }}
			>
				<Stack spacing={1} px={1}>
					{Message_options.map((item) => (
						<MenuItem
							key={`text-message-option-${item.title}`}
							data-value={item.title}
							disabled={item.title === selected}
							component={Button}
							onClick={handleSelect}
						>
							{item.title}
						</MenuItem>
					))}
				</Stack>
			</Menu>
		</Fragment>
	)
}
