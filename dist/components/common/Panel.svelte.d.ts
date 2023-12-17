import { SvelteComponent } from "svelte";
import type { BulmaHelper, Colors } from '../../utils/bulma.types.js';
import PanelBlock from './PanelBlock.svelte';
import PanelCheckbox from './PanelCheckbox.svelte';
import PanelHeading from './PanelHeading.svelte';
import PanelIcon from './PanelIcon.svelte';
import PanelTabs from './PanelTabs.svelte';
declare const __propDef: {
    props: {
        bulma?: BulmaHelper | undefined;
        color?: Colors | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            PanelHeading: typeof PanelHeading;
            PanelBlock: typeof PanelBlock;
            PanelCheckbox: typeof PanelCheckbox;
            PanelIcon: typeof PanelIcon;
            PanelTabs: typeof PanelTabs;
        };
    };
};
export type PanelProps = typeof __propDef.props;
export type PanelEvents = typeof __propDef.events;
export type PanelSlots = typeof __propDef.slots;
export default class Panel extends SvelteComponent<PanelProps, PanelEvents, PanelSlots> {
}
export {};
