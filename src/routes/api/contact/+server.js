import { json } from '@sveltejs/kit';

const webhook = process.env.CONTACT_WEBHOOK ?? '';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request }) {
    const { originURL, inputName, inputEmail, inputMessage } = await request.json();

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
        return json({ success: false });
    }

    return json({ success: true });
}