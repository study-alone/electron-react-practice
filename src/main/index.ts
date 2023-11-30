import os from 'node:os'
import { join } from 'node:path'
import { app, shell, BrowserWindow, session } from 'electron'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
// import { default as installExtension, REACT_DEVELOPER_TOOLS } from 'electron-devtools-assembler'
// import { default as installExtension, REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer'

import icon from '@resources/icon.png?asset'

function upsertKeyValue(obj, keyToChange, value) {
	const keyToChangeLower = keyToChange.toLowerCase()
	for (const key of Object.keys(obj)) {
		if (key.toLowerCase() === keyToChangeLower) {
			// Reassign old key
			obj[key] = value
			// Done
			return
		}
	}
	// Insert at end instead
	obj[keyToChange] = value
}

const reactDevToolsPath = join(os.homedir(), '/Desktop/ReactDevTools')

function createWindow(): void {
	// Create the browser window.
	const mainWindow = new BrowserWindow({
		width: 1504,
		height: 846,
		x: 1504,
		y: 846,
		show: false,
		autoHideMenuBar: true,
		...(process.platform === 'linux' ? { icon } : {}),
		webPreferences: {
			preload: join(__dirname, '../preload/index.js'),
			sandbox: false,
			devTools: true
		}
	})

	mainWindow.on('ready-to-show', () => {
		mainWindow.show()
	})

	mainWindow.webContents.setWindowOpenHandler((details) => {
		shell.openExternal(details.url)
		return { action: 'deny' }
	})

	mainWindow.webContents.session.webRequest.onBeforeSendHeaders((details, callback) => {
		const { requestHeaders } = details
		upsertKeyValue(requestHeaders, 'Access-Control-Allow-Origin', ['*'])
		callback({ requestHeaders })
	})

	mainWindow.webContents.session.webRequest.onHeadersReceived((details, callback) => {
		const { responseHeaders } = details
		upsertKeyValue(responseHeaders, 'Access-Control-Allow-Origin', ['*'])
		upsertKeyValue(responseHeaders, 'Access-Control-Allow-Headers', ['*'])
		callback({ responseHeaders })
	})

	// HMR for renderer base on electron-vite cli.
	// Load the remote URL for development or the local html file for production.
	if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
		mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
		mainWindow.webContents.openDevTools()
	} else {
		mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
	}
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(async () => {
	// installExtension([REACT_DEVELOPER_TOOLS], {
	// 	loadExtensionOptions: { allowFileAccess: true },
	// 	forceDownload: !!process.env.UPGRADE_EXTENSIONS
	// }).then((name) => console.log('Extension loaded :', name))
	await session.defaultSession.loadExtension(reactDevToolsPath, {
		allowFileAccess: true
	})

	// Set app user model id for windows
	electronApp.setAppUserModelId('com.electron')

	// Default open or close DevTools by F12 in development
	// and ignore CommandOrControl + R in production.
	// see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
	app.on('browser-window-created', (_, window) => {
		optimizer.watchWindowShortcuts(window)
	})

	createWindow()

	app.on('activate', function () {
		// On macOS it's common to re-create a window in the app when the
		// dock icon is clicked and there are no other windows open.
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
