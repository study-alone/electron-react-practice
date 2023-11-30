import { faker } from '@faker-js/faker'
import { ChatCircleDots, Gear, GearSix, Phone, SignOut, User, Users } from 'phosphor-react'

type ChatHistoryForDividerType = {
	type: 'divider'
	subtype: 'divider'
	text: string
}

type ChatHistoryTypeDefaultProps = {
	message: string
	incoming: boolean
	outgoing: boolean
}

interface ChatHistoryForTextType extends ChatHistoryTypeDefaultProps {
	type: 'msg'
	subtype: 'text'
}
interface ChatHistoryForDocumentType extends ChatHistoryTypeDefaultProps {
	type: 'msg'
	subtype: 'doc'
}

interface ChatHistoryForImageType extends ChatHistoryTypeDefaultProps {
	type: 'msg'
	subtype: 'img'
	img: string
}
interface ChatHistoryForLinkType extends ChatHistoryTypeDefaultProps {
	type: 'msg'
	subtype: 'link'
	preview: string
}
interface ChatHistoryForReplyType extends ChatHistoryTypeDefaultProps {
	type: 'msg'
	subtype: 'reply'
	reply: string
}

export type ChatHistoryListItem =
	| ChatHistoryForTextType
	| ChatHistoryForReplyType
	| ChatHistoryForDocumentType
	| ChatHistoryForImageType
	| ChatHistoryForLinkType
	| ChatHistoryForDividerType

const Profile_Menu = [
	{
		id: 'profile',
		title: 'Profile',
		Icon: User,
		path: '/app/profile'
	},
	{
		id: 'settings',
		title: 'Settings',
		Icon: Gear,
		path: '/app/settings'
	},
	{
		id: 'signout',
		title: 'Sign Out',
		Icon: SignOut
	}
]

const Nav_Buttons = [
	{
		index: 0,
		Icon: ChatCircleDots,
		path: '/app/chat'
	},
	{
		index: 1,
		Icon: Users,
		path: '/app/group'
	},
	{
		index: 2,
		Icon: Phone,
		path: '/app/call'
	}
]

const Nav_Setting = [
	{
		index: 3,
		Icon: GearSix
	}
]

export const membersList = [
	{
		id: 0,
		name: faker.person.firstName(),
		img: faker.image.avatar()
	},
	{
		id: 1,
		name: faker.person.firstName(),
		img: faker.image.avatar()
	},
	{
		id: 2,
		name: faker.person.firstName(),
		img: faker.image.avatar()
	},
	{
		id: 3,
		name: faker.person.firstName(),
		img: faker.image.avatar()
	},
	{
		id: 4,
		name: faker.person.firstName(),
		img: faker.image.avatar()
	}
]

export const CallList = [
	{
		id: 0,
		img: faker.image.avatar(),
		name: faker.person.firstName(),
		missed: false,
		incoming: false
	},
	{
		id: 1,
		img: faker.image.avatar(),
		name: faker.person.firstName(),
		missed: true,
		incoming: true
	},
	{
		id: 2,
		img: faker.image.avatar(),
		name: faker.person.firstName(),
		missed: false,
		incoming: true
	},
	{
		id: 3,
		img: faker.image.avatar(),
		name: faker.person.firstName(),
		missed: false,
		incoming: true
	},
	{
		id: 4,
		img: faker.image.avatar(),
		name: faker.person.firstName(),
		missed: false,
		incoming: true
	},
	{
		id: 5,
		img: faker.image.avatar(),
		name: faker.person.firstName(),
		missed: false,
		incoming: true
	}
]

export const chatList = [
	{
		id: 0,
		img: faker.image.avatar(),
		name: faker.person.firstName(),
		msg: faker.music.songName(),
		time: '9:36',
		unread: 0,
		pinned: true,
		online: true
	},
	{
		id: 1,
		img: faker.image.avatar(),
		name: faker.person.firstName(),
		msg: faker.music.songName(),
		time: '12:02',
		unread: 2,
		pinned: true,
		online: false
	},
	{
		id: 2,
		img: faker.image.avatar(),
		name: faker.person.firstName(),
		msg: faker.music.songName(),
		time: '10:35',
		unread: 3,
		pinned: false,
		online: true
	},
	{
		id: 3,
		img: faker.image.avatar(),
		name: faker.person.firstName(),
		msg: faker.music.songName(),
		time: '04:00',
		unread: 0,
		pinned: false,
		online: true
	},
	{
		id: 4,
		img: faker.image.avatar(),
		name: faker.person.firstName(),
		msg: faker.music.songName(),
		time: '08:42',
		unread: 0,
		pinned: false,
		online: false
	},
	{
		id: 5,
		img: faker.image.avatar(),
		name: faker.person.firstName(),
		msg: faker.music.songName(),
		time: '08:42',
		unread: 0,
		pinned: false,
		online: false
	},
	{
		id: 6,
		img: faker.image.avatar(),
		name: faker.person.firstName(),
		msg: faker.music.songName(),
		time: '08:42',
		unread: 0,
		pinned: false,
		online: false
	},
	{
		id: 7,
		img: faker.image.avatar(),
		name: faker.person.firstName(),
		msg: faker.music.songName(),
		time: '08:42',
		unread: 0,
		pinned: false,
		online: false
	}
]

