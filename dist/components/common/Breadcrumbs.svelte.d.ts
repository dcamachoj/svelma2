import { SvelteComponent } from "svelte";
import type { Action, BreadcrumbSeparator, BulmaHelper, ContentSize } from '../../utils/bulma.types.js';
declare const __propDef: {
    props: {
        bulma?: BulmaHelper | undefined;
        items: Action[];
        active?: string | undefined;
        isCentered?: boolean | undefined;
        isRight?: boolean | undefined;
        separator?: BreadcrumbSeparator | undefined;
        size?: ContentSize | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BreadcrumbsProps = typeof __propDef.props;
export type BreadcrumbsEvents = typeof __propDef.events;
export type BreadcrumbsSlots = typeof __propDef.slots;
export default class Breadcrumbs extends SvelteComponent<BreadcrumbsProps, BreadcrumbsEvents, BreadcrumbsSlots> {
}
export {};
