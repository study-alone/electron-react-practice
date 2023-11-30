import {
	TreeViewCollapseIcon,
	TreeViewEndIcon,
	TreeViewExpandIcon
} from '@theme/overrides/CustomIcons'
import * as React from 'react'
import type {} from '@mui/x-tree-view/themeAugmentation'

export const treeView: ComponentTheme<'MuiTreeView' | 'MuiTreeItem'> = {
	MuiTreeView: {
		defaultProps: {
			defaultCollapseIcon: React.createElement(TreeViewCollapseIcon, {
				sx: { width: 20, height: 20 }
			}),
			defaultExpandIcon: React.createElement(TreeViewExpandIcon, {
				sx: { width: 20, height: 20 }
			}),
			defaultEndIcon: React.createElement(TreeViewEndIcon, {
				sx: { color: 'text.secondary', width: 20, height: 20 }
			})
		}
	},
	MuiTreeItem: {
		styleOverrides: {
			label: ({ theme }) => ({ ...theme.typography.body2 }),
			iconContainer: { width: 'auto' }
		}
	}
}
