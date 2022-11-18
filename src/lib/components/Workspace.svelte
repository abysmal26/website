<script lang="ts">
    export let workspace = '';
</script>

{#if workspace}
    <span class="text-[#cdd6f4] inline-block">
        in <span class="text-[#f5c2e7]">{workspace.replace(/[\u200B-\u200D\uFEFF]/g, '')}</span>
    </span>
{/if}