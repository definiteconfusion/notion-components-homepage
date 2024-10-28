<style>@import './Home.css';</style>
<script>
import Header from '../Header/Header.svelte';
    let isActive = false
    function toggleClass() {
        isActive = !isActive;
    }
    function copyToClipboard() {
        navigator.clipboard.writeText('npm i notion-components-react');
        isActive = false;
    }
    function inNewTab() {
        window.open("https://stackblitz.com/edit/notion-components-react?embed=1&file=src%2FApp.jsx", '_blank');
    }
</script>
<Header>
    <img class="header-logo-main" src="https://img.notionusercontent.com/s3/prod-files-secure%2Fadd915c9-4dcc-4234-ab14-937a4b7b6426%2F37c88c03-8905-46d8-8867-ce655a6cc3f0%2Fwegfsdb.png/size/w=250?exp=1730162916&sig=f3D2kGGbRwpR9GPK2f05qRUVyvHVVJbGNOMRgGV1ZqQ" alt="Notion Components Logo">
    <!-- svelte-ignore a11y_invalid_attribute -->
    <a href="https://jakerase.notion.site/Notion-Components-eacec70711124f5ebe63470a61cbfbfe?pvs=74"><h3 class="header-link">Docs</h3></a>
    <!-- svelte-ignore a11y_invalid_attribute -->
    <a href="https://www.npmjs.com/package/notion-components-react"><h3 class="header-link">Npm</h3></a>
    <!-- svelte-ignore a11y_invalid_attribute -->
    <a href="https://github.com/definiteconfusion/notion-components"><h3 class="header-link">GitHub</h3></a>
</Header>
<div class="home-container">
    <div class="main-container">
        <img class="content-logo-main" src="https://img.notionusercontent.com/s3/prod-files-secure%2Fadd915c9-4dcc-4234-ab14-937a4b7b6426%2F37c88c03-8905-46d8-8867-ce655a6cc3f0%2Fwegfsdb.png/size/w=250?exp=1730162916&sig=f3D2kGGbRwpR9GPK2f05qRUVyvHVVJbGNOMRgGV1ZqQ" alt="Notion Components Logo">
        <div class="actions-container">
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <div class={isActive ? 'terminal-box-active' : 'terminal-box'} on:click={toggleClass}>
                <pre class="code-main">
                    <code class="code-executor">npm </code><code class="code-command">i </code><code class="code-query">notion-components-react</code>
                </pre>
            </div>
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <div class="copy-box" on:click={copyToClipboard}>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-clipboard"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>
            </div>
        </div>
        <div class="actions-container" style="margin-top: 50vh; margin-bottom: 2rem;">
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <div class={isActive ? 'terminal-box-active' : 'terminal-box'} on:click={toggleClass}>
                <pre class="code-main">
                    <code class="code-command">Playground</code>
                </pre>
            </div>
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <div class="embed-box" on:click={inNewTab}>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-external-link"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" /><path d="M11 13l9 -9" /><path d="M15 4h5v5" /></svg>
            </div>
        </div>
        <iframe src="https://stackblitz.com/edit/notion-components-react?embed=1&file=src%2FApp.jsx" class="stackblitz-embed-frame" frameborder="0"></iframe>
    </div>
</div>


