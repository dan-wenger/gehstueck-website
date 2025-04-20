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

  // Optional: fügt JSON-LD mit Person-Daten hinzu
  export let includePerson = false;
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
    <meta property="og:url" content={url} />
  {/if}

  {#if tags.length > 0}
    <meta name="keywords" content={tags.join(", ")} />
  {/if}

  {#if ogType}
    <meta property="og:type" content={ogType} />
  {/if}

  <!-- Optionaler JSON-LD Person-Block -->
  {#if includePerson}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Léonard Wiesendanger",
        "alternateName": [
          "Leonard Wiesendanger",
          "Leon Wiesendanger",
          "Leo Wiesendanger",
          "lwiesendanger",
          "leowie",
          "LJVW"
        ],
        "url": "https://leowie.ch",
        "sameAs": [
          "https://www.gehstück.ch",
          "https://dieabstraktebanane.ch/",
          "https://www.lokal-fuer-raumbegehung.ch/",
          "https://www.instagram.com/zitatzitrone/",
          "https://www.instagram.com/lwiesendanger/",
          "https://www.instagram.com/vvvw.install/"
        ]
      })}
    </script>
  {/if}
</svelte:head>