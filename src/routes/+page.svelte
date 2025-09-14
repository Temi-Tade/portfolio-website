<script>
	import About from "../ui/About.svelte";
	import Contacts from "../ui/Contacts.svelte";
    import Header from "../ui/Header.svelte";
	import Projects from "../ui/Projects.svelte";
    import Heart from 'lucide-svelte/icons/heart';
</script>

<div>
    <Header/>
    <About/>
    <Projects/>
    <Contacts/>

    <!-- footer section -->
     <footer class="text-center bg-[#dedede99] p-1">
        <p>Made with <Heart class='inline stroke-0' fill="red" size={18}/>. All rights reserved.</p>
     </footer>
</div>