<script>
  // All routes/pages will be prerendered during build step
  // --> this creates a static website. no server-side rendering possible
  export const prerender = true;
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Crimson+Text"
  />
</svelte:head>

<slot />
