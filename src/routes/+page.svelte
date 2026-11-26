<script lang="ts">
	import About from "../ui/About.svelte";
	import Projects from "../ui/Projects.svelte";
	import Spotlights from "../ui/Spotlights.svelte";
	import Articles from "../ui/Articles.svelte";
	import Contacts from "../ui/Contacts.svelte";
	import Header from "../ui/Header.svelte";
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
			'https://peerlist.io/temi_lolu',
			'https://discord.com/users/1061727196953190440'
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
	<script type="application/ld+json">
		{@html JSON.stringify(personSchema)}
	</script>
</svelte:head>

<div class="page-shell" id="top">
	<Header />
	<main class="content-shell">
		<About />
		<Projects />
		<Spotlights />
		<Articles />
		<Contacts />
	</main>

	<footer class="site-footer">
		<div class="footer-inner">
			<p>
				Made with <Heart fill="#ef4444" color="#ef4444" size={15} /> by Temiloluwa. All rights reserved.
			</p>
			<a href="#top" class="back-top">Back to top</a>
		</div>
	</footer>
</div>

<style>
	.page-shell {
		min-height: 100vh;
	}

	.content-shell {
		width: min(1180px, calc(100% - 2rem));
		margin: 0 auto;
	}

	.site-footer {
		width: min(1180px, calc(100% - 2rem));
		margin: 1rem auto 0;
		padding: 1.5rem 0 2.5rem;
		border-top: 1px solid var(--border);
		color: var(--subtle);
		font-size: 0.875rem;
	}

	.footer-inner {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem 1.5rem;
	}

	.site-footer p {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		margin: 0;
	}

	.back-top {
		color: var(--muted);
		font-weight: 500;
		transition: color 180ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	.back-top:hover,
	.back-top:focus-visible {
		color: var(--ink);
	}
</style>