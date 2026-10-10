<script>
	import About from "../ui/About.svelte";
	import Contacts from "../ui/Contacts.svelte";
	import Header from "../ui/Header.svelte";
	import Projects from "../ui/Projects.svelte";
	import Articles from "../ui/Articles.svelte";
	import Heart from 'lucide-svelte/icons/heart';

	const siteUrl = 'https://temi-tade.github.io/portfolio-website/';
	const personSchema = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Temiloluwa Akintade',
		url: siteUrl,
		jobTitle: 'Software Developer',
		description:
			'Software developer building web applications, blockchain products, smart contracts, systems, and embedded software.',
		sameAs: [
			'https://github.com/Temi-Tade',
			'https://x.com/Temi_tade2805',
			'https://linkedin.com/in/temiloluwa-akintade-4b6798254',
			'https://dev.to/js_cipher',
			'https://medium.com/@temi_lolu0x0',
			'https://coderlegion.com/user/temi_0x0',
			'https://peerlist.io/temi_lolu'
		]
	};
</script>

<svelte:head>
	<title>Temiloluwa Akintade | Software Developer</title>
	<meta
		name="description"
		content="Temiloluwa Akintade is a software developer building thoughtful web applications, blockchain products, smart contracts, systems, and embedded software."
	/>
	<meta name="author" content="Temiloluwa Akintade" />
	<link rel="canonical" href={siteUrl} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Temiloluwa Akintade | Software Developer" />
	<meta
		property="og:description"
		content="Web applications, blockchain products, smart contracts, systems, and embedded software by Temiloluwa Akintade."
	/>
	<meta property="og:url" content={siteUrl} />
	<meta property="og:image" content={`${siteUrl}images/temiloluwa-peerlist.jpg`} />
	<meta property="og:image:alt" content="Temiloluwa Akintade, software developer" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Temiloluwa Akintade | Software Developer" />
	<meta
		name="twitter:description"
		content="Web applications, blockchain products, smart contracts, systems, and embedded software by Temiloluwa Akintade."
	/>
	<meta name="twitter:image" content={`${siteUrl}images/temiloluwa-peerlist.jpg`} />
	{@html `<script type="application/ld+json">${JSON.stringify(personSchema)}</script>`}
</svelte:head>

<div class="page-shell" id="top">
	<Header />
	<main class="content-shell">
		<About />
		<Projects />
		<Articles />
		<Contacts />
	</main>

	<footer class="site-footer">
		<p>
			Made with <Heart fill="red" size={16} style="vertical-align: middle;" /> by Temiloluwa. All rights reserved.
		</p>
	</footer>
</div>

<style>
	.page-shell {
		min-height: 100vh;
	}

	.content-shell {
		width: min(1200px, calc(100% - 2rem));
		margin: 0 auto;
	}

	.site-footer {
		padding: 1.5rem 1rem 2rem;
		text-align: center;
		color: var(--muted);
	}

	.site-footer p {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.7rem 1rem;
		border: 1px solid var(--border);
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.5);
		backdrop-filter: blur(12px);
	}

</style>