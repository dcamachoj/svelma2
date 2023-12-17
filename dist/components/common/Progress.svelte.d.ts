import { SvelteComponent } from "svelte";
import type { BulmaHelper, Colors, ContentSize } from '../../utils/bulma.types.js';
declare const __propDef: {
    props: {
        bulma?: BulmaHelper | undefined;
        value: number;
        max?: number | undefined;
        indeterminate?: boolean | undefined;
        size?: ContentSize | 'normal' | undefined;
        color?: Colors | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ProgressProps = typeof __propDef.props;
export type ProgressEvents = typeof __propDef.events;
export type ProgressSlots = typeof __propDef.slots;
export default class Progress extends SvelteComponent<ProgressProps, ProgressEvents, ProgressSlots> {
}
export {};
