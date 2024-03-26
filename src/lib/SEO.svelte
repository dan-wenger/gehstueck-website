<script>
  export let title = "Gehstück, das.";
  export let description =
    "Ein Text, für den Spaziergang geschrieben, gelangt durch den Spaziergang zur Geltung.";
  export let url = "https://www.gehstück.ch/";
  export let tags = [
    "gehstück",
    "spaziergang",
    "literarischer spaziergang",
    "basel",
    "leonard wiesendanger",
    "wiesendanger",
    "natur",
    "umwelt",
    "manifest",
    "open call",
    "textgattung",
    "lecture performance",
    "performance",
    "kunst",
  ];
  export let ogType = "website";
</script>

<svelte:head>
  {#if title}
    <title>{title}</title>
    <meta property="og:title" content={title} />
  {/if}
  {#if description}
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
  {/if}
  {#if url}
    <link rel="canonical" href={url} />
  {/if}
  {#if tags.length > 0}
    <meta name="keywords" content={tags.join(",")} />
  {/if}
  {#if ogType}
    <meta property="og:type" content={ogType} />
  {/if}
  
  <meta name="msvalidate.01" content="A9D521576A01F2ACB7E7D4A853C2ECDD" />
</svelte:head>
