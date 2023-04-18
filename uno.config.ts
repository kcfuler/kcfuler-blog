import { defineConfig } from "unocss";
import { presetUno } from "@unocss/preset-uno";
import { presetAttributify } from "unocss";
import { presetIcons } from "unocss";

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
});
