<!-- prettier-ignore -->
<script lang="ts">
    let bitcoinWallet = 'bc1qspqkgle0u8n6a09rfv62nugn8ghkcvgh7nyj5w'
    let ethereumWallet = '0x17c494ad62B80f54766f03726C623381977BB40a'
    let moneroWallet = '475Ug7rLP78c5KDJ8NMrBWR6d95dMaceDK2sJy7cw9pRQu6u7As8eY118gAPRLQUdnBu4pAeUAm5hZyUS6uVwBBnNAXC3Bo'
    let rippleWallet = 'rD7imyCvaWtWieVuyQyQmbiaW7Y8bEqXPb'
    let dogecoinWallet = 'DSVScF3HyMWZV5V9h38S9iDM3vKPpSU7Ey'
    let cardanoWallet = 'addr1q8n7gamnz80s4ef3wryveh6jm2verf7qksmmuu29kgyhf8h8u3mhxywlptjnzuxgen049k5ejxnupdphhec5tvsfwj0qdr93t0'
    let solanaWallet = '3bzezrL71EvmAVC3w9GSoUCLDnd8zwYxRognhe3QBiZR'

    function copy(text: string) { navigator.clipboard.writeText(text) }
</script>

<!-- prettier-ignore -->
<section class="p-8 sm:p-12 lg:p-24 lg:py-16 font-jetBrains z-10 flex flex-col sm:flex-row gap-y-10 justify-between">
    <div class="flex flex-col gap-7">
        <div class="min-h-[3em] lg:min-h-0">
            <span class="text-[#cba6f7]">make a donation with cryptocurrencies</span>
        </div>
        <div class="text-[#cdd6f4]">
            <p>
                Bitcoin: <code>{bitcoinWallet}</code><br>
                <button on:click={() => copy(bitcoinWallet)}>Copy wallet</button>
            </p>
            <br>
            <p>
                Ethereum: <code>{ethereumWallet}</code><br>
                <button on:click={() => copy(ethereumWallet)}>Copy wallet</button>
            </p>
            <br>
            <p>
                Monero: <code>{moneroWallet}</code><br>
                <button on:click={() => copy(moneroWallet)}>Copy wallet</button>
            </p>
            <br>
            <p>
                Ripple: <code>{rippleWallet}</code><br>
                <button on:click={() => copy(rippleWallet)}>Copy wallet</button>
            </p>
            <br>
            <p>
                Dogecoin: <code>{dogecoinWallet}</code><br>
                <button on:click={() => copy(dogecoinWallet)}>Copy wallet</button>
            </p>
            <br>
            <p>
                Cardano: <code>{cardanoWallet}</code><br>
                <button on:click={() => copy(cardanoWallet)}>Copy wallet</button>
            </p>
            <br>
            <p>
                Solana: <code>{solanaWallet}</code><br>
                <button on:click={() => copy(solanaWallet)}>Copy wallet</button>
            </p>
        </div>
        <div>
            <a href=".." class="text-[#b4befe] hover:underline">← back</a>
        </div>
    </div>
</section>

<style>
    code {
        @apply bg-[#313244] border border-[#45475a] rounded py-px px-1;
        word-break: break-all;
    }

    button {
        @apply bg-[#313244] border border-[#6c7086] rounded hover:bg-[#6c7086] hover:text-[#181825] py-0.5 px-2 mt-1;
    }
</style>
