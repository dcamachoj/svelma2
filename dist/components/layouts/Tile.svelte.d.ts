import { SvelteComponent } from "svelte";
import type { BulmaHelper, TileType, TileSize, TileLayout } from '../../utils/bulma.types.js';
import type { ClsArgument } from '../../utils/classnames.js';
declare const __propDef: {
    props: {
        bulma?: BulmaHelper | undefined;
        type: TileType;
        className?: ClsArgument;
        size?: TileSize | undefined;
        layout?: TileLayout | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TileProps = typeof __propDef.props;
export type TileEvents = typeof __propDef.events;
export type TileSlots = typeof __propDef.slots;
export default class Tile extends SvelteComponent<TileProps, TileEvents, TileSlots> {
}
export {};
