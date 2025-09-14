<script lang='ts'>
    let { children, onClose } = $props();
</script>

<div class="fixed inset-0 bg-[#d7d7d777] backdrop-blur-[1rem]">
    <div class="p-4 bg-[#fff] absolute bottom-0 right-5 left-5 rounded-t-lg text-center shadow-md">
        <div class="absolute top-1 right-2">
            <button class="text-xl" onclick={() => onClose()}>&times;</button>
        </div>

        {@render children()}
    </div>
</div>