const Chat_History: ChatHistoryListItem[] = [
	{
		type: 'msg',
		subtype: 'text',
		message: 'Hi 👋🏻, How are ya ?',
		incoming: true,
		outgoing: false
	},
	{
		type: 'divider',
		subtype: 'divider',
		text: 'Today'
	},
	{
		type: 'msg',
		subtype: 'text',
		message: 'Hi 👋 Panda, not bad, u ?',
		incoming: false,
		outgoing: true
	},
	{
		type: 'msg',
		subtype: 'text',
		message: 'Can you send me an abstarct image?',
		incoming: false,
		outgoing: true
	},
	{
		type: 'msg',
		subtype: 'text',
		message: 'Ya sure, sending you a pic',
		incoming: true,
		outgoing: false
	},

	{
		type: 'msg',
		subtype: 'img',
		message: 'Here You Go',
		img: faker.image.urlLoremFlickr({ category: 'abstract' }),
		incoming: true,
		outgoing: false
	},
	{
		type: 'msg',
		subtype: 'text',
		message: 'Can you please send this in file format?',
		incoming: false,
		outgoing: true
	},
	{
		type: 'msg',
		subtype: 'doc',
		message: 'Yes sure, here you go.',
		incoming: true,
		outgoing: false
	},
	{
		type: 'msg',
		subtype: 'link',
		preview: faker.image.urlLoremFlickr({ category: 'cats' }),
		message: 'Yep, I can also do that',
		incoming: true,
		outgoing: false
	},
	{
		type: 'msg',
		subtype: 'reply',
		reply: 'This is a reply',
		message: 'Yep, I can also do that',
		incoming: false,
		outgoing: true
	}
]

const Message_options = [
	{
		title: 'Reply'
	},
	{
		title: 'React to message'
	},
	{
		title: 'Forward message'
	},
	{
		title: 'Star message'
	},
	{
		title: 'Report'
	},
	{
		title: 'Delete Message'
	}
]

const SHARED_LINKS: ChatHistoryListItem[] = [
	{
		type: 'msg',
		subtype: 'link',
		preview: faker.image.urlLoremFlickr({ category: 'cats' }),
		message: 'Yep, Ican also do that',
		incoming: true,
		outgoing: false
	},
	{
		type: 'msg',
		subtype: 'link',
		preview: faker.image.urlLoremFlickr({ category: 'cats' }),
		message: 'Yep, Ican also do that',
		incoming: true,
		outgoing: false
	},
	{
		type: 'msg',
		subtype: 'link',
		preview: faker.image.urlLoremFlickr({ category: 'cats' }),
		message: 'Yep, Ican also do that',
		incoming: true,
		outgoing: false
	},
	{
		type: 'msg',
		subtype: 'link',
		preview: faker.image.urlLoremFlickr({ category: 'cats' }),
		message: 'Yep, Ican also do that',
		incoming: true,
		outgoing: false
	}
]
const SHARED_DOCS: ChatHistoryListItem[] = [
	{
		type: 'msg',
		subtype: 'doc',
		message: 'Yes sure, here you go',
		incoming: true,
		outgoing: false
	},
	{
		type: 'msg',
		subtype: 'doc',
		message: 'Yes sure, here you go',
		incoming: true,
		outgoing: false
	},
	{
		type: 'msg',
		subtype: 'doc',
		message: 'Yes sure, here you go',
		incoming: true,
		outgoing: false
	},
	{
		type: 'msg',
		subtype: 'doc',
		message: 'Yes sure, here you go',
		incoming: true,
		outgoing: false
	}
]

export {
	Profile_Menu,
	Nav_Setting,
	Nav_Buttons,
	Chat_History,
	Message_options,
	SHARED_LINKS,
	SHARED_DOCS
}
