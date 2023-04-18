import { defineConfig } from "astro/config";
import Unocss from "unocss/astro";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [
    solidJs(),
    Unocss({
      injectReset: true,
    }),
  ],
});
