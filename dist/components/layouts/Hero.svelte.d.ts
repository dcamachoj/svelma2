import { SvelteComponent } from "svelte";
import type { BulmaHelper, Colors, HeroSize } from '../../utils/bulma.types.js';
import HeroBody from './HeroBody.svelte';
import HeroFoot from './HeroFoot.svelte';
import HeroHead from './HeroHead.svelte';
declare const __propDef: {
    props: {
        bulma?: BulmaHelper | undefined;
        color?: Colors | undefined;
        size?: HeroSize | undefined;
        isFullHeightWithNavbar?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            HeroHead: typeof HeroHead;
            HeroBody: typeof HeroBody;
            HeroFoot: typeof HeroFoot;
        };
    };
};
export type HeroProps = typeof __propDef.props;
export type HeroEvents = typeof __propDef.events;
export type HeroSlots = typeof __propDef.slots;
export default class Hero extends SvelteComponent<HeroProps, HeroEvents, HeroSlots> {
}
export {};
