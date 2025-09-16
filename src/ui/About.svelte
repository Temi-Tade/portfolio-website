<script lang="ts">
    import Download from 'lucide-svelte/icons/file';
    import Computer from 'lucide-svelte/icons/computer';
    import Maintenace from 'lucide-svelte/icons/tool-case';
    import Api from 'lucide-svelte/icons/code';

    type Tool = {
        id: number;
        name:string;
    }

    const tools: Tool[] = [
        { id: 0, name: "JavaScript" },
        { id: 1, name: "TailwindCSS" },
        { id: 2, name: "Svelte" },
        { id: 3, name: "ReactJS" },
        { id: 4, name: "TypeScript" },
        { id: 5, name: "NextJS" },
        { id: 6, name: "Git" },
        { id: 7, name: "Firebase" },
    ]
</script>

<section class="p-[.75rem]" id="about">
    <div class="md:grid grid-cols-2">
        <div class="p-1">
            <h2 class="text-2xl p-1">
               <p>Hello, <br> I am Temiloluwa</p>
               <p class="text-5xl font-bold">Web Developer</p>
            </h2>

            <div class="p-1 my-2">
                <div class="p-1 my-4">
                    <a 
                        class="button-link bg-blue-900 text-[#fff] hover:bg-[#fff] hover:text-blue-900"
                        href="/AKINTADE TEMILOLUWA AYOMIDE CV.pdf"><Download class='inline-block'/> My Resume</a>
                    <button class="text-blue-900 hover:bg-blue-900 hover:text-[#fff]">Got a Project?</button>
                </div>

                <div class="p-2 grid md:grid-cols-4 md:grid-rows-2 grid-cols-2 gap-1 md:p-[1rem] rounded-sm bg-[#e7e7e7]">
                    {#each tools as tool (tool.id)}
                        <p class="rounded-sm p-1 text-lg font-light text-center even:bg-[#d3d3d3] odd:bg-[#c5c5c5]">{tool.name}</p>
                    {/each}
                </div>

                <ul class="pt-4">
                    <li>
                        <p><Computer/> <span>Website and Web App Development</span></p>
                        <hr class="border-[#7777]">
                    </li>
                    <li>
                        <p><Maintenace/> <span>Website and Web App Maintenance</span></p>
                        <hr class="border-[#7777]">
                    </li>
                    <li>
                        <p><Api/> <span>API Integration</span></p>
                        <hr class="border-[#7777]">
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="p-2">
            <div class="grid place-items-center">
                <img 
                    src="/images/temiloluwa.jpg"
                    alt="My_Picture" 
                    width="400"
                    loading="lazy"
                    class="rounded-lg object-cover mt-[-1rem] bg-[#dedede77]">
            </div>

            <div class="px-2">
                <h3 class="text-3xl font-bold mb-4 pt-4">About me</h3>
                <div>
                    <p>I am a web developer with over four years of experience in building web applications that solve problems.</p>
                    <p>I am focused on transforming ideas into code from scratch with JavaScript or libraries and frameworks like ReactJS and Svelte among other technologies. I have worked on projects that featured API and AI integration.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    ul li p{
        padding: .6rem;
        display: flex;
    }

    ul span{
        padding-left: .5rem;
    }
</style>