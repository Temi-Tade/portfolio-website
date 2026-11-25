const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","docs/AKINTADE TEMILOLUWA AYOMIDE CV.pdf","images/Skaylar.png","images/TEEE.png","images/favicon.svg","images/medusa.png","images/ohm-e.png","images/qdn_qft.png","images/riveth.png","images/shiptok.png","images/temiloluwa-peerlist.jpg","images/temiloluwa.jpg","sitemap.xml"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.BEdVdhm5.js",app:"_app/immutable/entry/app.GBQyo824.js",imports:["_app/immutable/entry/start.BEdVdhm5.js","_app/immutable/chunks/DrIZ9Zsx.js","_app/immutable/chunks/CjRQljtD.js","_app/immutable/chunks/B3EZPR1m.js","_app/immutable/chunks/D1zz-1Le.js","_app/immutable/chunks/By0d7s_M.js","_app/immutable/entry/app.GBQyo824.js","_app/immutable/chunks/B3EZPR1m.js","_app/immutable/chunks/D1zz-1Le.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CjRQljtD.js","_app/immutable/chunks/k0QgB5Hs.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js-BOMniAEH.js')),
			__memo(() => import('./nodes/1.js-C4S_o_Ss.js')),
			__memo(() => import('./nodes/2.js-B_ETavSI.js'))
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

export { manifest as m };
//# sourceMappingURL=manifest.js-nQb1IQY8.js.map
