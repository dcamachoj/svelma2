import { SvelteComponent } from "svelte";
import type { BulmaHelper } from '../../utils/bulma.types.js';
import Cardheader from './Cardheader.svelte';
import CardContent from './CardContent.svelte';
import CardFooter from './CardFooter.svelte';
import CardImage from './CardImage.svelte';
declare const __propDef: {
    props: {
        bulma?: BulmaHelper | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            Cardheader: typeof Cardheader;
            CardContent: typeof CardContent;
            CardFooter: typeof CardFooter;
            CardImage: typeof CardImage;
        };
    };
};
export type CardProps = typeof __propDef.props;
export type CardEvents = typeof __propDef.events;
export type CardSlots = typeof __propDef.slots;
export default class Card extends SvelteComponent<CardProps, CardEvents, CardSlots> {
}
export {};
