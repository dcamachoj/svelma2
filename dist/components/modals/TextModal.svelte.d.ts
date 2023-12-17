import { SvelteComponent } from "svelte";
import type { Action, Result } from '../../utils/validators.js';
declare const __propDef: {
    props: {
        id: string;
        active: boolean;
        header: string;
        label: string;
        type?: "number" | "text" | "email" | "tel" | "password" | undefined;
        value: string;
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
export type TextModalProps = typeof __propDef.props;
export type TextModalEvents = typeof __propDef.events;
export type TextModalSlots = typeof __propDef.slots;
export default class TextModal extends SvelteComponent<TextModalProps, TextModalEvents, TextModalSlots> {
}
export {};
