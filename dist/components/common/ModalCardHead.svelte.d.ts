import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        header?: string | undefined;
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
export type ModalCardHeadProps = typeof __propDef.props;
export type ModalCardHeadEvents = typeof __propDef.events;
export type ModalCardHeadSlots = typeof __propDef.slots;
export default class ModalCardHead extends SvelteComponent<ModalCardHeadProps, ModalCardHeadEvents, ModalCardHeadSlots> {
}
export {};
