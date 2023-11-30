import { useState } from 'react'
import { faker } from '@faker-js/faker'
import { useContactToggle } from '@hooks/useContactToggle'
import { HeaderStyled, SharedMessagesStyled } from '@components/contact/styled'
import { Grid, IconButton, Stack, Tab, Tabs, Typography } from '@mui/material'
import { CaretLeft } from 'phosphor-react'
import { SHARED_DOCS, SHARED_LINKS } from 'src/renderer/src/data'
import { LinkMessage } from '@components/conversation/LinkMessage'
import { DocumentMessage } from '@components/conversation/DocumentMessage'

const medias = [
	{ src: faker.image.urlLoremFlickr({ category: 'abstract' }), alt: faker.person.fullName() },
	{ src: faker.image.urlLoremFlickr({ category: 'animals' }), alt: faker.person.fullName() },
	{ src: faker.image.urlLoremFlickr({ category: 'business' }), alt: faker.person.fullName() },
	{ src: faker.image.urlLoremFlickr({ category: 'fashion' }), alt: faker.person.fullName() },
	{ src: faker.image.urlLoremFlickr({ category: 'cats' }), alt: faker.person.fullName() },
	{ src: faker.image.urlLoremFlickr({ category: 'city' }), alt: faker.person.fullName() }
]

type TabValue = 'media' | 'link' | 'docs'

export const SharedMessages = () => {
	const { type, setType } = useContactToggle()
	const [tabValue, setTabValue] = useState<TabValue>('media')

	const handleBackward = () => {
		setType('own')
	}

	const handleChangeTab = (event: React.SyntheticEvent, newValue: TabValue) => {
		setTabValue(newValue)
	}

	if (type !== 'shared') return null
	return (
		<SharedMessagesStyled>
			<HeaderStyled>
				<Stack
					direction="row"
					p={2}
					spacing={3}
					sx={{ height: '100%', alignItems: 'center' }}
				>
					<IconButton onClick={handleBackward}>
						<CaretLeft />
					</IconButton>
					<Typography variant="subtitle2">Shared Message</Typography>
				</Stack>
			</HeaderStyled>
			<Tabs
				value={tabValue}
				onChange={handleChangeTab}
				centered
				sx={{ px: 2, pt: 2, flexShrink: 0 }}
			>
				<Tab label="Media" value="media" />
				<Tab label="Link" value="link" />
				<Tab label="Docs" value="docs" />
			</Tabs>
			<Stack
				p={3}
				spacing={3}
				sx={{
					position: 'relative',
					flexGrow: 1,
					flexShrink: 1,
					overflowY: 'scroll'
				}}
			>
				{tabValue === 'media' && (
					<Grid container spacing={2}>
						{medias.map((item) => (
							<Grid item xs={4} key={`shared-medias-${item.alt}`}>
								<img src={item.src} alt={item.alt} />
							</Grid>
						))}
					</Grid>
				)}
				{tabValue === 'link' &&
					SHARED_LINKS.map((item, index) => (
						<LinkMessage {...item} key={`shared-message-link-${index}`} />
					))}
				{tabValue === 'docs' &&
					SHARED_DOCS.map((item, index) => (
						<DocumentMessage {...item} key={`shared-message-document-${index}`} />
					))}
			</Stack>
		</SharedMessagesStyled>
	)
}
