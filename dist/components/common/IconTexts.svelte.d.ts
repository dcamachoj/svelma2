import { SvelteComponent } from "svelte";
import type { BulmaHelper, IconTextData } from '../../utils/bulma.types.js';
import type { ClsArgument } from '../../utils/classnames.js';
declare const __propDef: {
    props: {
        icons: IconTextData[];
        className?: ClsArgument;
        bulma?: BulmaHelper | undefined;
        block?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IconTextsProps = typeof __propDef.props;
export type IconTextsEvents = typeof __propDef.events;
export type IconTextsSlots = typeof __propDef.slots;
export default class IconTexts extends SvelteComponent<IconTextsProps, IconTextsEvents, IconTextsSlots> {
}
export {};
