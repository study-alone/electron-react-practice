import { accordion } from '@theme/overrides/accordion'
import { alert } from '@theme/overrides/alert'
import { autocomplete } from '@theme/overrides/autocomplete'
import { avatar } from '@theme/overrides/avatar'
import { backdrop } from '@theme/overrides/backdrop'
import { badge } from '@theme/overrides/badge'
import { breadcrumbs } from '@theme/overrides/breadcrumbs'
import { button } from '@theme/overrides/button'
import { buttonGroup } from '@theme/overrides/buttonGroup'
import { card } from '@theme/overrides/card'
import { checkbox } from '@theme/overrides/checkbox'
import { chip } from '@theme/overrides/chip'
import { controlLabel } from '@theme/overrides/controlLabel'
import { cssBaseline } from '@theme/overrides/cssBaseline'
import { dataGrid } from '@theme/overrides/dataGrid'
import { dialog } from '@theme/overrides/dialog'
import { divider } from '@theme/overrides/divider'
import { drawer } from '@theme/overrides/drawer'
import { fab } from '@theme/overrides/fab'
import { input } from '@theme/overrides/input'
import { link } from '@theme/overrides/link'
import { list } from '@theme/overrides/list'
import { loadingButton } from '@theme/overrides/loadingButton'
import { menu } from '@theme/overrides/menu'
import { pagination } from '@theme/overrides/pagination'
import { paper } from '@theme/overrides/paper'
import { popover } from '@theme/overrides/popover'
import { progress } from '@theme/overrides/progress'
import { radio } from '@theme/overrides/radio'
import { rating } from '@theme/overrides/rating'
import { select } from '@theme/overrides/select'
import { skeleton } from '@theme/overrides/skeleton'
import { slider } from '@theme/overrides/slider'
import { stepper } from '@theme/overrides/stepper'
import { svgIcon } from '@theme/overrides/svgIcon'
import { switchTheme } from '@theme/overrides/switch'
import { table } from '@theme/overrides/table'
import { tabs } from '@theme/overrides/tabs'
import { timeline } from '@theme/overrides/timeline'
import { toggleButton } from '@theme/overrides/toggleButton'
import { tooltip } from '@theme/overrides/tooltip'
import { treeView } from '@theme/overrides/treeview'
import { typography } from '@theme/overrides/typography'

export const componentsOverrides = () => {
	return Object.assign(
		fab,
		tabs,
		chip,
		card,
		menu,
		link,
		input,
		radio,
		badge,
		list,
		table,
		paper,
		alert,
		switchTheme,
		select,
		button,
		rating,
		dialog,
		avatar,
		slider,
		drawer,
		stepper,
		tooltip,
		popover,
		svgIcon,
		checkbox,
		dataGrid,
		skeleton,
		timeline,
		treeView,
		backdrop,
		progress,
		accordion,
		typography,
		pagination,
		buttonGroup,
		breadcrumbs,
		cssBaseline,
		autocomplete,
		controlLabel,
		toggleButton,
		loadingButton,
		divider
	)
}
