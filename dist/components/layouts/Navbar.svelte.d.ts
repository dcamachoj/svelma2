import { SvelteComponent } from "svelte";
import type { BwColors, Colors } from '../../utils/bulma.types.js';
import NavbarBrand from './NavbarBrand.svelte';
import NavbarDivider from './NavbarDivider.svelte';
import NavbarDropdown from './NavbarDropdown.svelte';
import NavbarEnd from './NavbarEnd.svelte';
import NavbarItem from './NavbarItem.svelte';
import NavbarMenu from './NavbarMenu.svelte';
import NavbarStart from './NavbarStart.svelte';
declare const __propDef: {
    props: {
        isTransparent?: boolean | undefined;
        fixed?: 'top' | 'bottom' | undefined;
        color?: Colors | BwColors | undefined;
        isSpaced?: boolean | undefined;
        hasShadow?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            NavbarBrand: typeof NavbarBrand;
            NavbarDivider: typeof NavbarDivider;
            NavbarDropdown: typeof NavbarDropdown;
            NavbarEnd: typeof NavbarEnd;
            NavbarStart: typeof NavbarStart;
            NavbarItem: typeof NavbarItem;
            NavbarMenu: typeof NavbarMenu;
        };
    };
};
export type NavbarProps = typeof __propDef.props;
export type NavbarEvents = typeof __propDef.events;
export type NavbarSlots = typeof __propDef.slots;
export default class Navbar extends SvelteComponent<NavbarProps, NavbarEvents, NavbarSlots> {
}
export {};
