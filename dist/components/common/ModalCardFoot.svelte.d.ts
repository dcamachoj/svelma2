import { SvelteComponent } from "svelte";
import type { Action } from '../../utils/bulma.types.js';
declare const __propDef: {
    props: {
        actions?: Action[] | undefined;
    };
    events: {
        action: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ModalCardFootProps = typeof __propDef.props;
export type ModalCardFootEvents = typeof __propDef.events;
export type ModalCardFootSlots = typeof __propDef.slots;
export default class ModalCardFoot extends SvelteComponent<ModalCardFootProps, ModalCardFootEvents, ModalCardFootSlots> {
}
export {};
