<script lang="ts">
    const webhook = process.env.CONTACT_WEBHOOK || '';

    let inputName: string;
    let inputEmail: string;
    let inputMessage: string;
    let submitStatus: string;

    const submitForm = async () => {
        submitStatus = 'submitting';

        const embed = {
            'title': 'Contact Form',
            'description': `From ${window.location.protocol}//${window.location.host}`,
            'color': 13346551,
            'fields': [
                {
                    'name': ':bust_in_silhouette: **Name**',
                    'value': '`' + inputName + '`',
                },
                {
                    'name': ':envelope: **Email**',
                    'value': '`' + inputEmail + '`',
                },
                {
                    'name': ':page_facing_up: **Message**',
                    'value': '```\n' + inputMessage + '\n```',
                },
            ],
        };

        const params = {
            'username': 'Contact Form',
            'avatar_url': 'https://abysmal.eu.org/avatar.png',
            'embeds': [embed],
        };

        try {
            await fetch(webhook, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(params),
            });
        } catch {
            return submitStatus = 'failed';
        }

        submitStatus = 'success';
    };
</script>

<svelte:head>
    <link rel="stylesheet" href="https://tilde.team/css/hacker.css">
</svelte:head>

<section class="p-8 sm:p-12 lg:p-24 lg:py-16 font-jetbrains z-10 flex flex-col sm:flex-row gap-y-10 justify-between">
    <div class="flex flex-col gap-7">
        <div class="well">
            <form on:submit|preventDefault={submitForm}>
                <fieldset>
                    <legend>Contact Form</legend>
                    <div class="form-group">
                        <input type="text" placeholder="Name" class="form-control" bind:value={inputName} required>
                    </div>
                    <div class="form-group">
                        <input type="email" placeholder="Email" class="form-control" bind:value={inputEmail} required>
                        <span class="help-block">Please do not send junk mail, frankly, I'll fuck the sender</span>
                    </div>
                    <div class="form-group">
                        <textarea cols="3" class="form-control" placeholder="Your message" bind:value={inputMessage} required></textarea>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </fieldset>
            </form>

            {#if submitStatus === 'submitting'}
                <div class="alert alert-info">Submitting...</div>
            {:else if submitStatus === 'success'}
                <div class="alert alert-success">Submission success</div>
            {:else if submitStatus === 'failed'}
                <div class="alert alert-danger">Submission failed</div>
            {/if}
        </div>
        <a href=".." class="text-[#b4befe] hover:underline">← back</a>
    </div>
</section>