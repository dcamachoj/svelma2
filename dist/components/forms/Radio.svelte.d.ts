import { SvelteComponent } from "svelte";
import type { BulmaHelper } from '../../utils/bulma.types.js';
declare const __propDef: {
    props: {
        bulma?: BulmaHelper | undefined;
        id: string;
        name: string;
        checked: boolean;
        disabled?: boolean | undefined;
    };
    events: {
        'value-changed': CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type RadioProps = typeof __propDef.props;
export type RadioEvents = typeof __propDef.events;
export type RadioSlots = typeof __propDef.slots;
export default class Radio extends SvelteComponent<RadioProps, RadioEvents, RadioSlots> {
}
export {};
