import { SvelteComponent } from "svelte";
import { type ClsArgument } from '../../utils/classnames.js';
import ModalCardHead from './ModalCardHead.svelte';
import ModalCardBody from './ModalCardBody.svelte';
import ModalCardFoot from './ModalCardFoot.svelte';
declare const __propDef: {
    props: {
        active: boolean;
        classes?: ClsArgument;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            ModalCardHead: typeof ModalCardHead;
            ModalCardBody: typeof ModalCardBody;
            ModalCardFoot: typeof ModalCardFoot;
        };
    };
};
export type ModalCardProps = typeof __propDef.props;
export type ModalCardEvents = typeof __propDef.events;
export type ModalCardSlots = typeof __propDef.slots;
export default class ModalCard extends SvelteComponent<ModalCardProps, ModalCardEvents, ModalCardSlots> {
}
export {};
