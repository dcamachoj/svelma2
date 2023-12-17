import { SvelteComponent } from "svelte";
import type { BulmaHelper, OlType } from '../../utils/bulma.types.js';
declare const __propDef: {
    props: {
        bulma?: BulmaHelper | undefined;
        type?: OlType | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type OrderedListProps = typeof __propDef.props;
export type OrderedListEvents = typeof __propDef.events;
export type OrderedListSlots = typeof __propDef.slots;
export default class OrderedList extends SvelteComponent<OrderedListProps, OrderedListEvents, OrderedListSlots> {
}
export {};
