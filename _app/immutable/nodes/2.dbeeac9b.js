import{s as te,n as F,c as ut,u as _t,g as dt,d as mt}from"../chunks/scheduler.e108d1fd.js";import{S as ne,i as le,e as a,a as _,f as h,y as M,s as ct,c as rt,g as p,h as g,k as r,z as pt,x as w,d as Q,p as gt,t as Y,b as bt,r as ft,u as at,v as st,w as ht,H as kt,A as vt,B as wt}from"../chunks/index.4d556488.js";function m(c){return(c==null?void 0:c.length)!==void 0?c:Array.from(c)}function ce(c,n,l){const e=c.slice();e[1]=n[l][0],e[2]=n[l][1];const t=typeof e[2];return e[3]=t,e}function re(c,n,l){const e=c.slice();e[1]=n[l][0],e[2]=n[l][1];const t=e[1].replace(/([a-z])([A-Z])/g,"$1:$2").toLowerCase();return e[19]=t,e}function fe(c,n,l){const e=c.slice();return e[1]=n[l][0],e[2]=n[l][1],e}function ae(c,n,l){const e=c.slice();return e[24]=n[l],e}function Nt(c){const n=c.slice(),l=n[1].replace(/([a-z])([A-Z])/g,"$1:$2").toLowerCase();return n[19]=l,n}function se(c,n,l){const e=c.slice();return e[1]=n[l][0],e[2]=n[l][1],e}function he(c,n,l){const e=c.slice();return e[24]=n[l],e}function At(c){const n=c.slice(),l=n[1].replace(/([a-z])([A-Z])/g,"$1:$2").toLowerCase();return n[19]=l,n}function ue(c,n,l){const e=c.slice();return e[1]=n[l][0],e[2]=n[l][1],e}function _e(c,n,l){const e=c.slice();return e[24]=n[l],e}function Tt(c){const n=c.slice(),l=n[1].replace(/([a-z])([A-Z])/g,"$1:$2").toLowerCase();return n[19]=l,n}function de(c,n,l){const e=c.slice();e[1]=n[l][0],e[2]=n[l][1];const t=e[1].replace(/([a-z])([A-Z])/g,"$1:$2").toLowerCase();return e[19]=t,e}function me(c,n,l){const e=c.slice();return e[16]=n[l],e}function pe(c,n,l){const e=c.slice();return e[11]=n[l],e}function ge(c,n,l){const e=c.slice();return e[1]=n[l][0],e[2]=n[l][1],e}function be(c,n,l){const e=c.slice();return e[6]=n[l],e}function ke(c,n,l){const e=c.slice();return e[1]=n[l][0],e[2]=n[l][1],e}function x(c){const n=c.slice(),l=n[1].replace(/([a-z])([A-Z])/g,"$1:$2").toLowerCase();return n[19]=l,n}function ve(c){let n,l=m(Object.entries(c[0])),e=[];for(let t=0;t<l.length;t+=1)e[t]=He(ce(c,l,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();n=a()},l(t){for(let o=0;o<e.length;o+=1)e[o].l(t);n=a()},m(t,o){for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(t,o);_(t,n,o)},p(t,o){if(o[0]&1){l=m(Object.entries(t[0]));let i;for(i=0;i<l.length;i+=1){const f=ce(t,l,i);e[i]?e[i].p(f,o):(e[i]=He(f),e[i].c(),e[i].m(n.parentNode,n))}for(;i<e.length;i+=1)e[i].d(1);e.length=l.length}},d(t){t&&h(n),M(e,t)}}}function we(c){let n,l,e;return{c(){n=p("meta"),this.h()},l(t){n=g(t,"META",{property:!0,content:!0}),this.h()},h(){r(n,"property",l="og:"+c[19]),r(n,"content",e=c[2])},m(t,o){_(t,n,o)},p(t,o){o[0]&1&&l!==(l="og:"+t[19])&&r(n,"property",l),o[0]&1&&e!==(e=t[2])&&r(n,"content",e)},d(t){t&&h(n)}}}function Ne(c){let n;function l(o,i){if(o[1]==="images")return Mt;if(o[1]==="videos")return jt;if(o[1]==="localeAlternate")return yt;if(o[1]==="music")return Lt;if(o[1]==="movie")return zt;if(o[1]==="article")return St;if(o[1]==="book")return Gt;if(o[1]==="profile")return Et}let e=l(c),t=e&&e(c);return{c(){t&&t.c(),n=a()},l(o){t&&t.l(o),n=a()},m(o,i){t&&t.m(o,i),_(o,n,i)},p(o,i){e===(e=l(o))&&t?t.p(o,i):(t&&t.d(1),t=e&&e(o),t&&(t.c(),t.m(n.parentNode,n)))},d(o){o&&h(n),t&&t.d(o)}}}function Et(c){let n,l=m(Object.entries(c[0].profile??{})),e=[];for(let t=0;t<l.length;t+=1)e[t]=Ae(re(c,l,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();n=a()},l(t){for(let o=0;o<e.length;o+=1)e[o].l(t);n=a()},m(t,o){for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(t,o);_(t,n,o)},p(t,o){if(o[0]&1){l=m(Object.entries(t[0].profile??{}));let i;for(i=0;i<l.length;i+=1){const f=re(t,l,i);e[i]?e[i].p(f,o):(e[i]=Ae(f),e[i].c(),e[i].m(n.parentNode,n))}for(;i<e.length;i+=1)e[i].d(1);e.length=l.length}},d(t){t&&h(n),M(e,t)}}}function Gt(c){let n,l=m(Object.entries(c[0].book??{})),e=[];for(let t=0;t<l.length;t+=1)e[t]=Ge(fe(c,l,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();n=a()},l(t){for(let o=0;o<e.length;o+=1)e[o].l(t);n=a()},m(t,o){for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(t,o);_(t,n,o)},p(t,o){if(o[0]&1){l=m(Object.entries(t[0].book??{}));let i;for(i=0;i<l.length;i+=1){const f=fe(t,l,i);e[i]?e[i].p(f,o):(e[i]=Ge(f),e[i].c(),e[i].m(n.parentNode,n))}for(;i<e.length;i+=1)e[i].d(1);e.length=l.length}},d(t){t&&h(n),M(e,t)}}}function St(c){let n,l=m(Object.entries(c[0].article??{})),e=[];for(let t=0;t<l.length;t+=1)e[t]=Le(se(c,l,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();n=a()},l(t){for(let o=0;o<e.length;o+=1)e[o].l(t);n=a()},m(t,o){for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(t,o);_(t,n,o)},p(t,o){if(o[0]&1){l=m(Object.entries(t[0].article??{}));let i;for(i=0;i<l.length;i+=1){const f=se(t,l,i);e[i]?e[i].p(f,o):(e[i]=Le(f),e[i].c(),e[i].m(n.parentNode,n))}for(;i<e.length;i+=1)e[i].d(1);e.length=l.length}},d(t){t&&h(n),M(e,t)}}}function zt(c){let n,l=m(Object.entries(c[0].movie??{})),e=[];for(let t=0;t<l.length;t+=1)e[t]=Me(ue(c,l,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();n=a()},l(t){for(let o=0;o<e.length;o+=1)e[o].l(t);n=a()},m(t,o){for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(t,o);_(t,n,o)},p(t,o){if(o[0]&1){l=m(Object.entries(t[0].movie??{}));let i;for(i=0;i<l.length;i+=1){const f=ue(t,l,i);e[i]?e[i].p(f,o):(e[i]=Me(f),e[i].c(),e[i].m(n.parentNode,n))}for(;i<e.length;i+=1)e[i].d(1);e.length=l.length}},d(t){t&&h(n),M(e,t)}}}function Lt(c){let n,l=m(Object.entries(c[0].music??{})),e=[];for(let t=0;t<l.length;t+=1)e[t]=Oe(de(c,l,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();n=a()},l(t){for(let o=0;o<e.length;o+=1)e[o].l(t);n=a()},m(t,o){for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(t,o);_(t,n,o)},p(t,o){if(o[0]&1){l=m(Object.entries(t[0].music??{}));let i;for(i=0;i<l.length;i+=1){const f=de(t,l,i);e[i]?e[i].p(f,o):(e[i]=Oe(f),e[i].c(),e[i].m(n.parentNode,n))}for(;i<e.length;i+=1)e[i].d(1);e.length=l.length}},d(t){t&&h(n),M(e,t)}}}function yt(c){let n,l=m(c[0].localeAlternate??[]),e=[];for(let t=0;t<l.length;t+=1)e[t]=Ie(me(c,l,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();n=a()},l(t){for(let o=0;o<e.length;o+=1)e[o].l(t);n=a()},m(t,o){for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(t,o);_(t,n,o)},p(t,o){if(o[0]&1){l=m(t[0].localeAlternate??[]);let i;for(i=0;i<l.length;i+=1){const f=me(t,l,i);e[i]?e[i].p(f,o):(e[i]=Ie(f),e[i].c(),e[i].m(n.parentNode,n))}for(;i<e.length;i+=1)e[i].d(1);e.length=l.length}},d(t){t&&h(n),M(e,t)}}}function jt(c){let n,l=m(c[0].videos??[]),e=[];for(let t=0;t<l.length;t+=1)e[t]=Ce(pe(c,l,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();n=a()},l(t){for(let o=0;o<e.length;o+=1)e[o].l(t);n=a()},m(t,o){for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(t,o);_(t,n,o)},p(t,o){if(o[0]&1){l=m(t[0].videos??[]);let i;for(i=0;i<l.length;i+=1){const f=pe(t,l,i);e[i]?e[i].p(f,o):(e[i]=Ce(f),e[i].c(),e[i].m(n.parentNode,n))}for(;i<e.length;i+=1)e[i].d(1);e.length=l.length}},d(t){t&&h(n),M(e,t)}}}function Mt(c){let n,l=m(c[0].images??[]),e=[];for(let t=0;t<l.length;t+=1)e[t]=Ke(be(c,l,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();n=a()},l(t){for(let o=0;o<e.length;o+=1)e[o].l(t);n=a()},m(t,o){for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(t,o);_(t,n,o)},p(t,o){if(o[0]&1){l=m(t[0].images??[]);let i;for(i=0;i<l.length;i+=1){const f=be(t,l,i);e[i]?e[i].p(f,o):(e[i]=Ke(f),e[i].c(),e[i].m(n.parentNode,n))}for(;i<e.length;i+=1)e[i].d(1);e.length=l.length}},d(t){t&&h(n),M(e,t)}}}function Ae(c){let n,l,e;return{c(){n=p("meta"),this.h()},l(t){n=g(t,"META",{property:!0,content:!0}),this.h()},h(){r(n,"property",l="profile:"+c[19]),r(n,"content",e=c[2])},m(t,o){_(t,n,o)},p(t,o){o[0]&1&&l!==(l="profile:"+t[19])&&r(n,"property",l),o[0]&1&&e!==(e=t[2])&&r(n,"content",e)},d(t){t&&h(n)}}}function Te(c){let n,l,e;return{c(){n=p("meta"),this.h()},l(t){n=g(t,"META",{property:!0,content:!0}),this.h()},h(){r(n,"property",l="book:"+c[19]),r(n,"content",e=c[2].toString())},m(t,o){_(t,n,o)},p(t,o){o[0]&1&&l!==(l="book:"+t[19])&&r(n,"property",l),o[0]&1&&e!==(e=t[2].toString())&&r(n,"content",e)},d(t){t&&h(n)}}}function Ot(c){let n,l=m(c[2]),e=[];for(let t=0;t<l.length;t+=1)e[t]=Ee(ae(c,l,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();n=a()},l(t){for(let o=0;o<e.length;o+=1)e[o].l(t);n=a()},m(t,o){for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(t,o);_(t,n,o)},p(t,o){if(o[0]&1){l=m(t[2]);let i;for(i=0;i<l.length;i+=1){const f=ae(t,l,i);e[i]?e[i].p(f,o):(e[i]=Ee(f),e[i].c(),e[i].m(n.parentNode,n))}for(;i<e.length;i+=1)e[i].d(1);e.length=l.length}},d(t){t&&h(n),M(e,t)}}}function Ee(c){let n,l,e;return{c(){n=p("meta"),this.h()},l(t){n=g(t,"META",{property:!0,content:!0}),this.h()},h(){r(n,"property",l="book:"+c[1]),r(n,"content",e=c[24])},m(t,o){_(t,n,o)},p(t,o){o[0]&1&&l!==(l="book:"+t[1])&&r(n,"property",l),o[0]&1&&e!==(e=t[24])&&r(n,"content",e)},d(t){t&&h(n)}}}function Ge(c){let n;function l(i,f){return typeof i[2]=="object"?Ot:Te}function e(i,f){return f===Te?Nt(i):i}let t=l(c),o=t(e(c,t));return{c(){o.c(),n=a()},l(i){o.l(i),n=a()},m(i,f){o.m(i,f),_(i,n,f)},p(i,f){t===(t=l(i))&&o?o.p(e(i,t),f):(o.d(1),o=t(e(i,t)),o&&(o.c(),o.m(n.parentNode,n)))},d(i){i&&h(n),o.d(i)}}}function Se(c){let n,l,e;return{c(){n=p("meta"),this.h()},l(t){n=g(t,"META",{property:!0,content:!0}),this.h()},h(){r(n,"property",l="article:"+c[19]),r(n,"content",e=c[2].toString())},m(t,o){_(t,n,o)},p(t,o){o[0]&1&&l!==(l="article:"+t[19])&&r(n,"property",l),o[0]&1&&e!==(e=t[2].toString())&&r(n,"content",e)},d(t){t&&h(n)}}}function It(c){let n,l=m(c[2]),e=[];for(let t=0;t<l.length;t+=1)e[t]=ze(he(c,l,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();n=a()},l(t){for(let o=0;o<e.length;o+=1)e[o].l(t);n=a()},m(t,o){for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(t,o);_(t,n,o)},p(t,o){if(o[0]&1){l=m(t[2]);let i;for(i=0;i<l.length;i+=1){const f=he(t,l,i);e[i]?e[i].p(f,o):(e[i]=ze(f),e[i].c(),e[i].m(n.parentNode,n))}for(;i<e.length;i+=1)e[i].d(1);e.length=l.length}},d(t){t&&h(n),M(e,t)}}}function ze(c){let n,l,e;return{c(){n=p("meta"),this.h()},l(t){n=g(t,"META",{property:!0,content:!0}),this.h()},h(){r(n,"property",l="article:"+c[1]),r(n,"content",e=c[24])},m(t,o){_(t,n,o)},p(t,o){o[0]&1&&l!==(l="article:"+t[1])&&r(n,"property",l),o[0]&1&&e!==(e=t[24])&&r(n,"content",e)},d(t){t&&h(n)}}}function Le(c){let n;function l(i,f){return typeof i[2]=="object"?It:Se}function e(i,f){return f===Se?At(i):i}let t=l(c),o=t(e(c,t));return{c(){o.c(),n=a()},l(i){o.l(i),n=a()},m(i,f){o.m(i,f),_(i,n,f)},p(i,f){t===(t=l(i))&&o?o.p(e(i,t),f):(o.d(1),o=t(e(i,t)),o&&(o.c(),o.m(n.parentNode,n)))},d(i){i&&h(n),o.d(i)}}}function ye(c){let n,l,e;return{c(){n=p("meta"),this.h()},l(t){n=g(t,"META",{property:!0,content:!0}),this.h()},h(){r(n,"property",l="video:"+c[19]),r(n,"content",e=c[2].toString())},m(t,o){_(t,n,o)},p(t,o){o[0]&1&&l!==(l="video:"+t[19])&&r(n,"property",l),o[0]&1&&e!==(e=t[2].toString())&&r(n,"content",e)},d(t){t&&h(n)}}}function Dt(c){let n,l=m(c[2]),e=[];for(let t=0;t<l.length;t+=1)e[t]=je(_e(c,l,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();n=a()},l(t){for(let o=0;o<e.length;o+=1)e[o].l(t);n=a()},m(t,o){for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(t,o);_(t,n,o)},p(t,o){if(o[0]&1){l=m(t[2]);let i;for(i=0;i<l.length;i+=1){const f=_e(t,l,i);e[i]?e[i].p(f,o):(e[i]=je(f),e[i].c(),e[i].m(n.parentNode,n))}for(;i<e.length;i+=1)e[i].d(1);e.length=l.length}},d(t){t&&h(n),M(e,t)}}}function je(c){let n,l,e;return{c(){n=p("meta"),this.h()},l(t){n=g(t,"META",{property:!0,content:!0}),this.h()},h(){r(n,"property",l="video:"+c[1]),r(n,"content",e=c[24])},m(t,o){_(t,n,o)},p(t,o){o[0]&1&&l!==(l="video:"+t[1])&&r(n,"property",l),o[0]&1&&e!==(e=t[24])&&r(n,"content",e)},d(t){t&&h(n)}}}function Me(c){let n;function l(i,f){return typeof i[2]=="object"?Dt:ye}function e(i,f){return f===ye?Tt(i):i}let t=l(c),o=t(e(c,t));return{c(){o.c(),n=a()},l(i){o.l(i),n=a()},m(i,f){o.m(i,f),_(i,n,f)},p(i,f){t===(t=l(i))&&o?o.p(e(i,t),f):(o.d(1),o=t(e(i,t)),o&&(o.c(),o.m(n.parentNode,n)))},d(i){i&&h(n),o.d(i)}}}function Oe(c){let n,l,e;return{c(){n=p("meta"),this.h()},l(t){n=g(t,"META",{property:!0,content:!0}),this.h()},h(){r(n,"property",l="music:"+c[19]),r(n,"content",e=c[2].toString())},m(t,o){_(t,n,o)},p(t,o){o[0]&1&&l!==(l="music:"+t[19])&&r(n,"property",l),o[0]&1&&e!==(e=t[2].toString())&&r(n,"content",e)},d(t){t&&h(n)}}}function Ie(c){let n,l;return{c(){n=p("meta"),this.h()},l(e){n=g(e,"META",{property:!0,content:!0}),this.h()},h(){r(n,"property","og:locale:alternate"),r(n,"content",l=c[16])},m(e,t){_(e,n,t)},p(e,t){t[0]&1&&l!==(l=e[16])&&r(n,"content",l)},d(e){e&&h(n)}}}function Ct(c){let n,l,e;return{c(){n=p("meta"),this.h()},l(t){n=g(t,"META",{property:!0,content:!0}),this.h()},h(){r(n,"property",l="og:video:"+c[1]),r(n,"content",e=c[2].toString())},m(t,o){_(t,n,o)},p(t,o){o[0]&1&&l!==(l="og:video:"+t[1])&&r(n,"property",l),o[0]&1&&e!==(e=t[2].toString())&&r(n,"content",e)},d(t){t&&h(n)}}}function Zt(c){let n,l;return{c(){n=p("meta"),this.h()},l(e){n=g(e,"META",{property:!0,content:!0}),this.h()},h(){r(n,"property","og:video"),r(n,"content",l=c[2].toString())},m(e,t){_(e,n,t)},p(e,t){t[0]&1&&l!==(l=e[2].toString())&&r(n,"content",l)},d(e){e&&h(n)}}}function De(c){let n;function l(o,i){return o[1]==="url"?Zt:Ct}let e=l(c),t=e(c);return{c(){t.c(),n=a()},l(o){t.l(o),n=a()},m(o,i){t.m(o,i),_(o,n,i)},p(o,i){e===(e=l(o))&&t?t.p(o,i):(t.d(1),t=e(o),t&&(t.c(),t.m(n.parentNode,n)))},d(o){o&&h(n),t.d(o)}}}function Ce(c){let n,l=m(Object.entries(c[11])),e=[];for(let t=0;t<l.length;t+=1)e[t]=De(ge(c,l,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();n=a()},l(t){for(let o=0;o<e.length;o+=1)e[o].l(t);n=a()},m(t,o){for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(t,o);_(t,n,o)},p(t,o){if(o[0]&1){l=m(Object.entries(t[11]));let i;for(i=0;i<l.length;i+=1){const f=ge(t,l,i);e[i]?e[i].p(f,o):(e[i]=De(f),e[i].c(),e[i].m(n.parentNode,n))}for(;i<e.length;i+=1)e[i].d(1);e.length=l.length}},d(t){t&&h(n),M(e,t)}}}function Ze(c){let n,l,e;return{c(){n=p("meta"),this.h()},l(t){n=g(t,"META",{property:!0,content:!0}),this.h()},h(){r(n,"property",l="og:image:"+c[1]),r(n,"content",e=c[2].toString())},m(t,o){_(t,n,o)},p(t,o){o[0]&1&&l!==(l="og:image:"+t[1])&&r(n,"property",l),o[0]&1&&e!==(e=t[2].toString())&&r(n,"content",e)},d(t){t&&h(n)}}}function Ke(c){let n,l=m(Object.entries(c[6])),e=[];for(let t=0;t<l.length;t+=1)e[t]=Ze(ke(c,l,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();n=a()},l(t){for(let o=0;o<e.length;o+=1)e[o].l(t);n=a()},m(t,o){for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(t,o);_(t,n,o)},p(t,o){if(o[0]&1){l=m(Object.entries(t[6]));let i;for(i=0;i<l.length;i+=1){const f=ke(t,l,i);e[i]?e[i].p(f,o):(e[i]=Ze(f),e[i].c(),e[i].m(n.parentNode,n))}for(;i<e.length;i+=1)e[i].d(1);e.length=l.length}},d(t){t&&h(n),M(e,t)}}}function He(c){let n,l,e=c[3]!=="object"&&we(x(c)),t=c[3]==="object"&&Ne(c);return{c(){e&&e.c(),n=ct(),t&&t.c(),l=a()},l(o){e&&e.l(o),n=rt(o),t&&t.l(o),l=a()},m(o,i){e&&e.m(o,i),_(o,n,i),t&&t.m(o,i),_(o,l,i)},p(o,i){o[3]!=="object"?e?e.p(x(o),i):(e=we(x(o)),e.c(),e.m(n.parentNode,n)):e&&(e.d(1),e=null),o[3]==="object"?t?t.p(o,i):(t=Ne(o),t.c(),t.m(l.parentNode,l)):t&&(t.d(1),t=null)},d(o){o&&(h(n),h(l)),e&&e.d(o),t&&t.d(o)}}}function Kt(c){let n,l=c[0]&&ve(c);return{c(){l&&l.c(),n=a()},l(e){l&&l.l(e),n=a()},m(e,t){l&&l.m(e,t),_(e,n,t)},p(e,t){e[0]?l?l.p(e,t):(l=ve(e),l.c(),l.m(n.parentNode,n)):l&&(l.d(1),l=null)},i:F,o:F,d(e){e&&h(n),l&&l.d(e)}}}function Ht(c,n,l){let{openGraph:e=void 0}=n;return c.$$set=t=>{"openGraph"in t&&l(0,e=t.openGraph)},[e]}class Wt extends ne{constructor(n){super(),le(this,n,Ht,Kt,te,{openGraph:0},null,[-1,-1])}}function ee(c){const n=c.slice(),l=Object.assign({"@context":"https://schema.org"},n[17]);return n[20]=l,n}function We(c,n,l){const e=c.slice();e[21]=n[l][0],e[22]=n[l][1];const t=e[21].replace(/([a-z])([A-Z])/g,"$1:$2").toLowerCase();return e[23]=t,e}function Re(c,n,l){const e=c.slice();return e[26]=n[l].href,e[27]=n[l].hreflang,e}function Pe(c){return document.title=c[0],{c:F,l:F,m:F,d:F}}function Be(c){let n;return{c(){n=p("meta"),this.h()},l(l){n=g(l,"META",{name:!0,content:!0}),this.h()},h(){r(n,"name","description"),r(n,"content",c[1])},m(l,e){_(l,n,e)},p(l,e){e&2&&r(n,"content",l[1])},d(l){l&&h(n)}}}function Ue(c){let n;return{c(){n=p("link"),this.h()},l(l){n=g(l,"LINK",{rel:!0,href:!0}),this.h()},h(){r(n,"rel","canonical"),r(n,"href",c[10])},m(l,e){_(l,n,e)},p(l,e){e&1024&&r(n,"href",l[10])},d(l){l&&h(n)}}}function Je(c){let n;return{c(){n=p("meta"),this.h()},l(l){n=g(l,"META",{name:!0,content:!0}),this.h()},h(){r(n,"name","keywords"),r(n,"content",c[2])},m(l,e){_(l,n,e)},p(l,e){e&4&&r(n,"content",l[2])},d(l){l&&h(n)}}}function Ve(c){let n;return{c(){n=p("link"),this.h()},l(l){n=g(l,"LINK",{rel:!0,href:!0}),this.h()},h(){r(n,"rel","amphtml"),r(n,"href",c[11])},m(l,e){_(l,n,e)},p(l,e){e&2048&&r(n,"href",l[11])},d(l){l&&h(n)}}}function Xe(c){let n;return{c(){n=p("link"),this.h()},l(l){n=g(l,"LINK",{rel:!0,href:!0}),this.h()},h(){r(n,"rel","manifest"),r(n,"href",c[12])},m(l,e){_(l,n,e)},p(l,e){e&4096&&r(n,"href",l[12])},d(l){l&&h(n)}}}function qe(c){let n;return{c(){n=p("meta"),this.h()},l(l){n=g(l,"META",{name:!0,content:!0}),this.h()},h(){r(n,"name","application-name"),r(n,"content",c[4])},m(l,e){_(l,n,e)},p(l,e){e&16&&r(n,"content",l[4])},d(l){l&&h(n)}}}function Fe(c){let n,l=m(c[13]),e=[];for(let t=0;t<l.length;t+=1)e[t]=Qe(Re(c,l,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();n=a()},l(t){for(let o=0;o<e.length;o+=1)e[o].l(t);n=a()},m(t,o){for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(t,o);_(t,n,o)},p(t,o){if(o&8192){l=m(t[13]);let i;for(i=0;i<l.length;i+=1){const f=Re(t,l,i);e[i]?e[i].p(f,o):(e[i]=Qe(f),e[i].c(),e[i].m(n.parentNode,n))}for(;i<e.length;i+=1)e[i].d(1);e.length=l.length}},d(t){t&&h(n),M(e,t)}}}function Qe(c){let n,l,e;return{c(){n=p("link"),this.h()},l(t){n=g(t,"LINK",{rel:!0,href:!0,hreflang:!0}),this.h()},h(){r(n,"rel","alternate"),r(n,"href",l=c[26]),r(n,"hreflang",e=c[27])},m(t,o){_(t,n,o)},p(t,o){o&8192&&l!==(l=t[26])&&r(n,"href",l),o&8192&&e!==(e=t[27])&&r(n,"hreflang",e)},d(t){t&&h(n)}}}function Ye(c){let n;return{c(){n=p("meta"),this.h()},l(l){n=g(l,"META",{name:!0,content:!0}),this.h()},h(){r(n,"name","theme-color"),r(n,"content",c[5])},m(l,e){_(l,n,e)},p(l,e){e&32&&r(n,"content",l[5])},d(l){l&&h(n)}}}function $e(c){let n;return{c(){n=p("base"),this.h()},l(l){n=g(l,"BASE",{href:!0}),this.h()},h(){r(n,"href",c[3])},m(l,e){_(l,n,e)},p(l,e){e&8&&r(n,"href",l[3])},d(l){l&&h(n)}}}function xe(c){let n,l;return{c(){n=p("meta"),this.h()},l(e){n=g(e,"META",{property:!0,content:!0}),this.h()},h(){r(n,"property","fb:app_id"),r(n,"content",l=c[16].appId)},m(e,t){_(e,n,t)},p(e,t){t&65536&&l!==(l=e[16].appId)&&r(n,"content",l)},d(e){e&&h(n)}}}function et(c){let n;return{c(){n=p("meta"),this.h()},l(l){n=g(l,"META",{name:!0,content:!0}),this.h()},h(){r(n,"name","google"),r(n,"content","nositelinkssearchbox")},m(l,e){_(l,n,e)},d(l){l&&h(n)}}}function tt(c){let n;return{c(){n=p("meta"),this.h()},l(l){n=g(l,"META",{name:!0,content:!0}),this.h()},h(){r(n,"name","google"),r(n,"content","notranslate")},m(l,e){_(l,n,e)},d(l){l&&h(n)}}}function nt(c){let n,l=m(Object.entries(c[14])),e=[];for(let t=0;t<l.length;t+=1)e[t]=lt(We(c,l,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();n=a()},l(t){for(let o=0;o<e.length;o+=1)e[o].l(t);n=a()},m(t,o){for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(t,o);_(t,n,o)},p(t,o){if(o&16384){l=m(Object.entries(t[14]));let i;for(i=0;i<l.length;i+=1){const f=We(t,l,i);e[i]?e[i].p(f,o):(e[i]=lt(f),e[i].c(),e[i].m(n.parentNode,n))}for(;i<e.length;i+=1)e[i].d(1);e.length=l.length}},d(t){t&&h(n),M(e,t)}}}function lt(c){let n,l,e;return{c(){n=p("meta"),this.h()},l(t){n=g(t,"META",{name:!0,content:!0}),this.h()},h(){r(n,"name",l="twitter:"+c[23]),r(n,"content",e=c[22])},m(t,o){_(t,n,o)},p(t,o){o&16384&&l!==(l="twitter:"+t[23])&&r(n,"name",l),o&16384&&e!==(e=t[22])&&r(n,"content",e)},d(t){t&&h(n)}}}function it(c){let n,l;return n=new Wt({props:{openGraph:c[15]}}),{c(){ft(n.$$.fragment)},l(e){at(n.$$.fragment,e)},m(e,t){st(n,e,t),l=!0},p(e,t){const o={};t&32768&&(o.openGraph=e[15]),n.$set(o)},i(e){l||(Q(n.$$.fragment,e),l=!0)},o(e){Y(n.$$.fragment,e),l=!1},d(e){ht(n,e)}}}function ot(c){let n,l=`<script type="application/ld+json">${JSON.stringify(c[20])+"<"}/script>`,e;return{c(){n=new kt(!1),e=a(),this.h()},l(t){n=vt(t,!1),e=a(),this.h()},h(){n.a=e},m(t,o){n.m(l,t,o),_(t,e,o)},p(t,o){o&131072&&l!==(l=`<script type="application/ld+json">${JSON.stringify(t[20])+"<"}/script>`)&&n.p(l)},d(t){t&&(h(e),n.d())}}}function Rt(c){var ie;let n,l,e,t,o,i,f,H,W,R,C,X,K,q,P,B,U,J,V,Z,v=c[0]&&Pe(c),k=c[1]&&Be(c),u=c[10]&&Ue(c),N=c[2]&&Je(c),A=c[11]&&Ve(c),T=c[12]&&Xe(c),E=c[4]&&qe(c),G=c[13]&&Fe(c),S=c[5]&&Ye(c),z=c[3]&&$e(c),L=((ie=c[16])==null?void 0:ie.appId)&&xe(c),O=c[8]&&et(),I=c[9]&&tt(),y=c[14]&&nt(c),b=c[15]&&it(c),j=c[17]&&ot(ee(c));const $=c[19].default,D=ut($,c,c[18],null);return{c(){v&&v.c(),n=a(),k&&k.c(),l=a(),u&&u.c(),e=a(),N&&N.c(),t=a(),A&&A.c(),o=a(),T&&T.c(),i=a(),E&&E.c(),f=a(),G&&G.c(),H=a(),S&&S.c(),W=a(),z&&z.c(),R=a(),L&&L.c(),C=p("meta"),K=p("meta"),O&&O.c(),P=a(),I&&I.c(),B=a(),y&&y.c(),U=a(),b&&b.c(),J=a(),j&&j.c(),V=a(),D&&D.c(),this.h()},l(s){const d=pt("svelte-edm2kb",document.head);v&&v.l(d),n=a(),k&&k.l(d),l=a(),u&&u.l(d),e=a(),N&&N.l(d),t=a(),A&&A.l(d),o=a(),T&&T.l(d),i=a(),E&&E.l(d),f=a(),G&&G.l(d),H=a(),S&&S.l(d),W=a(),z&&z.l(d),R=a(),L&&L.l(d),C=g(d,"META",{name:!0,content:!0}),K=g(d,"META",{name:!0,content:!0}),O&&O.l(d),P=a(),I&&I.l(d),B=a(),y&&y.l(d),U=a(),b&&b.l(d),J=a(),j&&j.l(d),V=a(),D&&D.l(d),d.forEach(h),this.h()},h(){r(C,"name","robots"),r(C,"content",X=`${c[7]?"noindex":"index"},${c[6]?"nofollow":"follow"}`),r(K,"name","googlebot"),r(K,"content",q=`${c[7]?"noindex":"index"},${c[6]?"nofollow":"follow"}`)},m(s,d){v&&v.m(document.head,null),w(document.head,n),k&&k.m(document.head,null),w(document.head,l),u&&u.m(document.head,null),w(document.head,e),N&&N.m(document.head,null),w(document.head,t),A&&A.m(document.head,null),w(document.head,o),T&&T.m(document.head,null),w(document.head,i),E&&E.m(document.head,null),w(document.head,f),G&&G.m(document.head,null),w(document.head,H),S&&S.m(document.head,null),w(document.head,W),z&&z.m(document.head,null),w(document.head,R),L&&L.m(document.head,null),w(document.head,C),w(document.head,K),O&&O.m(document.head,null),w(document.head,P),I&&I.m(document.head,null),w(document.head,B),y&&y.m(document.head,null),w(document.head,U),b&&b.m(document.head,null),w(document.head,J),j&&j.m(document.head,null),w(document.head,V),D&&D.m(document.head,null),Z=!0},p(s,[d]){var oe;s[0]?v||(v=Pe(s),v.c(),v.m(n.parentNode,n)):v&&(v.d(1),v=null),s[1]?k?k.p(s,d):(k=Be(s),k.c(),k.m(l.parentNode,l)):k&&(k.d(1),k=null),s[10]?u?u.p(s,d):(u=Ue(s),u.c(),u.m(e.parentNode,e)):u&&(u.d(1),u=null),s[2]?N?N.p(s,d):(N=Je(s),N.c(),N.m(t.parentNode,t)):N&&(N.d(1),N=null),s[11]?A?A.p(s,d):(A=Ve(s),A.c(),A.m(o.parentNode,o)):A&&(A.d(1),A=null),s[12]?T?T.p(s,d):(T=Xe(s),T.c(),T.m(i.parentNode,i)):T&&(T.d(1),T=null),s[4]?E?E.p(s,d):(E=qe(s),E.c(),E.m(f.parentNode,f)):E&&(E.d(1),E=null),s[13]?G?G.p(s,d):(G=Fe(s),G.c(),G.m(H.parentNode,H)):G&&(G.d(1),G=null),s[5]?S?S.p(s,d):(S=Ye(s),S.c(),S.m(W.parentNode,W)):S&&(S.d(1),S=null),s[3]?z?z.p(s,d):(z=$e(s),z.c(),z.m(R.parentNode,R)):z&&(z.d(1),z=null),(oe=s[16])!=null&&oe.appId?L?L.p(s,d):(L=xe(s),L.c(),L.m(C.parentNode,C)):L&&(L.d(1),L=null),(!Z||d&192&&X!==(X=`${s[7]?"noindex":"index"},${s[6]?"nofollow":"follow"}`))&&r(C,"content",X),(!Z||d&192&&q!==(q=`${s[7]?"noindex":"index"},${s[6]?"nofollow":"follow"}`))&&r(K,"content",q),s[8]?O||(O=et(),O.c(),O.m(P.parentNode,P)):O&&(O.d(1),O=null),s[9]?I||(I=tt(),I.c(),I.m(B.parentNode,B)):I&&(I.d(1),I=null),s[14]?y?y.p(s,d):(y=nt(s),y.c(),y.m(U.parentNode,U)):y&&(y.d(1),y=null),s[15]?b?(b.p(s,d),d&32768&&Q(b,1)):(b=it(s),b.c(),Q(b,1),b.m(J.parentNode,J)):b&&(gt(),Y(b,1,1,()=>{b=null}),bt()),s[17]?j?j.p(ee(s),d):(j=ot(ee(s)),j.c(),j.m(V.parentNode,V)):j&&(j.d(1),j=null),D&&D.p&&(!Z||d&262144)&&_t(D,$,s,s[18],Z?mt($,s[18],d,null):dt(s[18]),null)},i(s){Z||(Q(b),Q(D,s),Z=!0)},o(s){Y(b),Y(D,s),Z=!1},d(s){v&&v.d(s),h(n),k&&k.d(s),h(l),u&&u.d(s),h(e),N&&N.d(s),h(t),A&&A.d(s),h(o),T&&T.d(s),h(i),E&&E.d(s),h(f),G&&G.d(s),h(H),S&&S.d(s),h(W),z&&z.d(s),h(R),L&&L.d(s),h(C),h(K),O&&O.d(s),h(P),I&&I.d(s),h(B),y&&y.d(s),h(U),b&&b.d(s),h(J),j&&j.d(s),h(V),D&&D.d(s)}}}function Pt(c,n,l){let{$$slots:e={},$$scope:t}=n,{title:o=void 0}=n,{description:i=void 0}=n,{keywords:f=void 0}=n,{base:H=void 0}=n,{applicationName:W=void 0}=n,{themeColor:R=void 0}=n,{nofollow:C=!1}=n,{noindex:X=!1}=n,{nositelinkssearchbox:K=!1}=n,{notranslate:q=!1}=n,{canonical:P=void 0}=n,{amp:B=void 0}=n,{manifest:U=void 0}=n,{languageAlternates:J=void 0}=n,{twitter:V=void 0}=n,{openGraph:Z=void 0}=n,{facebook:v=void 0}=n,{jsonLd:k=void 0}=n;return c.$$set=u=>{"title"in u&&l(0,o=u.title),"description"in u&&l(1,i=u.description),"keywords"in u&&l(2,f=u.keywords),"base"in u&&l(3,H=u.base),"applicationName"in u&&l(4,W=u.applicationName),"themeColor"in u&&l(5,R=u.themeColor),"nofollow"in u&&l(6,C=u.nofollow),"noindex"in u&&l(7,X=u.noindex),"nositelinkssearchbox"in u&&l(8,K=u.nositelinkssearchbox),"notranslate"in u&&l(9,q=u.notranslate),"canonical"in u&&l(10,P=u.canonical),"amp"in u&&l(11,B=u.amp),"manifest"in u&&l(12,U=u.manifest),"languageAlternates"in u&&l(13,J=u.languageAlternates),"twitter"in u&&l(14,V=u.twitter),"openGraph"in u&&l(15,Z=u.openGraph),"facebook"in u&&l(16,v=u.facebook),"jsonLd"in u&&l(17,k=u.jsonLd),"$$scope"in u&&l(18,t=u.$$scope)},[o,i,f,H,W,R,C,X,K,q,P,B,U,J,V,Z,v,k,t,e]}class Bt extends ne{constructor(n){super(),le(this,n,Pt,Rt,te,{title:0,description:1,keywords:2,base:3,applicationName:4,themeColor:5,nofollow:6,noindex:7,nositelinkssearchbox:8,notranslate:9,canonical:10,amp:11,manifest:12,languageAlternates:13,twitter:14,openGraph:15,facebook:16,jsonLd:17})}}function Ut(c){let n,l,e,t=`<h1 id="titel" class="svelte-92r8is">Gehstück, das.</h1> <p id="subline" class="blocksatz svelte-92r8is" lang="de">Ein Text, für den <span class="wider svelte-92r8is">Spaziergang</span> geschrieben,
    gelangt durch den <span class="wider svelte-92r8is">Spaziergang</span> zur Geltung. Wenn
    Du noch nie davon gehört hast, dann deshalb, weil ich das Gehstück als
    <span class="wider svelte-92r8is">Textgattung</span>
    erst begründe, indem Du das liest, gerade
    <span class="wider svelte-92r8is">begründet</span> habe.</p> <div id="paragraphen" class="blocksatz svelte-92r8is"><p class="svelte-92r8is">§1 Das Gehstück bedient sich des Gehens als KULTURELLE TECHNIK der
      Wahrnehmung und des Denkens.</p> <p class="svelte-92r8is">§2 Das Gehstück bietet eine besondere Art von Texterfahrung durch den
      Einbezug ALLER SINNE.</p> <p class="svelte-92r8is">§3 Das Gehstück ist ZUGÄNGLICH, wie es Kunst und Literatur gerne von sich
      behaupten, es aber nur selten sind. Im Gehen finden wir einen
      niederschwelligen Zugang zum Text.</p> <p class="svelte-92r8is">§4 Das Gehstück ist PARTIZIPATIV, indem, wer hört, mitspaziert. Wer hört,
      ist Teil der Lesebewegung, Teil des Gehstücks. Alle Menschen können
      spazieren, das heisst, sich Zeit nehmen, um wahr-zu-nehmen.</p> <p class="svelte-92r8is">§5 Das Gehstück ist INTERSUBJEKTIV. Das gemeinsame Gehen schafft den
      nötigen Boden zur Verständigung. Die gemeinsamen Schritte bedeuten die
      Gleichwertigkeit der Erfahrungen.</p> <p class="svelte-92r8is">§6 Das Gehstück ist KÜNSTLERISCH-EMPIRISCH. Die Textgattung trägt die
      Sprache in den Raum und stellt ihre Texte auf die Probe. Immer ist sie mit
      der existentiellen Spannung zwischen Bild und Wirklichkeit, zwischen den
      Grenzen der Sprache und denen unserer unmittelbaren Erfahrung beschäftigt,
      der drohenden Nutzlosigkeit der Worte. Sie lässt uns den Widerspruch
      spüren. Die Textgattung verbietet sich die Sterilität der klassischen
      Ausstellungs- und Bühnenräume.</p> <p class="svelte-92r8is">§7 Das Gehstück denkt den KONTEXT mit. Kein TEXT ohne KON. Lesungen sind
      gelebte Texte. Eine Lesung sollte einen Text so in einen Zusammenhang
      führen, damit er wirkt und nicht einschläfert.</p> <p class="svelte-92r8is">§8 Das Gehstück setzt sich dem ZUFALL aus – durch eine Welt gehen, die wir
      nicht kontrollieren, noch nicht einmal verstehen: Wichtig ist die Haltung!
      Spazieren heisst, mit dem Zufall gehen.</p> <p class="svelte-92r8is">§9 Das Gehstück stellt sich in den Dienst des ALLTAGS. Ziel jeder freien
      Ausdrucksweise und damit der Kunst im weitesten Sinn kann nur sein, unsere
      Lebenswelt zu bereichern. Das Gehstück soll uns was an-gehen. Anfang und
      Ende des Gehstücks bilden deshalb die alltäglichen Erfahrungen, an die
      jede lebensdienliche Kunst zurückgebunden werden muss. Spazieren heisst,
      den Alltag leben.</p> <p class="svelte-92r8is">§10 Das Gehstück baut auf BEWÄHRTER PRAXIS. Selbst wenn das (Geh)Stück
      nicht überzeugen würde, kämen die Teilnehmenden immerhin in den Genuss
      eines Spaziergangs.</p> <p class="svelte-92r8is">§11 Das Gehstück überzeugt AUS SICH. Alle Paragrafen hier sind
      intellektueller Anhang. <mark class="svelte-92r8is">Du musst die aufgezählten Punkte weder gelesen noch verstanden haben,
        um an einem Gehstück teilzunehmen.</mark></p></div> <div class="container-right svelte-92r8is"><p class="svelte-92r8is">Léonard Wiesendanger<br/>Basel, Januar 2023</p> <p class="svelte-92r8is">Geschrieben zum Auftakt der Lesungsreihe „Gehstück, das.“ (2023), in
      welcher gattungsfremde Texte spazierfertig gemacht wurden mit dem Ziel,
      die Eigenständigkeit der neuen Textgattung „Gehstück“ besser verstehen und
      begründen zu können.</p> <h2 id="open-call" class="svelte-92r8is">OPEN CALL</h2> <p class="svelte-92r8is">Einsendungen für die nächste Lesungsreihe „Gehstück, das. 2024“ an
      <a href="mailto:vvvw@bluewin.ch" class="svelte-92r8is">vvvw[at]bluewin.ch</a></p></div>`,o;return n=new Bt({props:{title:"Gehstück, das.",description:"Ein Text, für den Spaziergang geschrieben, gelangt durch den Spaziergang zur Geltung. Wenn Du noch nie davon gehört hast, dann deshalb, weil ich das Gehstück als Textgattung erst begründe, indem Du das liest, gerade begründet habe."}}),{c(){ft(n.$$.fragment),l=ct(),e=p("main"),e.innerHTML=t,this.h()},l(i){at(n.$$.fragment,i),l=rt(i),e=g(i,"MAIN",{lang:!0,class:!0,"data-svelte-h":!0}),wt(e)!=="svelte-4i0ao3"&&(e.innerHTML=t),this.h()},h(){r(e,"lang","de"),r(e,"class","svelte-92r8is")},m(i,f){st(n,i,f),_(i,l,f),_(i,e,f),o=!0},p:F,i(i){o||(Q(n.$$.fragment,i),o=!0)},o(i){Y(n.$$.fragment,i),o=!1},d(i){i&&(h(l),h(e)),ht(n,i)}}}class Xt extends ne{constructor(n){super(),le(this,n,null,Ut,te,{})}}export{Xt as component};