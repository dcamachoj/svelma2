import { SvelteComponent } from "svelte";
import type { BulmaHelper, ContentSize } from '../../utils/bulma.types.js';
declare const __propDef: {
    props: {
        bulma?: BulmaHelper | undefined;
        size?: ContentSize | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ContentProps = typeof __propDef.props;
export type ContentEvents = typeof __propDef.events;
export type ContentSlots = typeof __propDef.slots;
export default class Content extends SvelteComponent<ContentProps, ContentEvents, ContentSlots> {
}
export {};
