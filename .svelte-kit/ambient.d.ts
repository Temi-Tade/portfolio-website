
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
	export const SHELL: string;
	export const npm_command: string;
	export const WINDOWID: string;
	export const DEFAULTWORDPROCESSOR: string;
	export const npm_config_userconfig: string;
	export const COLORTERM: string;
	export const XDG_CONFIG_DIRS: string;
	export const npm_config_cache: string;
	export const NVM_INC: string;
	export const DEFAULTPAINT: string;
	export const HISTCONTROL: string;
	export const TERM_PROGRAM_VERSION: string;
	export const HISTSIZE: string;
	export const HOSTNAME: string;
	export const PREFIX: string;
	export const NODE: string;
	export const XDG_DATA_HOME: string;
	export const XDG_CONFIG_HOME: string;
	export const COLOR: string;
	export const npm_config_local_prefix: string;
	export const NO_AT_BRIDGE: string;
	export const npm_config_globalconfig: string;
	export const EDITOR: string;
	export const PWD: string;
	export const LOGNAME: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const npm_config_init_module: string;
	export const DEFAULTSPREADSHEET: string;
	export const _: string;
	export const XAUTHORITY: string;
	export const DEFAULTDRAW: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const DEFAULTIMAGEVIEWER: string;
	export const WINDOWPATH: string;
	export const LD_PRELOAD: string;
	export const GTK2_RC_FILES: string;
	export const HOME: string;
	export const LANG: string;
	export const XFINANSDIR: string;
	export const LS_COLORS: string;
	export const npm_package_version: string;
	export const RGBDEF: string;
	export const G_SLICE: string;
	export const GIO_EXTRA_MODULES: string;
	export const GIT_ASKPASS: string;
	export const GTK_CSD: string;
	export const DEFAULTTEXTEDITOR: string;
	export const INIT_CWD: string;
	export const CHROME_DESKTOP: string;
	export const XDG_CACHE_HOME: string;
	export const npm_lifecycle_script: string;
	export const NVM_DIR: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const DEFAULTMEDIAPLAYER: string;
	export const npm_config_npm_version: string;
	export const TERM: string;
	export const TERMINFO: string;
	export const npm_package_name: string;
	export const npm_config_prefix: string;
	export const CALIBRE_USE_DARK_PALETTE: string;
	export const USER: string;
	export const LIBASOUND_THREAD_SAFE: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const COLORFGBG: string;
	export const GDK_USE_XFT: string;
	export const XZ_DEFAULTS: string;
	export const KODI_HOME: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const NVM_CD_FLAGS: string;
	export const INPUTRC: string;
	export const PKG_TAB_COMPLETION: string;
	export const DEFAULTBROWSER: string;
	export const OOO_FORCE_DESKTOP: string;
	export const npm_config_user_agent: string;
	export const DEFAULTIMAGEEDITOR: string;
	export const npm_execpath: string;
	export const LD_LIBRARY_PATH: string;
	export const XDG_RUNTIME_DIR: string;
	export const QT5DIR: string;
	export const MM_RUNASROOT: string;
	export const QT_XFT: string;
	export const npm_package_json: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const XDG_DATA_DIRS: string;
	export const GDK_BACKEND: string;
	export const npm_config_noproxy: string;
	export const BROWSER: string;
	export const PATH: string;
	export const npm_config_node_gyp: string;
	export const DEFAULTHTMLEDITOR: string;
	export const HISTFILESIZE: string;
	export const QTWEBENGINE_CHROMIUM_FLAGS: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_config_global_prefix: string;
	export const OUTPUT_CHARSET: string;
	export const NVM_BIN: string;
	export const _JAVA_OPTIONS: string;
	export const npm_node_execpath: string;
	export const npm_config_engine_strict: string;
	export const OLDPWD: string;
	export const TERM_PROGRAM: string;
	export const TEXTDOMAIN: string;
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
		SHELL: string;
		npm_command: string;
		WINDOWID: string;
		DEFAULTWORDPROCESSOR: string;
		npm_config_userconfig: string;
		COLORTERM: string;
		XDG_CONFIG_DIRS: string;
		npm_config_cache: string;
		NVM_INC: string;
		DEFAULTPAINT: string;
		HISTCONTROL: string;
		TERM_PROGRAM_VERSION: string;
		HISTSIZE: string;
		HOSTNAME: string;
		PREFIX: string;
		NODE: string;
		XDG_DATA_HOME: string;
		XDG_CONFIG_HOME: string;
		COLOR: string;
		npm_config_local_prefix: string;
		NO_AT_BRIDGE: string;
		npm_config_globalconfig: string;
		EDITOR: string;
		PWD: string;
		LOGNAME: string;
		QT_QPA_PLATFORMTHEME: string;
		npm_config_init_module: string;
		DEFAULTSPREADSHEET: string;
		_: string;
		XAUTHORITY: string;
		DEFAULTDRAW: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		DEFAULTIMAGEVIEWER: string;
		WINDOWPATH: string;
		LD_PRELOAD: string;
		GTK2_RC_FILES: string;
		HOME: string;
		LANG: string;
		XFINANSDIR: string;
		LS_COLORS: string;
		npm_package_version: string;
		RGBDEF: string;
		G_SLICE: string;
		GIO_EXTRA_MODULES: string;
		GIT_ASKPASS: string;
		GTK_CSD: string;
		DEFAULTTEXTEDITOR: string;
		INIT_CWD: string;
		CHROME_DESKTOP: string;
		XDG_CACHE_HOME: string;
		npm_lifecycle_script: string;
		NVM_DIR: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		DEFAULTMEDIAPLAYER: string;
		npm_config_npm_version: string;
		TERM: string;
		TERMINFO: string;
		npm_package_name: string;
		npm_config_prefix: string;
		CALIBRE_USE_DARK_PALETTE: string;
		USER: string;
		LIBASOUND_THREAD_SAFE: string;
		VSCODE_GIT_IPC_HANDLE: string;
		COLORFGBG: string;
		GDK_USE_XFT: string;
		XZ_DEFAULTS: string;
		KODI_HOME: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		NVM_CD_FLAGS: string;
		INPUTRC: string;
		PKG_TAB_COMPLETION: string;
		DEFAULTBROWSER: string;
		OOO_FORCE_DESKTOP: string;
		npm_config_user_agent: string;
		DEFAULTIMAGEEDITOR: string;
		npm_execpath: string;
		LD_LIBRARY_PATH: string;
		XDG_RUNTIME_DIR: string;
		QT5DIR: string;
		MM_RUNASROOT: string;
		QT_XFT: string;
		npm_package_json: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		XDG_DATA_DIRS: string;
		GDK_BACKEND: string;
		npm_config_noproxy: string;
		BROWSER: string;
		PATH: string;
		npm_config_node_gyp: string;
		DEFAULTHTMLEDITOR: string;
		HISTFILESIZE: string;
		QTWEBENGINE_CHROMIUM_FLAGS: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_config_global_prefix: string;
		OUTPUT_CHARSET: string;
		NVM_BIN: string;
		_JAVA_OPTIONS: string;
		npm_node_execpath: string;
		npm_config_engine_strict: string;
		OLDPWD: string;
		TERM_PROGRAM: string;
		TEXTDOMAIN: string;
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
