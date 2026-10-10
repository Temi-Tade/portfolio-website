
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
	export const DOCKER_BUILDKIT: string;
	export const LESSOPEN: string;
	export const ENABLE_DYNAMIC_INSTALL: string;
	export const RUBBER_DUCK_AGENT: string;
	export const GITHUB_CODESPACE_TOKEN: string;
	export const PYTHONIOENCODING: string;
	export const AI_AGENT: string;
	export const USER: string;
	export const npm_config_user_agent: string;
	export const FEATURE_SPARK_POST_COMMIT_CREATE_ITERATION: string;
	export const HOSTNAME: string;
	export const GIT_ASKPASS: string;
	export const PIPX_HOME: string;
	export const CONDA_SCRIPT: string;
	export const DOTNET_USE_POLLING_FILE_WATCHER: string;
	export const npm_node_execpath: string;
	export const GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN: string;
	export const SHLVL: string;
	export const npm_config_noproxy: string;
	export const HUGO_ROOT: string;
	export const HOME: string;
	export const GIT_CONFIG_COUNT: string;
	export const RBENV_ROOT: string;
	export const OLDPWD: string;
	export const COPILOT_CLI_RUN_AS_NODE: string;
	export const ORYX_ENV_TYPE: string;
	export const NVM_BIN: string;
	export const npm_package_json: string;
	export const NVM_INC: string;
	export const CODESPACES: string;
	export const PIPX_BIN_DIR: string;
	export const DYNAMIC_INSTALL_ROOT_DIR: string;
	export const NVM_SYMLINK_CURRENT: string;
	export const DOTNET_RUNNING_IN_CONTAINER: string;
	export const GRADLE_HOME: string;
	export const ORYX_DIR: string;
	export const MAVEN_HOME: string;
	export const JUPYTERLAB_PATH: string;
	export const COPILOT_CLI: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const USE_TGREP: string;
	export const SSH_ASKPASS: string;
	export const GOROOT: string;
	export const ANTHROPIC_ADVISOR: string;
	export const NODE_ROOT: string;
	export const npm_config_engine_strict: string;
	export const GITHUB_USER: string;
	export const USE_BUILTIN_RIPGREP: string;
	export const GITHUB_GRAPHQL_URL: string;
	export const COLOR: string;
	export const COPILOT_HOME: string;
	export const PYTHON_PATH: string;
	export const NVM_DIR: string;
	export const DEBUGINFOD_URLS: string;
	export const GIT_OPTIONAL_LOCKS: string;
	export const DOTNET_SKIP_FIRST_TIME_EXPERIENCE: string;
	export const GCM_INTERACTIVE: string;
	export const ContainerVersion: string;
	export const GITHUB_API_URL: string;
	export const SDKMAN_CANDIDATES_API: string;
	export const _: string;
	export const npm_config_prefix: string;
	export const npm_config_npm_version: string;
	export const CLOUDENV_ENVIRONMENT_ID: string;
	export const SKILL_CHAR_BUDGET: string;
	export const PROMPT_DIRTRIM: string;
	export const npm_config_cache: string;
	export const DOTNET_ROOT: string;
	export const PHP_ROOT: string;
	export const GIT_CONFIG_VALUE_0: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const JAVA_ROOT: string;
	export const SDKMAN_CANDIDATES_DIR: string;
	export const GIT_CONFIG_VALUE_1: string;
	export const CLAUDE_CODE_DISABLE_PRECOMPACT_SKIP: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const SDKMAN_BROKER_API: string;
	export const NPM_GLOBAL: string;
	export const HUGO_DIR: string;
	export const SHELL_LOGGED_IN: string;
	export const GIT_CONFIG_VALUE_2: string;
	export const LANG: string;
	export const LS_COLORS: string;
	export const SDKMAN_DIR: string;
	export const GITHUB_REPOSITORY: string;
	export const RUBY_ROOT: string;
	export const SDKMAN_PLATFORM: string;
	export const npm_lifecycle_script: string;
	export const COPILOT_AGENT_SESSION_ID: string;
	export const SHELL: string;
	export const COPILOT_RUNTIME_PROCESS_FILE_LOGGING: string;
	export const GIT_TERMINAL_PROMPT: string;
	export const MXC_BIN_DIR: string;
	export const GOPATH: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const GIT_CONFIG_KEY_0: string;
	export const LESSCLOSE: string;
	export const ORYX_PREFER_USER_INSTALLED_SDKS: string;
	export const GIT_CONFIG_KEY_1: string;
	export const ORYX_SDK_STORAGE_BASE_URL: string;
	export const GIT_CONFIG_KEY_2: string;
	export const COPILOT_MCP_APPS: string;
	export const CONDA_DIR: string;
	export const DEBIAN_FLAVOR: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const JAVA_HOME: string;
	export const PWD: string;
	export const AUTO_APPROVAL: string;
	export const INTERNAL_VSCS_TARGET_URL: string;
	export const npm_execpath: string;
	export const GITHUB_SERVER_URL: string;
	export const NVM_CD_FLAGS: string;
	export const npm_config_global_prefix: string;
	export const COPILOT_ENABLE_BUILTIN_GITHUB_MCP: string;
	export const npm_config_allow_scripts: string;
	export const npm_command: string;
	export const CODESPACE_NAME: string;
	export const PYTHON_ROOT: string;
	export const PHP_PATH: string;
	export const RAILS_DEVELOPMENT_HOSTS: string;
	export const COPILOT_CLI_ENABLED_FEATURE_FLAGS: string;
	export const MAVEN_ROOT: string;
	export const RUBY_HOME: string;
	export const NUGET_XMLDOC_MODE: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
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
		DOCKER_BUILDKIT: string;
		LESSOPEN: string;
		ENABLE_DYNAMIC_INSTALL: string;
		RUBBER_DUCK_AGENT: string;
		GITHUB_CODESPACE_TOKEN: string;
		PYTHONIOENCODING: string;
		AI_AGENT: string;
		USER: string;
		npm_config_user_agent: string;
		FEATURE_SPARK_POST_COMMIT_CREATE_ITERATION: string;
		HOSTNAME: string;
		GIT_ASKPASS: string;
		PIPX_HOME: string;
		CONDA_SCRIPT: string;
		DOTNET_USE_POLLING_FILE_WATCHER: string;
		npm_node_execpath: string;
		GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN: string;
		SHLVL: string;
		npm_config_noproxy: string;
		HUGO_ROOT: string;
		HOME: string;
		GIT_CONFIG_COUNT: string;
		RBENV_ROOT: string;
		OLDPWD: string;
		COPILOT_CLI_RUN_AS_NODE: string;
		ORYX_ENV_TYPE: string;
		NVM_BIN: string;
		npm_package_json: string;
		NVM_INC: string;
		CODESPACES: string;
		PIPX_BIN_DIR: string;
		DYNAMIC_INSTALL_ROOT_DIR: string;
		NVM_SYMLINK_CURRENT: string;
		DOTNET_RUNNING_IN_CONTAINER: string;
		GRADLE_HOME: string;
		ORYX_DIR: string;
		MAVEN_HOME: string;
		JUPYTERLAB_PATH: string;
		COPILOT_CLI: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		USE_TGREP: string;
		SSH_ASKPASS: string;
		GOROOT: string;
		ANTHROPIC_ADVISOR: string;
		NODE_ROOT: string;
		npm_config_engine_strict: string;
		GITHUB_USER: string;
		USE_BUILTIN_RIPGREP: string;
		GITHUB_GRAPHQL_URL: string;
		COLOR: string;
		COPILOT_HOME: string;
		PYTHON_PATH: string;
		NVM_DIR: string;
		DEBUGINFOD_URLS: string;
		GIT_OPTIONAL_LOCKS: string;
		DOTNET_SKIP_FIRST_TIME_EXPERIENCE: string;
		GCM_INTERACTIVE: string;
		ContainerVersion: string;
		GITHUB_API_URL: string;
		SDKMAN_CANDIDATES_API: string;
		_: string;
		npm_config_prefix: string;
		npm_config_npm_version: string;
		CLOUDENV_ENVIRONMENT_ID: string;
		SKILL_CHAR_BUDGET: string;
		PROMPT_DIRTRIM: string;
		npm_config_cache: string;
		DOTNET_ROOT: string;
		PHP_ROOT: string;
		GIT_CONFIG_VALUE_0: string;
		npm_config_node_gyp: string;
		PATH: string;
		JAVA_ROOT: string;
		SDKMAN_CANDIDATES_DIR: string;
		GIT_CONFIG_VALUE_1: string;
		CLAUDE_CODE_DISABLE_PRECOMPACT_SKIP: string;
		NODE: string;
		npm_package_name: string;
		SDKMAN_BROKER_API: string;
		NPM_GLOBAL: string;
		HUGO_DIR: string;
		SHELL_LOGGED_IN: string;
		GIT_CONFIG_VALUE_2: string;
		LANG: string;
		LS_COLORS: string;
		SDKMAN_DIR: string;
		GITHUB_REPOSITORY: string;
		RUBY_ROOT: string;
		SDKMAN_PLATFORM: string;
		npm_lifecycle_script: string;
		COPILOT_AGENT_SESSION_ID: string;
		SHELL: string;
		COPILOT_RUNTIME_PROCESS_FILE_LOGGING: string;
		GIT_TERMINAL_PROMPT: string;
		MXC_BIN_DIR: string;
		GOPATH: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		GIT_CONFIG_KEY_0: string;
		LESSCLOSE: string;
		ORYX_PREFER_USER_INSTALLED_SDKS: string;
		GIT_CONFIG_KEY_1: string;
		ORYX_SDK_STORAGE_BASE_URL: string;
		GIT_CONFIG_KEY_2: string;
		COPILOT_MCP_APPS: string;
		CONDA_DIR: string;
		DEBIAN_FLAVOR: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		JAVA_HOME: string;
		PWD: string;
		AUTO_APPROVAL: string;
		INTERNAL_VSCS_TARGET_URL: string;
		npm_execpath: string;
		GITHUB_SERVER_URL: string;
		NVM_CD_FLAGS: string;
		npm_config_global_prefix: string;
		COPILOT_ENABLE_BUILTIN_GITHUB_MCP: string;
		npm_config_allow_scripts: string;
		npm_command: string;
		CODESPACE_NAME: string;
		PYTHON_ROOT: string;
		PHP_PATH: string;
		RAILS_DEVELOPMENT_HOSTS: string;
		COPILOT_CLI_ENABLED_FEATURE_FLAGS: string;
		MAVEN_ROOT: string;
		RUBY_HOME: string;
		NUGET_XMLDOC_MODE: string;
		INIT_CWD: string;
		EDITOR: string;
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
