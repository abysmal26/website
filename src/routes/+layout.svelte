<script lang="ts">
    import { onMount } from 'svelte';
    import '$lib/app.css';

    // prettier-ignore
    onMount(() => {
        onblur = () => {
            document.body.className = 'bg-[#1e1e2e] motion-safe:transition-colors motion-safe:duration-300';
        };

        onfocus = () => {
            document.body.className = 'bg-[#11111b] motion-safe:transition-colors motion-safe:duration-300';
        };
    });
</script>

<svelte:head>
    <title>アビスマル</title>

    <meta name="title" content="Abysmal" />
    <meta
        name="description"
        content="Quem não tem colírios usa óculos escuros"
    />
    <!-- <meta rel="canonical" href="https://abysmal.eu.org"> -->

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://abysmal.eu.org" />
    <meta property="og:title" content="Abysmal" />
    <meta
        property="og:description"
        content="Quem não tem colírios usa óculos escuros"
    />
    <meta property="og:image" content="https://abysmal.eu.org/avatar.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://abysmal.eu.org" />
    <meta property="twitter:title" content="Abysmal" />
    <meta
        property="twitter:description"
        content="Quem não tem colírios usa óculos escuros"
    />
    <meta
        property="twitter:image"
        content="https://abysmal.eu.org/avatar.png"
    />

    <link rel="me" href="https://mastodon.social/@abysmal26" />

    <link rel="preconnect" href="https://cdn.jsdelivr.net" />
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/abysmal26/snippets/JetBrains-Mono/font.css"
    />

    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
</svelte:head>

<main class="text-[#cdd6f4]">
    <slot />
</main>
