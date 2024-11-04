<style>@import './Home.css';</style>
<script>
import Header from '../Header/Header.svelte';
    let isActive = false
    let isExtActive = false
    function toggleClass() {
        isActive = !isActive;
    }
    function extToggleClass() {
        isExtActive = !isExtActive;
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
    <div class="header-logo-main">
        <svg width="65" height="65" viewBox="0 0 491 506" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M345.998 46.7013L345.998 46.7011C338.543 41.4521 329.502 38.9441 320.409 39.6034L78.1449 57.1692C57.4884 58.667 41.5 75.8709 41.5 96.5854V352.042C41.5 360.592 44.2714 368.912 49.3988 375.752L49.3989 375.753L101.235 444.909L106.436 441.01L101.235 444.909C112.418 459.828 130.288 468.204 148.905 467.248L420.85 453.294C437.469 452.441 450.5 438.711 450.5 422.07V140.796C450.5 127.937 444.247 115.88 433.734 108.478L345.998 46.7013Z" fill="black" stroke="white" stroke-width="13"/>
            <path d="M383.118 116.102L136.295 131.3C129.929 131.693 123.657 129.61 118.788 125.488L83.6975 95.7781C79.7278 92.4172 81.8722 85.9299 87.0619 85.6002L320.675 70.7588C328.395 70.2683 336.043 72.5073 342.281 77.0848L385.305 108.654C388.416 110.938 386.97 115.865 383.118 116.102Z" fill="white"/>
            <path d="M130.243 415.996L126.608 172.294C126.477 163.532 133.211 156.194 141.947 155.579L401.591 137.283C411.136 136.611 419.25 144.177 419.25 153.752V401.112C419.25 409.865 412.424 417.096 403.691 417.595L147.682 432.233C138.313 432.769 130.383 425.386 130.243 415.996Z" fill="white"/>
            <path d="M387.936 276.791C388.226 281.369 386.248 286.501 381.096 292.034C375.932 297.581 367.965 303.07 357.493 308.051C336.582 317.997 306.864 325.349 273.345 327.473C239.825 329.595 209.418 326.049 187.42 318.821C176.404 315.202 167.81 310.76 161.987 305.91C156.179 301.071 153.57 296.229 153.281 291.65C152.991 287.072 154.969 281.94 160.122 276.407C165.286 270.86 173.252 265.37 183.724 260.39C204.635 250.444 234.353 243.092 267.873 240.969C301.393 238.846 331.8 242.392 353.797 249.62C364.813 253.24 373.408 257.682 379.23 262.531C385.038 267.37 387.647 272.212 387.936 276.791Z" stroke="black" stroke-width="12"/>
            <path d="M320.615 177.76C324.764 179.711 328.306 183.917 330.671 191.101C333.041 198.301 334.012 207.931 333.33 219.512C331.968 242.639 324.094 272.24 309.808 302.654C295.521 333.069 277.77 358.025 260.844 373.832C252.367 381.748 244.338 387.146 237.285 389.914C230.249 392.677 224.752 392.633 220.603 390.681C216.453 388.73 212.911 384.523 210.547 377.34C208.177 370.14 207.205 360.51 207.887 348.929C209.25 325.802 217.123 296.201 231.41 265.786C245.696 235.371 263.447 210.416 280.374 194.608C288.85 186.693 296.88 181.296 303.932 178.526C310.968 175.764 316.465 175.808 320.615 177.76Z" stroke="black" stroke-width="12"/>
            <path d="M204.913 186.668C208.715 184.105 214.141 183.219 221.516 184.872C228.908 186.529 237.669 190.632 247.256 197.158C266.401 210.188 287.758 232.132 306.528 260.002C325.296 287.872 337.604 315.918 342.486 338.564C344.931 349.905 345.443 359.571 344.202 367.049C342.965 374.509 340.107 379.208 336.304 381.771C332.502 384.335 327.077 385.221 319.701 383.569C312.308 381.912 303.549 377.807 293.961 371.282C274.817 358.252 253.459 336.308 234.69 308.438C215.921 280.568 203.614 252.522 198.732 229.876C196.287 218.535 195.774 208.869 197.016 201.391C198.253 193.931 201.111 189.232 204.913 186.668Z" stroke="black" stroke-width="12"/>
            <path d="M272.172 308.935C285.814 308.072 296.173 296.306 295.31 282.656C294.446 269.006 282.688 258.641 269.046 259.505C255.404 260.369 245.045 272.134 245.908 285.784C246.772 299.434 258.531 309.799 272.172 308.935Z" fill="black"/>
        </svg>                
    </div>
    <!-- svelte-ignore a11y_invalid_attribute -->
    <a href="https://jakerase.notion.site/Notion-Components-eacec70711124f5ebe63470a61cbfbfe?pvs=74"><h3 class="header-link">Docs</h3></a>
    <!-- svelte-ignore a11y_invalid_attribute -->
    <a href="https://www.npmjs.com/package/notion-components-react"><h3 class="header-link">Npm</h3></a>
    <!-- svelte-ignore a11y_invalid_attribute -->
    <a href="https://github.com/definiteconfusion/notion-components"><h3 class="header-link">GitHub</h3></a>
</Header>
<div class="home-container">
    <div class="main-container">
        <div class="content-logo-main">
            <svg width="200" height="200" viewBox="0 0 491 506" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M345.998 46.7013L345.998 46.7011C338.543 41.4521 329.502 38.9441 320.409 39.6034L78.1449 57.1692C57.4884 58.667 41.5 75.8709 41.5 96.5854V352.042C41.5 360.592 44.2714 368.912 49.3988 375.752L49.3989 375.753L101.235 444.909L106.436 441.01L101.235 444.909C112.418 459.828 130.288 468.204 148.905 467.248L420.85 453.294C437.469 452.441 450.5 438.711 450.5 422.07V140.796C450.5 127.937 444.247 115.88 433.734 108.478L345.998 46.7013Z" fill="black" stroke="white" stroke-width="13"/>
                <path d="M383.118 116.102L136.295 131.3C129.929 131.693 123.657 129.61 118.788 125.488L83.6975 95.7781C79.7278 92.4172 81.8722 85.9299 87.0619 85.6002L320.675 70.7588C328.395 70.2683 336.043 72.5073 342.281 77.0848L385.305 108.654C388.416 110.938 386.97 115.865 383.118 116.102Z" fill="white"/>
                <path d="M130.243 415.996L126.608 172.294C126.477 163.532 133.211 156.194 141.947 155.579L401.591 137.283C411.136 136.611 419.25 144.177 419.25 153.752V401.112C419.25 409.865 412.424 417.096 403.691 417.595L147.682 432.233C138.313 432.769 130.383 425.386 130.243 415.996Z" fill="white"/>
                <path d="M387.936 276.791C388.226 281.369 386.248 286.501 381.096 292.034C375.932 297.581 367.965 303.07 357.493 308.051C336.582 317.997 306.864 325.349 273.345 327.473C239.825 329.595 209.418 326.049 187.42 318.821C176.404 315.202 167.81 310.76 161.987 305.91C156.179 301.071 153.57 296.229 153.281 291.65C152.991 287.072 154.969 281.94 160.122 276.407C165.286 270.86 173.252 265.37 183.724 260.39C204.635 250.444 234.353 243.092 267.873 240.969C301.393 238.846 331.8 242.392 353.797 249.62C364.813 253.24 373.408 257.682 379.23 262.531C385.038 267.37 387.647 272.212 387.936 276.791Z" stroke="black" stroke-width="12"/>
                <path d="M320.615 177.76C324.764 179.711 328.306 183.917 330.671 191.101C333.041 198.301 334.012 207.931 333.33 219.512C331.968 242.639 324.094 272.24 309.808 302.654C295.521 333.069 277.77 358.025 260.844 373.832C252.367 381.748 244.338 387.146 237.285 389.914C230.249 392.677 224.752 392.633 220.603 390.681C216.453 388.73 212.911 384.523 210.547 377.34C208.177 370.14 207.205 360.51 207.887 348.929C209.25 325.802 217.123 296.201 231.41 265.786C245.696 235.371 263.447 210.416 280.374 194.608C288.85 186.693 296.88 181.296 303.932 178.526C310.968 175.764 316.465 175.808 320.615 177.76Z" stroke="black" stroke-width="12"/>
                <path d="M204.913 186.668C208.715 184.105 214.141 183.219 221.516 184.872C228.908 186.529 237.669 190.632 247.256 197.158C266.401 210.188 287.758 232.132 306.528 260.002C325.296 287.872 337.604 315.918 342.486 338.564C344.931 349.905 345.443 359.571 344.202 367.049C342.965 374.509 340.107 379.208 336.304 381.771C332.502 384.335 327.077 385.221 319.701 383.569C312.308 381.912 303.549 377.807 293.961 371.282C274.817 358.252 253.459 336.308 234.69 308.438C215.921 280.568 203.614 252.522 198.732 229.876C196.287 218.535 195.774 208.869 197.016 201.391C198.253 193.931 201.111 189.232 204.913 186.668Z" stroke="black" stroke-width="12"/>
                <path d="M272.172 308.935C285.814 308.072 296.173 296.306 295.31 282.656C294.446 269.006 282.688 258.641 269.046 259.505C255.404 260.369 245.045 272.134 245.908 285.784C246.772 299.434 258.531 309.799 272.172 308.935Z" fill="black"/>
                </svg>                
        </div>
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
            <div class={isExtActive ? 'terminal-box-active' : 'terminal-box'} on:click={extToggleClass}>
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


