type DynamicRoutes = {
	
};

type Layouts = {
	"/": undefined
};

export type RouteId = "/";

export type RouteParams<T extends RouteId> = T extends keyof DynamicRoutes ? DynamicRoutes[T] : Record<string, never>;

export type LayoutParams<T extends RouteId> = Layouts[T] | Record<string, never>;

export type Pathname = "/";

export type ResolvedPathname = `${"" | `/${string}`}${Pathname}`;

export type Asset = "/.nojekyll" | "/AKINTADE TEMILOLUWA AYOMIDE CV.pdf" | "/TEEE.png" | "/efiqo_screen.png" | "/favicon.svg" | "/keymaster_screen.png" | "/keyword_encoder_screen.png" | "/svg_editor_screen.png" | "/temiloluwa.jpg" | "/verbot_screen.png";