import { envs } from "../../config";


export class DiscordService {

    private readonly discordWebHookUrl: string = envs.DISCORD_WEBHOOK_URL;

    constructor() { }

    async notify(message: string) {


        const body = {

            content: message,
            // embeds: [
            //     {
            //         image: { url: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnV6amo1NGdpMHA3OGNuYTJrNHgwOTJnaGVjdHE3OHE3MmJkenR3YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uQJA39wrz0vJKY37i1/giphy.gif' }
            //     }
            // ]

        }

        const resp = await fetch(this.discordWebHookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        if (!resp.ok) {
            console.error(`Error sending message to discord`);
            return false;
        }

        return true;
    }

}