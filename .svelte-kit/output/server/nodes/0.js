

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DgVDBWAo.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BqX8LkUv.js"];
export const stylesheets = ["_app/immutable/assets/0.DW0r-cIK.css"];
export const fonts = [];
