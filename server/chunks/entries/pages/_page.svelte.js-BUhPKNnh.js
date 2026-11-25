import { X as head, Y as ensure_array_like, Z as attr, _ as attr_class, V as escape_html, $ as sanitize_props, a0 as spread_props, a1 as rest_props, O as push, a2 as fallback, a3 as spread_attributes, a4 as clsx, a5 as element, a6 as slot, a7 as bind_props, Q as pop, a8 as stringify } from '../../chunks/index.js-DeoUGC6w.js';
import { b as base } from '../../chunks/paths.js-SZDzejDQ.js';
import '../../chunks/false.js-CcRR1pZ-.js';

function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Icon($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  push();
  let name = fallback($$props["name"], void 0);
  let color = fallback($$props["color"], "currentColor");
  let size = fallback($$props["size"], 24);
  let strokeWidth = fallback($$props["strokeWidth"], 2);
  let absoluteStrokeWidth = fallback($$props["absoluteStrokeWidth"], false);
  let iconNode = fallback($$props["iconNode"], () => [], true);
  const mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && array.indexOf(className) === index;
  }).join(" ");
  const each_array = ensure_array_like(iconNode);
  $$payload.out.push(`<svg${spread_attributes(
    {
      ...defaultAttributes,
      ...$$restProps,
      width: size,
      height: size,
      stroke: color,
      "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      class: clsx(mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$sanitized_props.class))
    },
    null,
    void 0,
    void 0,
    3
  )}><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let [tag, attrs] = each_array[$$index];
    element($$payload, tag, () => {
      $$payload.out.push(`${spread_attributes({ ...attrs }, null, void 0, void 0, 3)}`);
    });
  }
  $$payload.out.push(`<!--]--><!---->`);
  slot($$payload, $$props, "default", {});
  $$payload.out.push(`<!----></svg>`);
  bind_props($$props, {
    name,
    color,
    size,
    strokeWidth,
    absoluteStrokeWidth,
    iconNode
  });
  pop();
}
function File_text($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.544.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
      }
    ],
    ["path", { "d": "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { "d": "M10 9H8" }],
    ["path", { "d": "M16 13H8" }],
    ["path", { "d": "M16 17H8" }]
  ];
  Icon($$payload, spread_props([
    { name: "file-text" },
    $$sanitized_props,
    {
      /**
       * @component @name FileText
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgMkg2YTIgMiAwIDAgMC0yIDJ2MTZhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjdaIiAvPgogIDxwYXRoIGQ9Ik0xNCAydjRhMiAyIDAgMCAwIDIgMmg0IiAvPgogIDxwYXRoIGQ9Ik0xMCA5SDgiIC8+CiAgPHBhdGggZD0iTTE2IDEzSDgiIC8+CiAgPHBhdGggZD0iTTE2IDE3SDgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/file-text
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->`);
        slot($$payload2, $$props, "default", {});
        $$payload2.out.push(`<!---->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Arrow_up_right($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.544.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    ["path", { "d": "M7 7h10v10" }],
    ["path", { "d": "M7 17 17 7" }]
  ];
  Icon($$payload, spread_props([
    { name: "arrow-up-right" },
    $$sanitized_props,
    {
      /**
       * @component @name ArrowUpRight
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNyA3aDEwdjEwIiAvPgogIDxwYXRoIGQ9Ik03IDE3IDE3IDciIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/arrow-up-right
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->`);
        slot($$payload2, $$props, "default", {});
        $$payload2.out.push(`<!---->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Laptop($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.544.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"
      }
    ],
    ["path", { "d": "M20.054 15.987H3.946" }]
  ];
  Icon($$payload, spread_props([
    { name: "laptop" },
    $$sanitized_props,
    {
      /**
       * @component @name Laptop
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggNWEyIDIgMCAwIDEgMiAydjguNTI2YTIgMiAwIDAgMCAuMjEyLjg5N2wxLjA2OCAyLjEyN2ExIDEgMCAwIDEtLjkgMS40NUgzLjYyYTEgMSAwIDAgMS0uOS0xLjQ1bDEuMDY4LTIuMTI3QTIgMiAwIDAgMCA0IDE1LjUyNlY3YTIgMiAwIDAgMSAyLTJ6IiAvPgogIDxwYXRoIGQ9Ik0yMC4wNTQgMTUuOTg3SDMuOTQ2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/laptop
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->`);
        slot($$payload2, $$props, "default", {});
        $$payload2.out.push(`<!---->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Blocks($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.544.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"
      }
    ],
    [
      "rect",
      { "x": "14", "y": "2", "width": "8", "height": "8", "rx": "1" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "blocks" },
    $$sanitized_props,
    {
      /**
       * @component @name Blocks
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAgMjJWN2ExIDEgMCAwIDAtMS0xSDRhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJ2LTVhMSAxIDAgMCAwLTEtMUgyIiAvPgogIDxyZWN0IHg9IjE0IiB5PSIyIiB3aWR0aD0iOCIgaGVpZ2h0PSI4IiByeD0iMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/blocks
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->`);
        slot($$payload2, $$props, "default", {});
        $$payload2.out.push(`<!---->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Cpu($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.544.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    ["path", { "d": "M12 20v2" }],
    ["path", { "d": "M12 2v2" }],
    ["path", { "d": "M17 20v2" }],
    ["path", { "d": "M17 2v2" }],
    ["path", { "d": "M2 12h2" }],
    ["path", { "d": "M2 17h2" }],
    ["path", { "d": "M2 7h2" }],
    ["path", { "d": "M20 12h2" }],
    ["path", { "d": "M20 17h2" }],
    ["path", { "d": "M20 7h2" }],
    ["path", { "d": "M7 20v2" }],
    ["path", { "d": "M7 2v2" }],
    [
      "rect",
      { "x": "4", "y": "4", "width": "16", "height": "16", "rx": "2" }
    ],
    [
      "rect",
      { "x": "8", "y": "8", "width": "8", "height": "8", "rx": "1" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "cpu" },
    $$sanitized_props,
    {
      /**
       * @component @name Cpu
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMjB2MiIgLz4KICA8cGF0aCBkPSJNMTIgMnYyIiAvPgogIDxwYXRoIGQ9Ik0xNyAyMHYyIiAvPgogIDxwYXRoIGQ9Ik0xNyAydjIiIC8+CiAgPHBhdGggZD0iTTIgMTJoMiIgLz4KICA8cGF0aCBkPSJNMiAxN2gyIiAvPgogIDxwYXRoIGQ9Ik0yIDdoMiIgLz4KICA8cGF0aCBkPSJNMjAgMTJoMiIgLz4KICA8cGF0aCBkPSJNMjAgMTdoMiIgLz4KICA8cGF0aCBkPSJNMjAgN2gyIiAvPgogIDxwYXRoIGQ9Ik03IDIwdjIiIC8+CiAgPHBhdGggZD0iTTcgMnYyIiAvPgogIDxyZWN0IHg9IjQiIHk9IjQiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgcng9IjIiIC8+CiAgPHJlY3QgeD0iOCIgeT0iOCIgd2lkdGg9IjgiIGhlaWdodD0iOCIgcng9IjEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/cpu
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->`);
        slot($$payload2, $$props, "default", {});
        $$payload2.out.push(`<!---->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function About($$payload) {
  const tools = [
    {
      id: 0,
      name: "React",
      logo: "https://cdn.simpleicons.org/react/61dafb"
    },
    {
      id: 1,
      name: "Next.js",
      logo: "https://cdn.simpleicons.org/nextdotjs/f4f4f5"
    },
    {
      id: 2,
      name: "Tailwind",
      logo: "https://cdn.simpleicons.org/tailwindcss/38bdf8"
    },
    {
      id: 3,
      name: "Svelte",
      logo: "https://cdn.simpleicons.org/svelte/ff3e00"
    },
    {
      id: 4,
      name: "TypeScript",
      logo: "https://cdn.simpleicons.org/typescript/3178c6"
    },
    {
      id: 5,
      name: "Solidity",
      logo: "https://cdn.simpleicons.org/solidity/a78bfa"
    },
    {
      id: 6,
      name: "Foundry",
      logo: "https://cdn.simpleicons.org/ethereum/e4e4e7"
    },
    {
      id: 7,
      name: "C",
      logo: "https://cdn.simpleicons.org/c/60a5fa"
    },
    {
      id: 8,
      name: "Arduino",
      logo: "https://cdn.simpleicons.org/arduino/00b4bd"
    }
  ];
  const services = [
    { name: "Web Application Development", icon: Laptop },
    {
      name: "Smart Contract Development & dApp Integration",
      icon: Blocks
    },
    { name: "Systems & Embedded Software Development", icon: Cpu }
  ];
  const each_array = ensure_array_like(tools);
  const each_array_1 = ensure_array_like(services);
  $$payload.out.push(`<section class="hero-section svelte-1bmiiuv" id="about"><div class="hero-grid svelte-1bmiiuv"><div class="hero-copy svelte-1bmiiuv"><h1 class="svelte-1bmiiuv">Hello, I am <span class="name-accent svelte-1bmiiuv">Temiloluwa</span> <span class="role-title svelte-1bmiiuv">Software Developer</span></h1> <p class="lead svelte-1bmiiuv">I am a software developer with 5+ years of experience building products across web,
				blockchain, systems, and embedded spaces. I design and ship reliable software that balances
				product thinking, engineering quality, and real-world usability.</p> <div class="action-row svelte-1bmiiuv"><a class="primary-action svelte-1bmiiuv"${attr("href", `${stringify(base)}/docs/AKINTADE TEMILOLUWA AYOMIDE CV.pdf`)}>`);
  File_text($$payload, { size: 17 });
  $$payload.out.push(`<!----> My Resume</a> <a class="secondary-action svelte-1bmiiuv" href="mailto:akintadetemi19@gmail.com">Got a project? `);
  Arrow_up_right($$payload, { size: 16 });
  $$payload.out.push(`<!----></a></div> <div class="stack-block svelte-1bmiiuv"><span class="stack-label svelte-1bmiiuv">Core Stack</span> <ul class="tech-list svelte-1bmiiuv"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let tool = each_array[$$index];
    $$payload.out.push(`<li class="tech-item svelte-1bmiiuv"><img${attr("src", tool.logo)}${attr("alt", `${tool.name} logo`)} class="tech-logo svelte-1bmiiuv" referrerpolicy="no-referrer"/> <span>${escape_html(tool.name)}</span></li>`);
  }
  $$payload.out.push(`<!--]--></ul></div></div> <div class="hero-visual svelte-1bmiiuv"><figure class="portrait-frame svelte-1bmiiuv"><div class="portrait-media svelte-1bmiiuv"><img${attr("src", `${stringify(base)}/images/temiloluwa-peerlist.jpg`)} alt="Temiloluwa Akintade, software developer" width="400" height="500" fetchpriority="high" referrerpolicy="no-referrer" class="svelte-1bmiiuv"/></div> <figcaption class="portrait-caption svelte-1bmiiuv"><strong class="svelte-1bmiiuv">5+ Years</strong> <span class="svelte-1bmiiuv">Web · Blockchain · Systems</span></figcaption></figure></div></div> <div class="about-band svelte-1bmiiuv"><div class="about-copy svelte-1bmiiuv"><h2 class="svelte-1bmiiuv">About me</h2> <p class="svelte-1bmiiuv">I have spent the last 5+ years building software across the stack — from polished web
				experiences to smart contract and onchain product work, low-level systems, and embedded
				prototypes.</p> <p class="svelte-1bmiiuv">My stack spans React, Next.js, TailwindCSS, Svelte, TypeScript, Solidity, Foundry, C, and
				Arduino. I enjoy turning ambitious ideas into real, usable products that work in the wild.</p></div> <div class="about-disciplines svelte-1bmiiuv"><h3 class="svelte-1bmiiuv">What I build</h3> <ul class="svelte-1bmiiuv"><!--[-->`);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let service = each_array_1[$$index_1];
    const Icon2 = service.icon;
    $$payload.out.push(`<li class="svelte-1bmiiuv"><span class="discipline-icon svelte-1bmiiuv">`);
    Icon2($$payload, { size: 18 });
    $$payload.out.push(`<!----></span> <span>${escape_html(service.name)}</span></li>`);
  }
  $$payload.out.push(`<!--]--></ul></div></div></section>`);
}
function Mail($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.544.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    ["path", { "d": "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }],
    [
      "rect",
      { "x": "2", "y": "4", "width": "20", "height": "16", "rx": "2" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "mail" },
    $$sanitized_props,
    {
      /**
       * @component @name Mail
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMjIgNy04Ljk5MSA1LjcyN2EyIDIgMCAwIDEtMi4wMDkgMEwyIDciIC8+CiAgPHJlY3QgeD0iMiIgeT0iNCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjE2IiByeD0iMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/mail
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->`);
        slot($$payload2, $$props, "default", {});
        $$payload2.out.push(`<!---->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Linkedin($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.544.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
      }
    ],
    ["rect", { "width": "4", "height": "12", "x": "2", "y": "9" }],
    ["circle", { "cx": "4", "cy": "4", "r": "2" }]
  ];
  Icon($$payload, spread_props([
    { name: "linkedin" },
    $$sanitized_props,
    {
      /**
       * @component @name Linkedin
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYgOGE2IDYgMCAwIDEgNiA2djdoLTR2LTdhMiAyIDAgMCAwLTItMiAyIDIgMCAwIDAtMiAydjdoLTR2LTdhNiA2IDAgMCAxIDYtNnoiIC8+CiAgPHJlY3Qgd2lkdGg9IjQiIGhlaWdodD0iMTIiIHg9IjIiIHk9IjkiIC8+CiAgPGNpcmNsZSBjeD0iNCIgY3k9IjQiIHI9IjIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/linkedin
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       * @deprecated Brand icons have been deprecated and are due to be removed, please refer to https://github.com/lucide-icons/lucide/issues/670. We recommend using https://simpleicons.org/?q=linkedin instead. This icon will be removed in v1.0
       */
      iconNode,
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->`);
        slot($$payload2, $$props, "default", {});
        $$payload2.out.push(`<!---->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Github($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.544.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
      }
    ],
    ["path", { "d": "M9 18c-4.51 2-5-2-7-2" }]
  ];
  Icon($$payload, spread_props([
    { name: "github" },
    $$sanitized_props,
    {
      /**
       * @component @name Github
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgMjJ2LTRhNC44IDQuOCAwIDAgMC0xLTMuNWMzIDAgNi0yIDYtNS41LjA4LTEuMjUtLjI3LTIuNDgtMS0zLjUuMjgtMS4xNS4yOC0yLjM1IDAtMy41IDAgMC0xIDAtMyAxLjUtMi42NC0uNS01LjM2LS41LTggMEM2IDIgNSAyIDUgMmMtLjMgMS4xNS0uMyAyLjM1IDAgMy41QTUuNDAzIDUuNDAzIDAgMCAwIDQgOWMwIDMuNSAzIDUuNSA2IDUuNS0uMzkuNDktLjY4IDEuMDUtLjg1IDEuNjUtLjE3LjYtLjIyIDEuMjMtLjE1IDEuODV2NCIgLz4KICA8cGF0aCBkPSJNOSAxOGMtNC41MSAyLTUtMi03LTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/github
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       * @deprecated Brand icons have been deprecated and are due to be removed, please refer to https://github.com/lucide-icons/lucide/issues/670. We recommend using https://simpleicons.org/?q=github instead. This icon will be removed in v1.0
       */
      iconNode,
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->`);
        slot($$payload2, $$props, "default", {});
        $$payload2.out.push(`<!---->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Book_open($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.544.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    ["path", { "d": "M12 7v14" }],
    [
      "path",
      {
        "d": "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "book-open" },
    $$sanitized_props,
    {
      /**
       * @component @name BookOpen
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgN3YxNCIgLz4KICA8cGF0aCBkPSJNMyAxOGExIDEgMCAwIDEtMS0xVjRhMSAxIDAgMCAxIDEtMWg1YTQgNCAwIDAgMSA0IDQgNCA0IDAgMCAxIDQtNGg1YTEgMSAwIDAgMSAxIDF2MTNhMSAxIDAgMCAxLTEgMWgtNmEzIDMgMCAwIDAtMyAzIDMgMyAwIDAgMC0zLTN6IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/book-open
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->`);
        slot($$payload2, $$props, "default", {});
        $$payload2.out.push(`<!---->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Heart($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.544.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "heart" },
    $$sanitized_props,
    {
      /**
       * @component @name Heart
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMiA5LjVhNS41IDUuNSAwIDAgMSA5LjU5MS0zLjY3Ni41Ni41NiAwIDAgMCAuODE4IDBBNS40OSA1LjQ5IDAgMCAxIDIyIDkuNWMwIDIuMjktMS41IDQtMyA1LjVsLTUuNDkyIDUuMzEzYTIgMiAwIDAgMS0zIC4wMTlMNSAxNWMtMS41LTEuNS0zLTMuMi0zLTUuNSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/heart
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->`);
        slot($$payload2, $$props, "default", {});
        $$payload2.out.push(`<!---->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Menu($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.544.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    ["path", { "d": "M4 5h16" }],
    ["path", { "d": "M4 12h16" }],
    ["path", { "d": "M4 19h16" }]
  ];
  Icon($$payload, spread_props([
    { name: "menu" },
    $$sanitized_props,
    {
      /**
       * @component @name Menu
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNCA1aDE2IiAvPgogIDxwYXRoIGQ9Ik00IDEyaDE2IiAvPgogIDxwYXRoIGQ9Ik00IDE5aDE2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/menu
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$payload2) => {
        $$payload2.out.push(`<!---->`);
        slot($$payload2, $$props, "default", {});
        $$payload2.out.push(`<!---->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Contacts($$payload) {
  const contactIcons = [
    {
      id: 0,
      icon: Mail,
      link: "mailto:akintadetemi19@gmail.com",
      name: "Email"
    },
    {
      id: 1,
      customSvg: "discord",
      link: "https://discord.com/users/1061727196953190440",
      name: "Discord"
    },
    {
      id: 2,
      customSvg: "x",
      link: "https://x.com/Temi_tade2805",
      name: "X"
    },
    {
      id: 3,
      icon: Linkedin,
      link: "https://linkedin.com/in/temiloluwa-akintade-4b6798254",
      name: "LinkedIn"
    },
    {
      id: 4,
      icon: Github,
      link: "https://github.com/Temi-Tade",
      name: "GitHub"
    }
  ];
  const each_array = ensure_array_like(contactIcons);
  $$payload.out.push(`<section class="contact-section svelte-1w9k76x" id="contacts"><div class="contact-panel svelte-1w9k76x"><div class="contact-copy svelte-1w9k76x"><span class="kicker svelte-1w9k76x">Contact</span> <h2 class="svelte-1w9k76x">Let’s build something meaningful.</h2> <p class="svelte-1w9k76x">I work across product, web, blockchain, and platform engineering — from frontend experiences
				to robust backend and systems work.</p></div> <div class="contact-actions svelte-1w9k76x"><a class="primary-contact svelte-1w9k76x" href="mailto:akintadetemi19@gmail.com">Book a call `);
  Arrow_up_right($$payload, { size: 17 });
  $$payload.out.push(`<!----></a> <div class="social-links svelte-1w9k76x"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let contact = each_array[$$index];
    $$payload.out.push(`<a${attr("href", contact.link)}${attr("title", contact.name)}${attr("aria-label", contact.name)}${attr("target", contact.link.startsWith("http") ? "_blank" : void 0)}${attr("rel", contact.link.startsWith("http") ? "noreferrer" : void 0)} class="svelte-1w9k76x">`);
    if (contact.customSvg === "x") {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-1w9k76x"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932zm-1.292 19.493h2.039L6.486 3.24H4.298z"></path></svg>`);
    } else {
      $$payload.out.push("<!--[!-->");
      if (contact.customSvg === "discord") {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-1w9k76x"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path></svg>`);
      } else {
        $$payload.out.push("<!--[!-->");
        if (contact.icon) {
          $$payload.out.push("<!--[-->");
          const Icon2 = contact.icon;
          Icon2($$payload, { size: 19 });
        } else {
          $$payload.out.push("<!--[!-->");
        }
        $$payload.out.push(`<!--]-->`);
      }
      $$payload.out.push(`<!--]-->`);
    }
    $$payload.out.push(`<!--]--></a>`);
  }
  $$payload.out.push(`<!--]--></div></div></div></section>`);
}
function Header($$payload) {
  const links = [
    { id: 0, name: "Home", href: "#top" },
    { id: 1, name: "About", href: "#about" },
    { id: 2, name: "Projects", href: "#projects" },
    { id: 3, name: "Articles", href: "#articles" },
    { id: 4, name: "Contacts", href: "#contacts" }
  ];
  let isMenuOpen = false;
  const each_array = ensure_array_like(links);
  $$payload.out.push(`<section class="topbar svelte-1j7efyp"><header class="nav-shell svelte-1j7efyp"><a href="#top" class="brand svelte-1j7efyp" aria-label="Temiloluwa home page"><img${attr("src", `${stringify(base)}/images/TEEE.png`)} alt="Temiloluwa" class="svelte-1j7efyp"/></a> <nav${attr_class("nav-panel svelte-1j7efyp", void 0, { "open": isMenuOpen })} aria-label="Main navigation"><ul class="svelte-1j7efyp"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let link = each_array[$$index];
    $$payload.out.push(`<li><a${attr("href", link.href)} class="nav-link svelte-1j7efyp">${escape_html(link.name)}</a></li>`);
  }
  $$payload.out.push(`<!--]--> <li class="mobile-cta-item svelte-1j7efyp"><a href="mailto:akintadetemi19@gmail.com" class="nav-cta mobile-cta svelte-1j7efyp">Hire me</a></li></ul></nav> <div class="nav-actions svelte-1j7efyp"><a href="mailto:akintadetemi19@gmail.com" class="nav-cta desktop-cta svelte-1j7efyp">Hire me</a> <button type="button" class="menu-button svelte-1j7efyp" aria-label="Toggle navigation menu"${attr("aria-expanded", isMenuOpen)}>`);
  {
    $$payload.out.push("<!--[!-->");
    Menu($$payload, { size: 20 });
  }
  $$payload.out.push(`<!--]--></button></div></header></section>`);
}
function Projects($$payload) {
  const stackIcons = {
    nextjs: {
      name: "Next.js",
      logo: "https://cdn.simpleicons.org/nextdotjs/f4f4f5"
    },
    typescript: {
      name: "TypeScript",
      logo: "https://cdn.simpleicons.org/typescript/3178c6"
    },
    supabase: {
      name: "Supabase",
      logo: "https://cdn.simpleicons.org/supabase/3ecf8e"
    },
    tailwindcss: {
      name: "Tailwind CSS",
      logo: "https://cdn.simpleicons.org/tailwindcss/38bdf8"
    },
    react: {
      name: "React",
      logo: "https://cdn.simpleicons.org/react/61dafb"
    },
    javascript: {
      name: "JavaScript",
      logo: "https://cdn.simpleicons.org/javascript/f7df1e"
    },
    nodejs: {
      name: "Node.js",
      logo: "https://cdn.simpleicons.org/nodedotjs/5fa04e"
    },
    hardhat: { name: "Hardhat", custom: "hardhat" },
    c: { name: "C", logo: "https://cdn.simpleicons.org/c/60a5fa" }
  };
  const projects = [
    {
      id: 4,
      name: "ShipTok",
      link: "https://shiptok-app.vercel.app",
      description: "A social discovery platform for makers and builders to share builds, explore trending projects, and connect with creators.",
      stack: [
        stackIcons.nextjs,
        stackIcons.typescript,
        stackIcons.supabase,
        stackIcons.tailwindcss
      ],
      tags: ["Web App", "Social", "Makers", "Discovery"],
      image: `${base}/images/shiptok.png`
    },
    {
      id: 5,
      name: "Ohm-E",
      link: "https://github.com/Temi-Tade/Ohm-E",
      github: "https://github.com/Temi-Tade/Ohm-E",
      description: "An interactive browser-based circuit simulator with a component library, real-time current flow, voltage coloring, and oscilloscope.",
      stack: [
        stackIcons.react,
        stackIcons.typescript,
        stackIcons.tailwindcss
      ],
      tags: ["Electronics", "Simulation", "Interactive", "Web App"],
      image: `${base}/images/ohm-e.png`
    },
    {
      id: 0,
      name: "RivETH",
      link: "https://temi-tade.github.io/RivETHDocs",
      github: "https://github.com/Temi-Tade/RivETH",
      description: "An open source Ethereum smart contract infrastructure for deploying and interacting with smart contracts. Alchemy-listed.",
      stack: [stackIcons.javascript, stackIcons.nodejs, stackIcons.hardhat],
      tags: ["Ethereum", "Smart Contracts", "Open Source", "Dev Tools"],
      image: `${base}/images/riveth.png`
    },
    {
      id: 1,
      name: "qodon",
      link: "https://github.com/Temi-Tade/qodon",
      github: "https://github.com/Temi-Tade/qodon",
      description: "A CLI-based genomics tool. Written in C.",
      stack: [stackIcons.c],
      tags: ["CLI", "Genomics", "Bioinformatics", "C"],
      image: `${base}/images/qdn_qft.png`
    },
    {
      id: 2,
      name: "Medusa",
      link: "https://temi-tade.github.io/medusa",
      github: "https://github.com/Temi-Tade/medusa",
      description: "A password-based file encryption tool with lossless decryption.",
      stack: [stackIcons.javascript],
      tags: ["Encryption", "Security", "File Management"],
      image: `${base}/images/medusa.png`
    },
    {
      id: 3,
      name: "Skaylar",
      link: "https://temi-tade.github.io/Skaylar",
      github: "https://github.com/Temi-Tade/Skaylar",
      description: "A tool for analysing and visualizing first-digit distributions using Benford's Law.",
      stack: [stackIcons.javascript],
      tags: [
        "Data Analysis",
        "Visualization",
        "Benford's Law",
        "Statistics"
      ],
      image: `${base}/images/Skaylar.png`
    }
  ];
  const each_array = ensure_array_like(projects);
  $$payload.out.push(`<section class="projects-section svelte-181xidc" id="projects">`);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <div class="section-heading svelte-181xidc"><div><span class="kicker svelte-181xidc">Selected work</span> <h2 class="svelte-181xidc">Builds that span product, blockchain, and systems thinking.</h2></div> <a href="https://github.com/Temi-Tade" target="_blank" rel="noreferrer" class="github-inline svelte-181xidc">Visit my GitHub `);
  Arrow_up_right($$payload, { size: 16 });
  $$payload.out.push(`<!----></a></div> <ul class="projects-grid svelte-181xidc"><!--[-->`);
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let project = each_array[$$index_1];
    const each_array_1 = ensure_array_like(project.stack);
    $$payload.out.push(`<li class="project-card svelte-181xidc"><button type="button" class="image-button svelte-181xidc"${attr("aria-label", `Inspect ${project.name} screenshot`)}><img${attr("src", project.image)}${attr("alt", project.description)} loading="lazy" referrerpolicy="no-referrer" class="svelte-181xidc"/></button> <div class="project-body svelte-181xidc"><div class="project-header svelte-181xidc"><h3 class="svelte-181xidc">${escape_html(project.name)}</h3></div> <p class="project-description svelte-181xidc">${escape_html(project.description)}</p> <ul class="project-stack svelte-181xidc"${attr("aria-label", `${project.name} tech stack`)}><!--[-->`);
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let tech = each_array_1[$$index];
      $$payload.out.push(`<li class="stack-icon svelte-181xidc"${attr("title", tech.name)}>`);
      if (tech.custom === "hardhat") {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<svg viewBox="0 0 24 24" width="18" height="18" role="img" aria-label="Hardhat" fill="none" class="svelte-181xidc"><path d="M12 4.5c-4.2 0-7.5 3.2-7.5 7.3V15h15v-3.2c0-4.1-3.3-7.3-7.5-7.3Z" fill="#FACC15"></path><path d="M10.25 4.75V12h3.5V4.75a7.5 7.5 0 0 0-3.5 0Z" fill="#FEF08A"></path><rect x="2.5" y="14.5" width="19" height="3" rx="1.5" fill="#EAB308"></rect></svg>`);
      } else {
        $$payload.out.push("<!--[!-->");
        if (tech.logo) {
          $$payload.out.push("<!--[-->");
          $$payload.out.push(`<img${attr("src", tech.logo)}${attr("alt", tech.name)} width="18" height="18" loading="lazy" referrerpolicy="no-referrer" class="svelte-181xidc"/>`);
        } else {
          $$payload.out.push("<!--[!-->");
        }
        $$payload.out.push(`<!--]-->`);
      }
      $$payload.out.push(`<!--]--></li>`);
    }
    $$payload.out.push(`<!--]--></ul> <p class="project-tags svelte-181xidc">${escape_html(project.tags.join(" · "))}</p> <div class="project-actions svelte-181xidc">`);
    if (project.github) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<a${attr("href", project.github)} target="_blank" rel="noreferrer" class="project-link ghost-link svelte-181xidc">`);
      Github($$payload, { size: 15 });
      $$payload.out.push(`<!----> GitHub</a>`);
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--> <a${attr("href", project.link)} target="_blank" rel="noreferrer" class="project-link primary-link svelte-181xidc">View project `);
    Arrow_up_right($$payload, { size: 15 });
    $$payload.out.push(`<!----></a></div></div></li>`);
  }
  $$payload.out.push(`<!--]--></ul></section>`);
}
function Articles($$payload) {
  const articles = [
    {
      id: 0,
      title: "I built Medusa - A lossless password-based file encryption tool",
      publication: "DEV Community",
      published: "Aug 29, 2026",
      preview: "A quick look at Medusa, an open-source, client-side file encryption tool built for lossless decryption.",
      href: "https://dev.to/js_cipher/i-built-medusa-a-lossless-password-based-file-encryption-tool-dip"
    },
    {
      id: 1,
      title: "Are computers truly random? How chaos powers randomness.",
      publication: "DEV Community",
      published: "Jul 15, 2026",
      preview: "An exploration of how computers generate randomness and the role chaos plays in the process.",
      href: "https://dev.to/js_cipher/are-computers-truly-random-how-chaos-powers-randomness-4d93"
    },
    {
      id: 2,
      title: "Under the Hood: How Hardware Wallets Keep Your Crypto Safe (Even Over USB and Bluetooth)",
      publication: "CoderLegion",
      preview: "A look at how secure elements and carefully limited USB or Bluetooth connections let hardware wallets sign transactions without exposing private keys.",
      href: "https://coderlegion.com/20141/how-do-web3-hardware-wallets-work"
    },
    {
      id: 3,
      title: "Why I Built RivETH: A Bare-Metal Toolkit for Ethereum Devs",
      publication: "CoderLegion",
      preview: "The story behind a lightweight, browser-based Ethereum toolkit that helps developers compile, deploy, and interact with smart contracts locally.",
      href: "https://coderlegion.com/12311/why-i-built-riveth-a-bare-metal-toolkit-for-ethereum-devs"
    }
  ];
  const publications = [
    { name: "Dev.to", href: "https://dev.to/js_cipher" },
    { name: "Medium", href: "https://medium.com/@temi_lolu0x0" },
    {
      name: "CoderLegion",
      href: "https://coderlegion.com/user/temi_0x0"
    },
    { name: "Peerlist", href: "https://peerlist.io/temi_lolu" }
  ];
  const each_array = ensure_array_like(articles);
  const each_array_1 = ensure_array_like(publications);
  $$payload.out.push(`<section class="articles-section svelte-m39zqz" id="articles"><div class="section-heading svelte-m39zqz"><div><span class="kicker svelte-m39zqz">Writing &amp; ideas</span> <h2 class="svelte-m39zqz">Articles &amp; publications</h2> <p class="section-sub svelte-m39zqz">Notes on software, security, and the ideas behind the things I build.</p></div></div> <ul class="articles-grid svelte-m39zqz"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let article = each_array[$$index];
    $$payload.out.push(`<li class="article-card svelte-m39zqz"><div class="article-meta svelte-m39zqz"><span class="svelte-m39zqz">${escape_html(article.publication)}</span> `);
    if (article.published) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<span class="sep svelte-m39zqz" aria-hidden="true">·</span> <time class="svelte-m39zqz">${escape_html(article.published)}</time>`);
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--></div> <h3 class="svelte-m39zqz">${escape_html(article.title)}</h3> <p class="svelte-m39zqz">${escape_html(article.preview)}</p> <a${attr("href", article.href)} target="_blank" rel="noreferrer" class="read-link svelte-m39zqz">Read article `);
    Arrow_up_right($$payload, { size: 16 });
    $$payload.out.push(`<!----></a></li>`);
  }
  $$payload.out.push(`<!--]--></ul> <div class="publication-links svelte-m39zqz" aria-label="More publications"><span class="pub-label svelte-m39zqz">`);
  Book_open($$payload, { size: 15 });
  $$payload.out.push(`<!----> Find me on</span> <div class="pub-items svelte-m39zqz"><!--[-->`);
  for (let idx = 0, $$length = each_array_1.length; idx < $$length; idx++) {
    let publication = each_array_1[idx];
    if (idx > 0) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<span class="sep svelte-m39zqz" aria-hidden="true">·</span>`);
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--> <a${attr("href", publication.href)} target="_blank" rel="noreferrer" class="svelte-m39zqz">${escape_html(publication.name)}</a>`);
  }
  $$payload.out.push(`<!--]--></div></div></section>`);
}
function _page($$payload) {
  const siteUrl = "https://temi-tade.github.io/portfolio-website/";
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Temiloluwa Akintade",
    url: siteUrl,
    jobTitle: "Software Developer",
    description: "Software developer building web applications, blockchain products, smart contracts, systems, and embedded software.",
    sameAs: [
      "https://github.com/Temi-Tade",
      "https://x.com/Temi_tade2805",
      "https://linkedin.com/in/temiloluwa-akintade-4b6798254",
      "https://dev.to/js_cipher",
      "https://medium.com/@temi_lolu0x0",
      "https://coderlegion.com/user/temi_0x0",
      "https://peerlist.io/temi_lolu"
    ]
  };
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Temiloluwa Akintade | Software Developer</title>`;
    $$payload2.out.push(`<meta name="description" content="Temiloluwa Akintade is a software developer building thoughtful web applications, blockchain products, smart contracts, systems, and embedded software."/> <meta name="author" content="Temiloluwa Akintade"/> <link rel="canonical"${attr("href", siteUrl)}/> <meta property="og:type" content="website"/> <meta property="og:title" content="Temiloluwa Akintade | Software Developer"/> <meta property="og:description" content="Web applications, blockchain products, smart contracts, systems, and embedded software by Temiloluwa Akintade."/> <meta property="og:url"${attr("content", siteUrl)}/> <meta property="og:image"${attr("content", `${siteUrl}images/temiloluwa-peerlist.jpg`)}/> <meta property="og:image:alt" content="Temiloluwa Akintade, software developer"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title" content="Temiloluwa Akintade | Software Developer"/> <meta name="twitter:description" content="Web applications, blockchain products, smart contracts, systems, and embedded software by Temiloluwa Akintade."/> <meta name="twitter:image"${attr("content", `${siteUrl}images/temiloluwa-peerlist.jpg`)}/> ${html(`<script type="application/ld+json">${JSON.stringify(personSchema)}<\/script>`)}`);
  });
  $$payload.out.push(`<div class="page-shell svelte-1uha8ag" id="top">`);
  Header($$payload);
  $$payload.out.push(`<!----> <main class="content-shell svelte-1uha8ag">`);
  About($$payload);
  $$payload.out.push(`<!----> `);
  Projects($$payload);
  $$payload.out.push(`<!----> `);
  Articles($$payload);
  $$payload.out.push(`<!----> `);
  Contacts($$payload);
  $$payload.out.push(`<!----></main> <footer class="site-footer svelte-1uha8ag"><p class="svelte-1uha8ag">Made with `);
  Heart($$payload, { fill: "red", size: 16, style: "vertical-align: middle;" });
  $$payload.out.push(`<!----> by Temiloluwa. All rights reserved.</p></footer></div>`);
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-BUhPKNnh.js.map
