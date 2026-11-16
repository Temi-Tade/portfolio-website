import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type Plugin } from 'vite';

function safeSvelteKitFetch(): Plugin {
	return {
		name: 'safe-sveltekit-fetch',
		transform(code, id) {
			if (!id.replace(/\\/g, '/').includes('@sveltejs/kit/src/runtime/client/fetcher.js')) {
				return null;
			}
			const safeAssign =
				'const __skFetchDesc = Object.getOwnPropertyDescriptor(window, "fetch") ?? Object.getOwnPropertyDescriptor(Window.prototype, "fetch"); if (!__skFetchDesc || __skFetchDesc.writable || __skFetchDesc.set) window.fetch = (input, init) => {';
			const patched = code.replaceAll('window.fetch = (input, init) => {', safeAssign);
			return patched === code ? null : { code: patched, map: null };
		}
	};
}

export default defineConfig({
	plugins: [safeSvelteKitFetch(), tailwindcss(), sveltekit()],
	server: {
		host: '0.0.0.0',
		port: 3000,
		allowedHosts: true
	},
	test: {
		expect: { requireAssertions: true },
		projects: [
			{
				extends: './vite.config.ts',
				test: {
					name: 'client',
					environment: 'browser',
					browser: {
						enabled: true,
						provider: 'playwright',
						instances: [{ browser: 'chromium' }]
					},
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**'],
					setupFiles: ['./vitest-setup-client.ts']
				}
			},
			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
