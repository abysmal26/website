<script lang="ts">
    export let name = '';
</script>

{#if name}
    <span class="text-[#cdd6f4] inline-block">
        on <span class="text-[#89dceb]">  {name}</span>
    </span>
{/if}