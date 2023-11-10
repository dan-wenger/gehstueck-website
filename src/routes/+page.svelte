<script>
  import { fit, parent_style } from "@leveluptuts/svelte-fit";
  import SvelteSeo from "svelte-seo";
</script>

<SvelteSeo
  title="Gehstück, das."
  description="Ein Text, für den Spaziergang geschrieben, gelangt durch den Spaziergang zur Geltung. Wenn Du noch nie davon gehört hast, dann deshalb, weil ich das Gehstück als Textgattung erst begründe, indem Du das liest, gerade begründet habe."
/>

<main lang="de">
  <div style={parent_style}>
    <h1 id="titel" use:fit>Gehstück,&nbsp;das.</h1>
  </div>
  <p id="subline" class="blocksatz" lang="de">
    Ein Text, für den <span class="wider">Spaziergang</span> geschrieben,
    gelangt durch den <span class="wider">Spaziergang</span> zur Geltung. Wenn
    Du noch nie davon gehört hast, dann deshalb, weil ich das Gehstück als
    <span class="wider">Textgattung</span>
    erst begründe, indem Du das liest, gerade
    <span class="wider">begründet</span> habe.
  </p>
  <div id="paragraphen" class="blocksatz">
    <p>
      §1 Das Gehstück bedient sich des Gehens als KULTURELLE TECHNIK der
      Wahrnehmung und des Denkens.
    </p>
    <p>
      §2 Das Gehstück bietet eine besondere Art von Texterfahrung durch den
      Einbezug ALLER SINNE.
    </p>
    <p>
      §3 Das Gehstück ist ZUGÄNGLICH, wie es Kunst und Literatur gerne von sich
      behaupten, es aber nur selten sind. Im Gehen finden wir einen
      niederschwelligen Zugang zum Text.
    </p>
    <p>
      §4 Das Gehstück ist PARTIZIPATIV, indem, wer hört, mitspaziert. Wer hört,
      ist Teil der Lesebewegung, Teil des Gehstücks. Alle Menschen können
      spazieren, das heisst, sich Zeit nehmen, um wahr-zu-nehmen.
    </p>
    <p>
      §5 Das Gehstück ist INTERSUBJEKTIV. Das gemeinsame Gehen schafft den
      nötigen Boden zur Verständigung. Die gemeinsamen Schritte bedeuten die
      Gleichwertigkeit der Erfahrungen.
    </p>
    <p>
      §6 Das Gehstück ist KÜNSTLERISCH-EMPIRISCH. Die Textgattung trägt die
      Sprache in den Raum und stellt ihre Texte auf die Probe. Immer ist sie mit
      der existentiellen Spannung zwischen Bild und Wirklichkeit, zwischen den
      Grenzen der Sprache und denen unserer unmittelbaren Erfahrung beschäftigt,
      der drohenden Nutzlosigkeit der Worte. Sie lässt uns den Widerspruch
      spüren. Die Textgattung verbietet sich die Sterilität der klassischen
      Ausstellungs- und Bühnenräume.
    </p>
    <p>
      §7 Das Gehstück denkt den KONTEXT mit. Kein TEXT ohne KON. Lesungen sind
      gelebte Texte. Eine Lesung sollte einen Text so in einen Zusammenhang
      führen, damit er wirkt und nicht einschläfert.
    </p>
    <p>
      §8 Das Gehstück setzt sich dem ZUFALL aus – durch eine Welt gehen, die wir
      nicht kontrollieren, noch nicht einmal verstehen: Wichtig ist die Haltung!
      Spazieren heisst, mit dem Zufall gehen.
    </p>
    <p>
      §9 Das Gehstück stellt sich in den Dienst des ALLTAGS. Ziel jeder freien
      Ausdrucksweise und damit der Kunst im weitesten Sinn kann nur sein, unsere
      Lebenswelt zu bereichern. Das Gehstück soll uns was an-gehen. Anfang und
      Ende des Gehstücks bilden deshalb die alltäglichen Erfahrungen, an die
      jede lebensdienliche Kunst zurückgebunden werden muss. Spazieren heisst,
      den Alltag leben.
    </p>
    <p>
      §10 Das Gehstück baut auf BEWÄHRTER PRAXIS. Selbst wenn das (Geh)Stück
      nicht überzeugen würde, kämen die Teilnehmenden immerhin in den Genuss
      eines Spaziergangs.
    </p>
    <p>
      §11 Das Gehstück überzeugt AUS SICH. Alle Paragrafen hier sind
      intellektueller Anhang. <mark
        >Du musst die aufgezählten Punkte weder gelesen noch verstanden haben,
        um an einem Gehstück teilzunehmen.</mark
      >
    </p>
  </div>
  <div class="container-right">
    <p>Léonard Wiesendanger<br />Basel, Januar 2023</p>
    <p>
      Geschrieben zum Auftakt der Lesungsreihe „Gehstück, das.“ (2023), in welcher
      gattungsfremde Texte spazierfertig gemacht wurden mit dem Ziel, die
      Eigenständigkeit der neuen Textgattung „Gehstück“ besser verstehen und
      begründen zu können.
    </p>
    <h2 id="open-call">OPEN CALL</h2>
    <p>
      Einsendungen für die nächste Lesungsreihe „Gehstück, das. 2024“ an
      vvvw[at]bluewin.ch
    </p>
  </div>
</main>

<style>
  :global(body) {
    margin: 0;
    font-family: "Crimson Text", serif;
  }

  main {
    padding: .7rem;
    padding-top: 0.2rem;
    padding-bottom: 4rem;
  }

  #titel {
    margin: 0;
  }

  #open-call {
    margin-bottom: 0;
    font-size: 3rem;
  }

  #subline {
    font-size: 1.8rem;
  }
  .wider {
    letter-spacing: 0.6rem;
  }
  p {
    font-size: 1.2rem;
    margin: 0.6rem;
  }

  mark {
    margin: 0 -0.2em;
    padding: 0.1em 0.2em;
    border-radius: 0.7em 0.3em;
    background: transparent;
    background-color: #facd5a;
  }

  .blocksatz {
    text-align: justify;
    hyphens: none;
  }
  #paragraphen {
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
  .container-right {
    min-width: 45ch;
    max-width: 50%;
    margin-left: auto;
    text-align: right;
  }
</style>
