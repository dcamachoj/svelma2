import { SvelteComponent } from "svelte";
import type { BulmaHelper } from '../../utils/bulma.types.js';
declare const __propDef: {
    props: {
        bulma?: BulmaHelper | undefined;
        isTitleCentered?: boolean | undefined;
        header?: string | undefined;
        buttonIcon?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        button: {};
    };
};
export type CardheaderProps = typeof __propDef.props;
export type CardheaderEvents = typeof __propDef.events;
export type CardheaderSlots = typeof __propDef.slots;
export default class Cardheader extends SvelteComponent<CardheaderProps, CardheaderEvents, CardheaderSlots> {
}
export {};
