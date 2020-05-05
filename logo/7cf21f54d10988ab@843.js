// https://observablehq.com/@co18332/logo@843
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# CCET Logo

The D3 logo is defined using strictly circular arcs and lines, with some of the points computed using circle-line and circle-circle intersection.`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`<svg //viewBox="-10 -10 300 111">

<path fill="#bbb" d="M205.25,0L205.25,20L220.25,20L220.25,91L240.25,91L240.25,20L255.25,20L255.25,0z"/> //T

<path fill="#bbb" transform= "translate(232.5,91) rotate(-180)"d="M36.2510,0h32a27.75,27.75 0 0 1 21.331,45.5a27.75,27.75 0 0 1 -21.331,45.5h-32a53.6895,53.6895 0 0 0 18.7464,-20h13.2526a7.75,7.75 0 1 0 0,-15.5h-7.75a53.6895,53.6895 0 0 0 0,-20h7.75a7.75,7.75 0 1 0 0,-15.5h-13.2526a53.6895,53.6895 0 0 0 -18.7464,-20z"/> // E

<path fill="#bbb" d="M37.75,0h0a37.75,37.75 0 1 0 0,91h0v-20h0a17.75,17.75 0 1 1 0,-51h0z"/> //2nd circle
<path fill="#bbb" d="M107.75,0h0a37.75,37.75 0 1 0 0,91h0v-20h0a17.75,17.75 0 1 1 0,-51h0z"/> //1st circle

<g fill="none" stroke="purple" stroke-width=".15" stroke-opacity=".3">//currentColor
    <line x1="-200" x2="260" y1="0" y2="0"/>//horizontal lines
    <line x1="-100" x2="260" y1="0" y2="0"/>
    <line x1="-100" x2="260" y1="20" y2="20"/>
    <line x1="-100" x2="260" y1="35.5" y2="35.5"/>
    <line x1="-100" x2="260" y1="45.5" y2="45.5"/>
    <line x1="-100" x2="260" y1="55.5" y2="55.5"/>
    <line x1="-100" x2="260" y1="71" y2="71"/>
    <line x1="-100" x2="260" y1="91" y2="91"/>

    <line x1="37.75" x2="37.75" y1="-100" y2="200"/>//vertical line first c center
    <line x1="58.75" x2="58.75" y1="-100" y2="200"/>//vertical line first c end

    <line x1="107.75" x2="107.75" y1="-100" y2="200"/>//vertical line second c center
    <line x1="128.75" x2="128.75" y1="-100" y2="200"/>//vertical line second c end

    <line x1="164.25" x2="164.25" y1="-100" y2="200"/>//vertical line e center
    <line x1="180.25" x2="180.25" y1="-100" y2="200"/>//vertical line e end-middle
    <line x1="187.25" x2="187.25" y1="-100" y2="200"/>//vertical line e end-middle
    <line x1="195.25" x2="195.25" y1="-100" y2="200"/>//vertical line e rightmost 
    
    <line x1="205.25" x2="205.25" y1="-100" y2="200"/>//vertical line T left-outer
    <line x1="220.25" x2="220.25" y1="-100" y2="200"/>//vertical line T left-innner
    <line x1="240.25" x2="240.25" y1="-100" y2="200"/>//vertical line T right-inner
    <line x1="255.25" x2="255.25" y1="-100" y2="200"/>//vertical line T right-outer
   
