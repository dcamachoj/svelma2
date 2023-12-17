import { SvelteComponent } from "svelte";
import type { BulmaHelper } from '../../utils/bulma.types.js';
import Row from './Row.svelte';
declare const __propDef: {
    props: {
        bulma?: BulmaHelper | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            Row: typeof Row;
        };
    };
};
export type TableProps = typeof __propDef.props;
export type TableEvents = typeof __propDef.events;
export type TableSlots = typeof __propDef.slots;
export default class Table extends SvelteComponent<TableProps, TableEvents, TableSlots> {
}
export {};
