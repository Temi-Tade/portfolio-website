export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "portfolio-website/_app",
	assets: new Set([".nojekyll","AKINTADE TEMILOLUWA AYOMIDE CV.pdf","TEEE.png","efiqo_screen.png","favicon.svg","keymaster_screen.png","keyword_encoder_screen.png","svg_editor_screen.png","temiloluwa.jpg","verbot_screen.png"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.Bc8ea9HR.js",app:"_app/immutable/entry/app.CmjJHBAa.js",imports:["_app/immutable/entry/start.Bc8ea9HR.js","_app/immutable/chunks/DOvwsGWs.js","_app/immutable/chunks/BccFpqTJ.js","_app/immutable/chunks/ClFD-jiw.js","_app/immutable/chunks/BtT5eWpJ.js","_app/immutable/entry/app.CmjJHBAa.js","_app/immutable/chunks/ClFD-jiw.js","_app/immutable/chunks/BtT5eWpJ.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BccFpqTJ.js","_app/immutable/chunks/qImXfeQU.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
