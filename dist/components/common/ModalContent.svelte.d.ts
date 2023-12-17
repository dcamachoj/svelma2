import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        active: boolean;
    };
    events: {
        close: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ModalContentProps = typeof __propDef.props;
export type ModalContentEvents = typeof __propDef.events;
export type ModalContentSlots = typeof __propDef.slots;
export default class ModalContent extends SvelteComponent<ModalContentProps, ModalContentEvents, ModalContentSlots> {
}
export {};
