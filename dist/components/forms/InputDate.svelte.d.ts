import { SvelteComponent } from "svelte";
import type { BulmaHelper, Colors, InputSize } from '../../utils/bulma.types.js';
import { type Action } from '../../utils/validators.js';
declare const __propDef: {
    props: {
        bulma?: BulmaHelper | undefined;
        id: string;
        value: Date | undefined;
        action?: Action | undefined;
        step?: string | number | undefined;
        placeholder?: string | undefined;
        color?: Colors | undefined;
        size?: InputSize | undefined;
        isRounded?: boolean | undefined;
        isHovered?: boolean | undefined;
        isFocused?: boolean | undefined;
        isStatic?: boolean | undefined;
        readonly?: boolean | undefined;
        disabled?: boolean | undefined;
    };
    events: {
        'value-changed': CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type InputDateProps = typeof __propDef.props;
export type InputDateEvents = typeof __propDef.events;
export type InputDateSlots = typeof __propDef.slots;
export default class InputDate extends SvelteComponent<InputDateProps, InputDateEvents, InputDateSlots> {
}
export {};
