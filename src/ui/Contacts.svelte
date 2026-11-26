<script lang="ts">
	import Mail from 'lucide-svelte/icons/mail';
	import Linkedin from 'lucide-svelte/icons/linkedin';
	import GitHub from 'lucide-svelte/icons/github';
	import ArrowUpRight from 'lucide-svelte/icons/arrow-up-right';
	import { Icon as IconType } from 'lucide-svelte';

	type ContactType = {
		id: number;
		icon?: typeof IconType;
		customSvg?: 'x' | 'discord';
		link: string;
		name: string;
	};

	const contactIcons: ContactType[] = [
		{ id: 0, icon: Mail, link: 'mailto:akintadetemi19@gmail.com', name: 'Email' },
		{
			id: 1,
			customSvg: 'discord',
			link: 'https://discord.com/users/1061727196953190440',
			name: 'Discord'
		},
		{ id: 2, customSvg: 'x', link: 'https://x.com/Temi_tade2805', name: 'X' },
		{
			id: 3,
			icon: Linkedin,
			link: 'https://linkedin.com/in/temiloluwa-akintade-4b6798254',
			name: 'LinkedIn'
		},
		{ id: 4, icon: GitHub, link: 'https://github.com/Temi-Tade', name: 'GitHub' }
	];
</script>

<section class="contact-section" id="contacts">
	<div class="contact-panel">
		<div class="contact-copy">
			<span class="kicker">Contact</span>
			<h2>Let’s build something meaningful.</h2>
			<p>
				I work across web, blockchain, systems, and embedded engineering - from product interfaces
				and smart contracts to developer tooling and technical partnerships.
			</p>
		</div>

		<div class="contact-actions">
			<a class="primary-contact" href="mailto:akintadetemi19@gmail.com">
				Book a call
				<ArrowUpRight size={17} />
			</a>
			<div class="social-links">
				{#each contactIcons as contact (contact.id)}
					<a
						href={contact.link}
						title={contact.name}
						aria-label={contact.name}
						target={contact.link.startsWith('http') ? '_blank' : undefined}
						rel={contact.link.startsWith('http') ? 'noreferrer' : undefined}
					>
						{#if contact.customSvg === 'x'}
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path
									d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932zm-1.292 19.493h2.039L6.486 3.24H4.298z"
								/>
							</svg>
						{:else if contact.customSvg === 'discord'}
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path
									d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
								/>
							</svg>
						{:else if contact.icon}
							{@const Icon = contact.icon}
							<Icon size={19} />
						{/if}
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.contact-section {
		margin-top: 2.5rem;
		padding: 2.5rem 0 2rem;
	}

	.contact-panel {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		padding: clamp(1.5rem, 3vw, 2.5rem);
		border-radius: 0.95rem;
		border: 1px solid var(--border);
		background:
			radial-gradient(ellipse 65% 85% at 100% 0%, rgba(59, 130, 246, 0.14), transparent 70%),
			var(--surface);
		box-shadow: var(--shadow);
	}

	.contact-copy {
		max-width: 38rem;
	}

	.kicker {
		display: block;
		font-family: var(--font-mono);
		font-size: 0.78rem;
		font-weight: 500;
		letter-spacing: 0.04em;
		color: var(--primary-bright);
	}

	.contact-copy h2 {
		margin: 0.55rem 0 0.55rem;
		font-size: clamp(1.8rem, 3vw, 2.55rem);
		line-height: 1.12;
		letter-spacing: -0.03em;
	}

	.contact-copy p {
		margin: 0;
		color: var(--muted);
		line-height: 1.68;
	}

	.contact-actions {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 1rem;
		flex-shrink: 0;
	}

	.primary-contact {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.45rem;
		padding: 0.8rem 1.4rem;
		border-radius: 0.55rem;
		background: var(--primary);
		color: #ffffff;
		font-size: 0.92rem;
		font-weight: 600;
		white-space: nowrap;
		transition:
			background-color 160ms cubic-bezier(0.16, 1, 0.3, 1),
			transform 160ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	.primary-contact:hover,
	.primary-contact:focus-visible {
		background: var(--primary-hover);
		transform: translateY(-1px);
	}

	.social-links {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.65rem;
	}

	.social-links a {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.75rem;
		height: 2.75rem;
		border-radius: 0.55rem;
		background: var(--surface-elevated);
		color: var(--ink);
		border: 1px solid var(--border);
		transition:
			background-color 160ms cubic-bezier(0.16, 1, 0.3, 1),
			border-color 160ms cubic-bezier(0.16, 1, 0.3, 1),
			color 160ms cubic-bezier(0.16, 1, 0.3, 1),
			transform 160ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	.social-links a:hover,
	.social-links a:focus-visible {
		background: rgba(59, 130, 246, 0.14);
		border-color: rgba(96, 165, 250, 0.45);
		color: var(--primary-bright);
		transform: translateY(-2px);
	}

	.social-links svg {
		width: 1.15rem;
		height: 1.15rem;
		fill: currentColor;
	}

	@media (max-width: 768px) {
		.contact-panel {
			flex-direction: column;
			align-items: flex-start;
		}

		.contact-actions {
			align-items: flex-start;
		}
	}
</style>