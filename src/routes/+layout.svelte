<script>
  // All routes/pages will be prerendered during build step
  // --> this creates a static website. no server-side rendering possible
  export const prerender = true;
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,700;1,700&family=Crimson+Text:ital@0;1&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<slot />
