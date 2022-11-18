export const getCommit = async () => {
    const res = await (await fetch('https://api.github.com/repos/abysmal26/website/git/refs/heads/main')).json();
    const sha: string = res.object.sha;
    const hash = sha.slice(0, 7);

    return hash;
}