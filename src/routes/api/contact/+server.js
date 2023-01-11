import { json } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request }) {
    const { originURL, inputName, inputEmail, inputMessage } = await request.json();

    if (!originURL ||
        !inputName ||
        !inputEmail ||
        !inputMessage
    ) {
        return json({ success: false });
    }

    const embed = {
        'title': 'Contact Form',
        'description': `From ${originURL}`,
        'color': 13346551,
        'fields': [
            {
                'name': ':bust_in_silhouette: **Name**',
                'value': '`' + inputName + '`',
            },
            {
                'name': ':envelop: **Email**',
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
        await fetch('https://discord.com/api/webhooks/1044742615200972940/QxyYKEp6ufaRPqnn-fooHuMSq08n9Qy2Vy2iioMsc4BaTeDWuyjJP8qkg2gBAHoo-mLM', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(params),
        });
    } catch {
        return json({ success: false });
    }

    return json({ success: true });
}