import { SvelteComponent } from "svelte";
import type { BulmaHelper } from '../../utils/bulma.types.js';
import Table from './Table.svelte';
declare const __propDef: {
    props: {
        bulma?: BulmaHelper | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            Table: typeof Table;
        };
    };
};
export type TableContainerProps = typeof __propDef.props;
export type TableContainerEvents = typeof __propDef.events;
export type TableContainerSlots = typeof __propDef.slots;
export default class TableContainer extends SvelteComponent<TableContainerProps, TableContainerEvents, TableContainerSlots> {
}
export {};
