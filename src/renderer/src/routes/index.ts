import * as React from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import { DashboardLayout } from '@components/layout/Dashboard'
import { MainLayout } from '@components/layout/Main'
import { Root } from '@components/layout/Root'
import { DEFAULT_PATH } from 'src/renderer/src/config'

import type { RouteObject } from 'react-router-dom'

const routerObject: RouteObject[] = [
	{
		path: '/',
		Component: Root,
		children: [
			{
				index: true,
				element: React.createElement(Navigate, { to: DEFAULT_PATH, replace: true })
			},
			{
				path: 'auth',
				Component: MainLayout,
				children: [
					{
						path: 'login',
						lazy: () => import('@pages/auth/Login')
					},
					{
						path: 'register',
						lazy: () => import('@pages/auth/Register')
					},
					{
						path: 'reset-password',
						lazy: () => import('@pages/auth/ResetPassword')
					},
					{
						path: 'new-password',
						lazy: () => import('@pages/auth/NewPassword')
					}
				]
			},
			{
				path: 'app',
				Component: DashboardLayout,
				children: [
					{
						path: 'chat',
						lazy: () => import('@pages/dashboard/GeneralApp')
					},
					{
						path: 'settings',
						lazy: () => import('@pages/dashboard/Settings')
					},
					{
						path: 'group',
						lazy: () => import('@pages/dashboard/Group')
					},
					{
						path: 'call',
						lazy: () => import('@pages/dashboard/Call')
					},
					{
						path: 'profile',
						lazy: () => import('@pages/dashboard/Profile')
					}
				]
			},
			{
				path: '404',
				lazy: () => import('@pages/Page404')
			}
		]
	},
	{ path: '*', element: React.createElement(Navigate, { to: '/404', replace: true }) }
]

export const router = createBrowserRouter(routerObject)
