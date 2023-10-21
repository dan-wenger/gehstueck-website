import{s as L,f as A,n as b}from"../chunks/scheduler.cc1c0861.js";import{S as I,i as y,g as m,s as z,h as g,j as D,y as o,f as w,c as G,k as d,a as H,x as u}from"../chunks/index.7f2fc51f.js";const C=(s,{min_size:e=10,max_size:t=100}={min_size:10,max_size:100})=>{const n=()=>{s.parentElement&&P(s,s.parentElement,e,t)},a=new ResizeObserver(n);return a.observe(s==null?void 0:s.parentElement),{destroy(){a.disconnect()}}};function N({clientWidth:s,clientHeight:e,scrollWidth:t,scrollHeight:n}){return t>s||n>e}function P(s,e,t,n){let a=t,h=!1,i=t;for(s.style.fontSize=`${i}px`;!h&&a<n;)h=N(e),h||(s.style.fontSize=`${a}px`,a++);i=a-2,s.style.fontSize=`${i}px`}const R="display: inline-block; width: 100%; height: 100%;";function W(s){let e,t,n,a="Gehstück, das.",h,i,T=`Ein Text, für den <span class="wider svelte-1e4um7i">Spaziergang</span> geschrieben,
    gelangt durch den <span class="wider svelte-1e4um7i">Spaziergang</span> zur Geltung. Wenn
    Du noch nie davon gehört hast, dann deshalb, weil ich das Gehstück als
    <span class="wider svelte-1e4um7i">Textgattung</span>
    erst begründe, indem Du das liest, gerade
    <span class="wider svelte-1e4um7i">begründet</span> habe.`,v,r,x=`<p class="svelte-1e4um7i">§1 Das Gehstück bedient sich des Gehens als kulturelle Technik der
      Wahrnehmung und des Denkens.</p> <p class="svelte-1e4um7i">§2 Das Gehstück bietet eine besondere Art von Texterfahrung durch den
      Einbezug ALLER SINNE.</p> <p class="svelte-1e4um7i">§3 Das Gehstück ist ZUGÄNGLICH, wie es Kunst und Literatur gerne von sich
      behaupten, es aber nur selten sind. Im Gehen finden wir einen
      niederschwelligen Zugang zum Text.</p> <p class="svelte-1e4um7i">§4 Das Gehstück ist PARTIZIPATIV, indem, wer hört, mitspaziert. Wer hört,
      ist Teil der Lesebewegung, Teil des Gehstücks. Alle Menschen können
      spazieren, das heisst, sich Zeit nehmen, um wahr-zu-nehmen.</p> <p class="svelte-1e4um7i">§5 Das Gehstück ist INTERSUBJEKTIV. Das gemeinsame Gehen schafft den
      nötigen Boden zur Verständigung. Die gemeinsamen Schritte bedeuten die
      Gleichwertigkeit der Erfahrungen.</p> <p class="svelte-1e4um7i">§6 Das Gehstück ist KÜNSTLERISCH-EMPIRISCH. Die Textgattung trägt die
      Sprache in den Raum und stellt ihre Texte auf die Probe. Immer ist sie mit
      der existentiellen Spannung zwischen Bild und Wirklichkeit, zwischen den
      Grenzen der Sprache und denen unserer unmittelbaren Erfahrung beschäftigt,
      der drohenden Nutzlosigkeit der Worte. Sie lässt uns den Widerspruch
      spüren. Die Textgattung verbietet sich die Sterilität der klassischen
      Ausstellungs- und Bühnenräume.</p> <p class="svelte-1e4um7i">§7 Das Gehstück denkt den KONTEXT mit. Kein TEXT ohne KON. Lesungen sind
      gelebte Texte. Eine Lesung sollte einen Text so in einen Zusammenhang
      führen, damit er wirkt und nicht einschläfert.</p> <p class="svelte-1e4um7i">§8 Das Gehstück setzt sich dem ZUFALL aus – durch eine Welt gehen, die wir
      nicht kontrollieren, noch nicht einmal verstehen: Wichtig ist die Haltung!
      Spazieren heisst, mit dem Zufall gehen.</p> <p class="svelte-1e4um7i">§9 Das Gehstück stellt sich in den Dienst des ALLTAGS. Ziel jeder freien
      Ausdrucksweise und damit der Kunst im weitesten Sinn kann nur sein, unsere
      Lebenswelt zu bereichern. Das Gehstück soll uns was an-gehen. Anfang und
      Ende des Gehstücks bilden deshalb die alltäglichen Erfahrungen, an die
      jede lebensdienliche Kunst zurückgebunden werden muss. Spazieren heisst,
      den Alltag leben.</p> <p class="svelte-1e4um7i">§10 Das Gehstück baut auf BEWÄHRTER PRAXIS. Selbst wenn das (Geh)Stück
      nicht überzeugen würde, kämen die Teilnehmenden immerhin in den Genuss
      eines Spaziergangs.</p> <p class="svelte-1e4um7i">§11 Das Gehstück überzeugt AUS SICH. Alle Paragrafen hier sind
      intellektueller Anhang oder auch – im Fall dieser Einladungskarte –
      Zierde. Du musst die aufgezählten Punkte weder gelesen noch verstanden
      haben, um an einem Gehstück teilzunehmen.</p>`,f,c,S=`<p class="svelte-1e4um7i">Basel, Januar 2023 Léonard Wiesendanger</p> <p class="svelte-1e4um7i">Geschrieben zum Auftakt der Lesungsreihe „Gehstück, das.“, in welcher
      gattungsfremde Texte spazierfertig gemacht wurden mit dem Ziel, die
      Eigenständigkeit der neuen Textgattung „Gehstück“ besser verstehen und
      begründen zu können.</p> <h2 class="svelte-1e4um7i">OPEN CALL</h2> <p class="svelte-1e4um7i">Einsendungen für die Lesungsreihe „Gehstück, das. 2024“ an
      vvvw[at]bluewin.ch</p>`,k,_;return{c(){e=m("main"),t=m("div"),n=m("h1"),n.textContent=a,h=z(),i=m("p"),i.innerHTML=T,v=z(),r=m("div"),r.innerHTML=x,f=z(),c=m("div"),c.innerHTML=S,this.h()},l(p){e=g(p,"MAIN",{class:!0});var l=D(e);t=g(l,"DIV",{style:!0});var E=D(t);n=g(E,"H1",{class:!0,"data-svelte-h":!0}),o(n)!=="svelte-1hcylf7"&&(n.textContent=a),E.forEach(w),h=G(l),i=g(l,"P",{id:!0,class:!0,"data-svelte-h":!0}),o(i)!=="svelte-xv24kc"&&(i.innerHTML=T),v=G(l),r=g(l,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),o(r)!=="svelte-1t9dpsq"&&(r.innerHTML=x),f=G(l),c=g(l,"DIV",{class:!0,"data-svelte-h":!0}),o(c)!=="svelte-ew24vl"&&(c.innerHTML=S),l.forEach(w),this.h()},h(){d(n,"class","svelte-1e4um7i"),d(t,"style",R),d(i,"id","subline"),d(i,"class","svelte-1e4um7i"),d(r,"id","paragraphen"),d(r,"class","svelte-1e4um7i"),d(c,"class","container-right svelte-1e4um7i"),d(e,"class","svelte-1e4um7i")},m(p,l){H(p,e,l),u(e,t),u(t,n),u(e,h),u(e,i),u(e,v),u(e,r),u(e,f),u(e,c),k||(_=A(C.call(null,n)),k=!0)},p:b,i:b,o:b,d(p){p&&w(e),k=!1,_()}}}class K extends I{constructor(e){super(),y(this,e,null,W,L,{})}}export{K as component};
