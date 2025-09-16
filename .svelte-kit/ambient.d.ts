
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```sh
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const ELECTRON_RUN_AS_NODE: string;
	export const BROWSER: string;
	export const CALIBRE_USE_DARK_PALETTE: string;
	export const CHROME_DESKTOP: string;
	export const COLORFGBG: string;
	export const COLORTERM: string;
	export const DEFAULTBROWSER: string;
	export const DEFAULTDRAW: string;
	export const DEFAULTHTMLEDITOR: string;
	export const DEFAULTIMAGEEDITOR: string;
	export const DEFAULTIMAGEVIEWER: string;
	export const DEFAULTMEDIAPLAYER: string;
	export const DEFAULTPAINT: string;
	export const DEFAULTSPREADSHEET: string;
	export const DEFAULTTEXTEDITOR: string;
	export const DEFAULTWORDPROCESSOR: string;
	export const DISPLAY: string;
	export const EDITOR: string;
	export const ELECTRON_NO_ATTACH_CONSOLE: string;
	export const GDK_BACKEND: string;
	export const GDK_USE_XFT: string;
	export const GIO_EXTRA_MODULES: string;
	export const GTK2_RC_FILES: string;
	export const GTK_CSD: string;
	export const G_SLICE: string;
	export const HISTCONTROL: string;
	export const HISTFILESIZE: string;
	export const HISTSIZE: string;
	export const HOME: string;
	export const HOSTNAME: string;
	export const INPUTRC: string;
	export const KODI_HOME: string;
	export const LANG: string;
	export const LD_LIBRARY_PATH: string;
	export const LIBASOUND_THREAD_SAFE: string;
	export const LOGNAME: string;
	export const LS_COLORS: string;
	export const MM_RUNASROOT: string;
	export const NO_AT_BRIDGE: string;
	export const NVM_BIN: string;
	export const NVM_DIR: string;
	export const NVM_INC: string;
	export const OLDPWD: string;
	export const OOO_FORCE_DESKTOP: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const OUTPUT_CHARSET: string;
	export const PATH: string;
	export const PKG_TAB_COMPLETION: string;
	export const PWD: string;
	export const QT5DIR: string;
	export const QTWEBENGINE_CHROMIUM_FLAGS: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const QT_XFT: string;
	export const RGBDEF: string;
	export const SHELL: string;
	export const SHLVL: string;
	export const TERM: string;
	export const TERMINFO: string;
	export const TEXTDOMAIN: string;
	export const USER: string;
	export const VSCODE_CLI: string;
	export const VSCODE_CODE_CACHE_PATH: string;
	export const VSCODE_CRASH_REPORTER_PROCESS_TYPE: string;
	export const VSCODE_CWD: string;
	export const VSCODE_ESM_ENTRYPOINT: string;
	export const VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
	export const VSCODE_IPC_HOOK: string;
	export const VSCODE_NLS_CONFIG: string;
	export const VSCODE_PID: string;
	export const WINDOWID: string;
	export const WINDOWPATH: string;
	export const XAUTHORITY: string;
	export const XDG_CACHE_HOME: string;
	export const XDG_CONFIG_DIRS: string;
	export const XDG_CONFIG_HOME: string;
	export const XDG_DATA_DIRS: string;
	export const XDG_DATA_HOME: string;
	export const XDG_RUNTIME_DIR: string;
	export const XFINANSDIR: string;
	export const XZ_DEFAULTS: string;
	export const _: string;
	export const _JAVA_OPTIONS: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const VSCODE_L10N_BUNDLE_LOCATION: string;
	export const ELECTRON_NO_ASAR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		ELECTRON_RUN_AS_NODE: string;
		BROWSER: string;
		CALIBRE_USE_DARK_PALETTE: string;
		CHROME_DESKTOP: string;
		COLORFGBG: string;
		COLORTERM: string;
		DEFAULTBROWSER: string;
		DEFAULTDRAW: string;
		DEFAULTHTMLEDITOR: string;
		DEFAULTIMAGEEDITOR: string;
		DEFAULTIMAGEVIEWER: string;
		DEFAULTMEDIAPLAYER: string;
		DEFAULTPAINT: string;
		DEFAULTSPREADSHEET: string;
		DEFAULTTEXTEDITOR: string;
		DEFAULTWORDPROCESSOR: string;
		DISPLAY: string;
		EDITOR: string;
		ELECTRON_NO_ATTACH_CONSOLE: string;
		GDK_BACKEND: string;
		GDK_USE_XFT: string;
		GIO_EXTRA_MODULES: string;
		GTK2_RC_FILES: string;
		GTK_CSD: string;
		G_SLICE: string;
		HISTCONTROL: string;
		HISTFILESIZE: string;
		HISTSIZE: string;
		HOME: string;
		HOSTNAME: string;
		INPUTRC: string;
		KODI_HOME: string;
		LANG: string;
		LD_LIBRARY_PATH: string;
		LIBASOUND_THREAD_SAFE: string;
		LOGNAME: string;
		LS_COLORS: string;
		MM_RUNASROOT: string;
		NO_AT_BRIDGE: string;
		NVM_BIN: string;
		NVM_DIR: string;
		NVM_INC: string;
		OLDPWD: string;
		OOO_FORCE_DESKTOP: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		OUTPUT_CHARSET: string;
		PATH: string;
		PKG_TAB_COMPLETION: string;
		PWD: string;
		QT5DIR: string;
		QTWEBENGINE_CHROMIUM_FLAGS: string;
		QT_QPA_PLATFORMTHEME: string;
		QT_XFT: string;
		RGBDEF: string;
		SHELL: string;
		SHLVL: string;
		TERM: string;
		TERMINFO: string;
		TEXTDOMAIN: string;
		USER: string;
		VSCODE_CLI: string;
		VSCODE_CODE_CACHE_PATH: string;
		VSCODE_CRASH_REPORTER_PROCESS_TYPE: string;
		VSCODE_CWD: string;
		VSCODE_ESM_ENTRYPOINT: string;
		VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
		VSCODE_IPC_HOOK: string;
		VSCODE_NLS_CONFIG: string;
		VSCODE_PID: string;
		WINDOWID: string;
		WINDOWPATH: string;
		XAUTHORITY: string;
		XDG_CACHE_HOME: string;
		XDG_CONFIG_DIRS: string;
		XDG_CONFIG_HOME: string;
		XDG_DATA_DIRS: string;
		XDG_DATA_HOME: string;
		XDG_RUNTIME_DIR: string;
		XFINANSDIR: string;
		XZ_DEFAULTS: string;
		_: string;
		_JAVA_OPTIONS: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		VSCODE_L10N_BUNDLE_LOCATION: string;
		ELECTRON_NO_ASAR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
