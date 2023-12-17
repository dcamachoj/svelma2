import { SvelteComponent } from "svelte";
import type { Action, Result } from '../../utils/validators.js';
declare const __propDef: {
    props: {
        id: string;
        active: boolean;
        header: string;
        label: string;
        value: number;
        valid?: Result | undefined;
        action?: Action | undefined;
        okLabel?: string | undefined;
        okIcon?: string | undefined;
        cancelText?: string | undefined;
        cancelIcon?: string | undefined;
        clrLabel?: string | undefined;
        clrIcon?: string | undefined;
    };
    events: {
        clear: CustomEvent<any>;
        accept: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type NumberModalProps = typeof __propDef.props;
export type NumberModalEvents = typeof __propDef.events;
export type NumberModalSlots = typeof __propDef.slots;
export default class NumberModal extends SvelteComponent<NumberModalProps, NumberModalEvents, NumberModalSlots> {
}
export {};
