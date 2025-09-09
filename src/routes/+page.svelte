<!-- src/routes/+page.svelte -->
<script>
  let domain = '';
  let available = null;

  async function checkDomain() {
    try {
      const res = await fetch(`/api/domain-check?domain=${domain}`);
      const data = await res.json();
      available = data.available;
    } catch (err) {
      available = false;
    }
  }
</script>

<h1>Domain Checker</h1>

<form on:submit|preventDefault={checkDomain}>
  <input type="text" bind:value={domain} placeholder="Enter a domain" />
  <button type="submit">Check Availability</button>
</form>

{#if available !== null}
  {#if available}
    <p>The domain <strong>{domain}</strong> is available!</p>
  {:else}
    <p>The domain is not available.</p>
  {/if}
{/if}