import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from "unocss";

import transformerAttributifyJsx from "@unocss/transformer-attributify-jsx";

// import transformerAttributifyJsx from "@unocss/transformer-attributify-jsx-babel";

export default defineConfig({
  shortcuts: [
  ],
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetAttributify(),
  ],
  transformers: [transformerAttributifyJsx()],
});