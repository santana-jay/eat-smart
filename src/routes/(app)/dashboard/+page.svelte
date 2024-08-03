<script>
    import TopNav from "./components/navigation/TopNav.svelte";
    import ScanItem from "./components/scan-item/ScanItem.svelte";
    import History from "./components/history/History.svelte";
    import { activeDashboardPage } from "$lib/firebase";
</script>

<TopNav />
<ScanItem />

{#if $activeDashboardPage === 'scan-item'}
    <ScanItem />
{:else if $activeDashboardPage === 'history'}
    <History />
{/if}
