import { SvelteComponent } from "svelte";
import type { Action, Result } from '../../utils/validators.js';
declare const __propDef: {
    props: {
        id: string;
        active: boolean;
        header: string;
        label: string;
        value: Date | undefined;
        step?: string | number | undefined;
        valid?: Result | undefined;
        action?: Action | undefined;
        okLabel?: string | undefined;
        okIcon?: "cancel" | "close" | "home" | "no" | "noImage" | "login" | "logout" | "settings" | "save" | "yes" | "upload" | "ruler" | "payment" | "add" | "trash" | "back" | "chevronDown" | undefined;
        clrLabel?: string | undefined;
        clrIcon?: "cancel" | "close" | "home" | "no" | "noImage" | "login" | "logout" | "settings" | "save" | "yes" | "upload" | "ruler" | "payment" | "add" | "trash" | "back" | "chevronDown" | undefined;
    };
    events: {
        clear: CustomEvent<any>;
        accept: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DateModalProps = typeof __propDef.props;
export type DateModalEvents = typeof __propDef.events;
export type DateModalSlots = typeof __propDef.slots;
export default class DateModal extends SvelteComponent<DateModalProps, DateModalEvents, DateModalSlots> {
}
export {};
