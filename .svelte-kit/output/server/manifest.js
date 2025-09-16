export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "portfolio-website/_app",
	assets: new Set([".nojekyll","AKINTADE TEMILOLUWA AYOMIDE CV.pdf","images/TEEE.png","images/efiqo_screen.png","images/favicon.svg","images/keymaster_screen.png","images/keyword_encoder_screen.png","images/svg_editor_screen.png","images/temiloluwa.jpg","images/verbot_screen.png"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.tPgLavTY.js",app:"_app/immutable/entry/app.CmBsaUnw.js",imports:["_app/immutable/entry/start.tPgLavTY.js","_app/immutable/chunks/CHyk1B5B.js","_app/immutable/chunks/BccFpqTJ.js","_app/immutable/chunks/ClFD-jiw.js","_app/immutable/chunks/BtT5eWpJ.js","_app/immutable/chunks/CLuo7uw0.js","_app/immutable/entry/app.CmBsaUnw.js","_app/immutable/chunks/ClFD-jiw.js","_app/immutable/chunks/BtT5eWpJ.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BccFpqTJ.js","_app/immutable/chunks/qImXfeQU.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
