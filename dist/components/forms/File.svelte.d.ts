import { SvelteComponent } from "svelte";
import type { BulmaHelper, BwColors, Colors, FieldAlign, FileItem, InputSize, ModalCheck } from '../../utils/bulma.types.js';
declare const __propDef: {
    props: {
        bulma?: BulmaHelper | undefined;
        id: string;
        value: string | undefined;
        icon?: string | undefined;
        accept?: string | undefined;
        color?: Colors | BwColors | undefined;
        size?: InputSize | undefined;
        check?: ModalCheck<FileItem> | undefined;
        align?: FieldAlign | undefined;
        hasName?: boolean | undefined;
        isRight?: boolean | undefined;
        isFullWidth?: boolean | undefined;
        isBoxed?: boolean | undefined;
    };
    events: {
        select: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type FileProps = typeof __propDef.props;
export type FileEvents = typeof __propDef.events;
export type FileSlots = typeof __propDef.slots;
export default class File extends SvelteComponent<FileProps, FileEvents, FileSlots> {
}
export {};
