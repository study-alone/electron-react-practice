import { Box, Stack } from '@mui/material'
import { Chat_History, type ChatHistoryListItem } from 'src/renderer/src/data'
import { SimpleBarStyle } from '@components/common/Scrollbar'
import { Timeline } from '@components/conversation/Timeline'
import { MediaMessage } from '@components/conversation/MediaMessage'
import { DocumentMessage } from '@components/conversation/DocumentMessage'
import { LinkMessage } from '@components/conversation/LinkMessage'
import { ReplyMessage } from '@components/conversation/ReplyMessage'
import { TextMessage } from '@components/conversation/TextMessage'

type MessageWindowProps = {
	disableOptions?: boolean
}

export const MessageWindow = ({ disableOptions }: MessageWindowProps) => {
	const messageTypeByComponent = (item: ChatHistoryListItem) => {
		const components = {
			img: MediaMessage,
			doc: DocumentMessage,
			link: LinkMessage,
			reply: ReplyMessage,
			text: TextMessage
		}
		const Component = item.type === 'msg' ? components[item.subtype] : Timeline

		return {
			Component,
			props: Object.entries(item).reduce(
				(obj, [key, value]) => {
					if (!['type', 'subtype'].some((item) => item === key)) {
						obj[key as keyof ChatHistoryListItem] = value
					}
					return obj
				},
				{} as typeof item
			)
		}
	}

	return (
		<SimpleBarStyle sx={{ height: '100%' }}>
			<Box p={3}>
				<Stack spacing={3}>
					{Chat_History.map((item, index) => {
						const { Component, props } = messageTypeByComponent(item)

						return (
							<Component
								key={`chat-history-for-message-type-${index}`}
								{...props}
								disableOptions={disableOptions}
							/>
						)
					})}
				</Stack>
			</Box>
		</SimpleBarStyle>
	)
}
