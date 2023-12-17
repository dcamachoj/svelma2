import { SvelteComponent } from "svelte";
import type { Action, BulmaHelper } from '../../utils/bulma.types.js';
declare const __propDef: {
    props: {
        bulma?: BulmaHelper | undefined;
        tabs: Action[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PanelTabsProps = typeof __propDef.props;
export type PanelTabsEvents = typeof __propDef.events;
export type PanelTabsSlots = typeof __propDef.slots;
export default class PanelTabs extends SvelteComponent<PanelTabsProps, PanelTabsEvents, PanelTabsSlots> {
}
export {};
