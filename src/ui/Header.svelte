<script lang="ts">
    import Home from 'lucide-svelte/icons/house';
    import About from 'lucide-svelte/icons/info';
    import Cog from 'lucide-svelte/icons/cog';
	import Phone from 'lucide-svelte/icons/phone';
    import Menu from 'lucide-svelte/icons/menu';
	import X from 'lucide-svelte/icons/x';
	import type { Icon as IconType } from 'lucide-svelte';

    type Links = {
        id: number;
        name: string;
        href: string;
        icon: typeof IconType;
    }

    const links: Links[] = [
        { id: 0, name: "Home", href: "#", icon: Home },
        { id: 1, name: "About", href: "#about", icon: About },
        { id: 2, name: "Projects", href: "#projects", icon: Cog },
        { id: 3, name: "Contacts", href: "#contacts", icon: Phone },
    ];

    let isMenuOpen = $state(false);
</script>

<section class="sticky top-0 bg-[#fffd] backdrop-blur-md shadow-sm">
    <header class="flex items-center justify-between p-[.5rem]">
        <div>
            <img src="/TEEE.png" alt="Temiloluwa" class="md:w-20 w-15">
        </div>

        <div class="md:static fixed right-2 top-2 flex items-top">
            <div class="md:hidden">
                <button 
                    class="focus:bg-blue-900 focus:text-[#fff] mr-1"
                    onclick={() => isMenuOpen = !isMenuOpen}>
                        {#if isMenuOpen}
                            <X/>
                        {:else}
                            <Menu/>
                        {/if}
                </button>
            </div>

            <nav class="md:block {isMenuOpen ? 'block rounded-sm shadow-md bg-[#fff]' : 'hidden'}">
                <ul class="flex md:flex-row flex-col p-[.75rem] md:w-[35rem] md:justify-around justify-end">
                    {#each links as link (link.id)}
                        {@const Icon = link.icon}
                        <li class="w-[23%] grid md:place-items-center">
                            <a 
                                href={link.href}
                                class="inline-flex text-center w-[fit-content] text-blue-900 p-1 hover:underline decoration-2"
                            >
                                <Icon/>
                                {link.name}
                            </a>
                        </li>
                    {/each}
                </ul>
            </nav>
        </div>
        
    </header>
</section>