</g>

  <g fill="blue">
    <circle cx="37.75" cy="45.5" r=".5"/>//first c
    <circle cx="107.75" cy="45.5" r=".5"/>//second c
    <circle cx="224.75" cy="45.5" r=".5"/>//intersection for E
    <circle cx="164.25" cy="27.75" r=".5"/>
    <circle cx="164.25" cy="63.25" r=".5"/>
  </g>

  <g fill="red">
    <!-- Intersecting horizontal lines with the r=53.6895 circle. -->
    <circle cx="37.75" cy="0" r=".5"/> //first TOP c intersection upper
    <circle cx="37.75" cy="20" r=".5"/> //first TOP c intersection lower
    <circle cx="37.75" cy="71" r=".5"/> //first DOWN c intersection upper
    <circle cx="37.75" cy="91" r=".5"/> //first DOWN c intersection lower

    <circle cx="107.75" cy="0" r=".5"/> //second TOP c intersection upper
    <circle cx="107.75" cy="20" r=".5"/> //second TOP c intersection lower
    <circle cx="107.75" cy="71" r=".5"/> //second DOWN c intersection upper
    <circle cx="107.75" cy="91" r=".5"/> //second DOWN c intersection lower


    <circle cx="195.25" cy="0" r=".5"/> //e upper
    <circle cx="177.55" cy="20" r=".5"/> //se upper
    <circle cx="171.85" cy="35.5" r=".5"/> //e mid-upper
    <circle cx="171.85" cy="55.5" r=".5"/> //e mid-lower
    <circle cx="177.55" cy="71" r=".5"/> //e lower
    <circle cx="195.25" cy="91" r=".5"/> //e lower

    <circle cx="205.25" cy="0" r=".5"/> //t left-upper
    <circle cx="205.25" cy="20" r=".5"/> //t left-lower
    <circle cx="255.25" cy="0" r=".5"/> //t left-upper
    <circle cx="255.25" cy="20" r=".5"/> //t right-lower
    <circle cx="220.25" cy="20" r=".5"/> //e left inside
    <circle cx="240.25" cy="20" r=".5"/> //e right inside
    <circle cx="240.25" cy="91" r=".5"/> //e right lower
    <circle cx="220.25" cy="91" r=".5"/> //e left lower

    <!-- Intersecting the two r=27.75 circles. -->

</g>

  <g fill="none" stroke="currentColor" stroke-width="0.02">
    <circle cx="107.75" cy="45.5" r="25.5"/> //second C
    <circle cx="107.75" cy="45.5" r="45.5"/> //second C
    
    <circle cx="37.75" cy="45.5" r="25.5"/>//first C
    <circle cx="37.75" cy="45.5" r="45.5"/>//first C

    <!-- Radius is computed to intersect at the intended x=60.5. -->
    <circle cx="107.75" cy="45.5" r="53.6895"/>//second C
    <circle cx="37.75" cy="45.5" r="53.6895"/>//first C
    <circle cx="224.75" cy="45.5" r="53.6895"/>//intersection for E
    <circle cx="164.25" cy="27.75" r="7.75"/>
    <circle cx="164.25" cy="27.75" r="27.75"/>
    <circle cx="164.25" cy="63.25" r="7.75"/>
    <circle cx="164.25" cy="63.25" r="27.75"/>
  </g>
</svg>`
)});
  main.variable(observer("viewof replay")).define("viewof replay", ["html"], function(html){return(
html`<button>Replay`
)});
  main.variable(observer("replay")).define("replay", ["Generators", "viewof replay"], (G, _) => G.input(_));
  main.variable(observer()).define(["replay","html","location","visibility"], async function*(replay,html,location,visibility)
{
  replay;
  
  const svg = html`<svg viewBox="-10 -10 316 111">
<path transform="translate(117,91)rotate(-180)" id="dee" d="M0,0h7.75a45.5,45.5 0 1 1 0,91h-7.75v-20h7.75a25.5,25.5 0 1 0 0,-51h-7.75z"/>
<path fill="#fa4c3c" d="M205.25,0L205.25,20L220.25,20L220.25,91L240.25,91L240.25,20L255.25,20L255.25,0z"/> //T
  <defs>
    <path transform="translate(50,91)rotate(-180)" id="dee" d="M0,0h7.75a45.5,45.5 0 1 1 0,91h-7.75v-20h7.75a25.5,25.5 0 1 0 0,-51h-7.75z"/>
    <path fill="none" id="three" d="M36.2510,0h32a27.75,27.75 0 0 1 21.331,45.5a27.75,27.75 0 0 1 -21.331,45.5h-32a53.6895,53.6895 0 0 0 18.7464,-20h13.2526a7.75,7.75 0 1 0 0,-15.5h-7.75a53.6895,53.6895 0 0 0 0,-20h7.75a7.75,7.75 0 1 0 0,-15.5h-13.2526a53.6895,53.6895 0 0 0 -18.7464,-20z"/>
    <clipPath id="clip-three">
      <use xlink:href="${new URL("#three", location)}"/>
    </clipPath>
  </defs>
  <g fill="#fa4c3c">
    <use xlink:href="${new URL("#dee", location)}"/>
    <use xlink:href="${new URL("#three", location)}"/>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="20">
    <path transform="translate(50,91)rotate(-180)" id="stroke1" stroke-dasharray="0,10000" d="M0,10h7.75a35.5,35.5 0 1 1 0,71h-7.75"/>
    <path transform= "translate(232,91) rotate(-180)"  id="stroke2"stroke-dasharray="0,10000" clip-path="url(${new URL("#clip-three", location)})" d="M36.2510,10h32a17.75,17.75 0 0 1 0,35.5h-7.75h7.75a17.75,17.75 0 0 1 0,35.5h-32"/>
  </g>
