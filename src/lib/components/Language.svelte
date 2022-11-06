<script lang="ts">
    export let lang = '';

    let nodeVersion = '18.11.0';
    let langMap: Record<string, string>;
    $: langMap = {
        js: `<span class="text-[#94e2d5]"> node ${nodeVersion}`,
        ts: `<span class="text-[#94e2d5]"> node ${nodeVersion}`,
        svelte: `<span class="text-[#94e2d5]"> node ${nodeVersion}`
    };
</script>

{#if langMap[lang]}
    <span class="text-[#cdd6f4] inline-block">
        via {@html langMap[lang]}
    </span>
{/if}