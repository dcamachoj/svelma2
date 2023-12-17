import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ModalCardBodyProps = typeof __propDef.props;
export type ModalCardBodyEvents = typeof __propDef.events;
export type ModalCardBodySlots = typeof __propDef.slots;
export default class ModalCardBody extends SvelteComponent<ModalCardBodyProps, ModalCardBodyEvents, ModalCardBodySlots> {
}
export {};
