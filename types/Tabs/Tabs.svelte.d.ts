import type { SvelteComponentTyped } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";

type $RestProps = SvelteHTMLElements["div"];

type $Props = {
  /**
   * Specify the selected tab index
   * @default 0
   */
  selected?: number;

  /**
   * Specify the type of tabs
   * @default "default"
   */
  type?: "default" | "container";

  /**
   * Set to `true` for tabs to have an auto-width
   * @default false
   */
  autoWidth?: boolean;

  /**
   * Specify the ARIA label for the chevron icon
   * @default "Show menu options"
   */
  iconDescription?: string;

  /**
   * Specify the tab trigger href attribute
   * @default "#"
   */
  triggerHref?: string;

  [key: `data-${string}`]: any;
};

export type TabsProps = Omit<$RestProps, keyof $Props> & $Props;

export default class Tabs extends SvelteComponentTyped<
  TabsProps,
  {
    change: CustomEvent<number>;
    keypress: WindowEventMap["keypress"];
    click: WindowEventMap["click"];
  },
  { default: {}; content: {} }
> {}