</svg>`;
  yield svg;
  await visibility();
  const stroke1 = svg.querySelector("#stroke1");
  const stroke2 = svg.querySelector("#stroke2");
  const length1 = stroke1.getTotalLength();
  const length2 = stroke2.getTotalLength();
  const length = length1 + length2;
  for (let i = 0, n = 240; i < n; ++i) {
    const t = (i + 1) / n;
    stroke1.setAttribute("stroke-dasharray", `${t * length},${length1}`);
    stroke2.setAttribute("stroke-dasharray", `${Math.max(0, t * length - length1)},${length2}`);
    yield svg;
  }
}
);
  main.variable(observer("viewof color")).define("viewof color", ["html"], function(html)
{
  const form = html`<form style="font: 12px var(--sans-serif);">
  <div>
    <input name=a0 type=color value="#f9a03c">
    <input name=a1 type=color value="#f7974e"> gradient 1
  </div>
  <div>
    <input name=b0 type=color value="#f26d58">
    <input name=b1 type=color value="#f9a03c"> gradient 2
  </div>
  <div>
    <input name=c0 type=color value="#b84e51">
    <input name=c1 type=color value="#f68e48"> gradient 3
  </div>
</form>`;
  form.oninput = () => {
    form.value = {
      a0: form.a0.value,
      a1: form.a1.value,
      b0: form.b0.value,
      b1: form.b1.value,
      c0: form.c0.value,
      c1: form.c1.value
    };
  };
  form.oninput();
  return form;
}
);
  main.variable(observer("color")).define("color", ["Generators", "viewof color"], (G, _) => G.input(_));
  main.variable(observer()).define(["html","color","location"], function(html,color,location){return(
html`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 350 111">
  <clipPath id="clip">
  <path d="M20,0h7.75a45.5,45.5 0 1 1 0,91h-7.75v-20h7.75a25.5,25.5 0 1 0 0,-51h-7.75zm107.75,0h0a37.75,37.75 0 1 0 0,91h0v-20h0a17.75,17.75 0 1 1 0,-51h0z"/>
  </clipPath>
  </clipPath>
  <linearGradient id="gradient-1" gradientUnits="userSpaceOnUse" x1="7" y1="64" x2="50" y2="107">
    <stop offset="0" stop-color=transform= "translate(232,91) rotate(-180)"${color.a0}"/>
    <stop offset="1" stop-color="${color.a1}"/>
  </linearGradient>
  <linearGradient id="gradient-2" gradientUnits="userSpaceOnUse" x1="2" y1="-2" x2="87" y2="84">
    <stop offset="0" stop-color="${color.b0}"/>
    <stop offset="1" stop-color="${color.b1}"/>
  </linearGradient>
  <linearGradient id="gradient-3" gradientUnits="userSpaceOnUse" x1="45" y1="-10" x2="108" y2="53">
    <stop offset="0" stop-color="${color.c0}"/>
    <stop offset="1" stop-color="${color.c1}"/>
  </linearGradient>
  <g clip-path="url(${new URL("#clip", location)})">
    <path d="M-100,-102m-28,0v300h300z" fill="url(${new URL("#gradient-1", location)})"/>
    <path d="M-100,-102m28,0h300v300z" fill="url(${new URL("#gradient-3", location)})"/>
    <path d="M-100,-102l300,300" fill="none" stroke="url(${new URL("#gradient-2", location)})" stroke-width="40"/>
  </g>
</svg>`
)});
  return main;
}
