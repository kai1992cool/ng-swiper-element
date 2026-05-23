import { Directive, output } from "@angular/core";
import { Swiper, SwiperOptions } from "swiper/types";
import { SwiperContainerInputs } from "./ng-swiper-element-inputs.class";

export interface SwiperInterfaceOptions {
    swiper: Swiper;
    event: MouseEvent | TouchEvent | PointerEvent;
    progress: number;
    translate: number;
    transition: number;
    breakpointParams: SwiperOptions;
    slideEl: HTMLElement;
    classNames: string;
    speed: number;
    internal: any;
}

export interface SlideClasses {
    swiper: Swiper,
    slides: { slideEl: HTMLElement; classNames: string; index: number }[],
}

export const swiperEvents = [
    'swiperinit',
    'swiperbeforedestroy',
    'swiperslidesupdated',
    'swiperslidechange',
    'swiperslidechangetransitionstart',
    'swiperslidechangetransitionend',
    'swiperslidenexttransitionstart',
    'swiperslidenexttransitionend',
    'swiperslideprevtransitionstart',
    'swiperslideprevtransitionend',
    'swipertransitionstart',
    'swipertransitionend',
    'swipertouchstart',
    'swipertouchmove',
    'swipertouchmoveopposite',
    'swiperslidermove',
    'swipertouchend',
    'swiperclick',
    'swipertap',
    'swiperdoubletap',
    'swiperprogress',
    'swiperreachbeginning',
    'swiperreachend',
    'swipertoedge',
    'swiperfromedge',
    'swipersettranslate',
    'swipersettransition',
    'swiperresize',
    'swiperobserverupdate',
    'swiperbeforeloopfix',
    'swiperloopfix',
    'swiperbreakpoint',
    'swiperactiveindexchange',
    'swipersnapindexchange',
    'swiperrealindexchange',
    'swiperafterinit',
    'swiperbeforeinit',
    'swiperbeforeresize',
    'swiperbeforeslidechangestart',
    'swiperbeforetransitionstart',
    'swiperchangedirection',
    'swiperdoubleclick',
    'swiperdestroy',
    'swipermomentumbounce',
    'swiperorientationchange',
    'swiperslideresettransitionstart',
    'swiperslideresettransitionend',
    'swipersliderfirstmove',
    'swiperslideslengthchange',
    'swiperslidesgridlengthchange',
    'swipersnapgridlengthchange',
    'swiperupdate',
    'swiperlock',
    'swiperunlock',
]

@Directive()
export class SwiperContainerEvents extends SwiperContainerInputs {
    // CORE_EVENTS_START
    /**
     * @ignore
     * Fired right after Swiper initialization.
     * @note Note that with `swiper.on('init')` syntax it will
     * work only in case you set `init: false` parameter.
     *
     * @example
     * ```js
     * const swiper = new Swiper('.swiper', {
     *   init: false,
     *   // other parameters
     * });
     * swiper.on('init', function() {
     *  // do something
     * });
     * // init Swiper
     * swiper.init();
     * ```
     *
     * @example
     * ```js
     * // Otherwise use it as the parameter:
     * const swiper = new Swiper('.swiper', {
     *   // other parameters
     *   on: {
     *     init: function () {
     *       // do something
     *     },
     *   }
     * });
     * ```
     */
    swiperinit = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired right before Swiper destroyed
     *  @ignore 
     */
    swiperbeforedestroy = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired after slides and their sizes are calculated and updated
     *  @ignore 
     */
    swiperslidesupdated = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when currently active slide is changed
     *  @ignore 
     */
    swiperslidechange = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired in the beginning of animation to other slide (next or previous).
     *  @ignore 
     */
    swiperslidechangetransitionstart = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired after animation to other slide (next or previous).
     *  @ignore 
     */
    swiperslidechangetransitionend = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Same as "slideChangeTransitionStart" but for "forward" direction only
     *  @ignore 
     */
    swiperslidenexttransitionstart = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Same as "slideChangeTransitionEnd" but for "forward" direction only
     *  @ignore 
     */
    swiperslidenexttransitionend = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Same as "slideChangeTransitionStart" but for "backward" direction only
     *  @ignore 
     */
    swiperslideprevtransitionstart = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Same as "slideChangeTransitionEnd" but for "backward" direction only
     *  @ignore 
     */
    swiperslideprevtransitionend = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired in the beginning of transition.
     *  @ignore 
     */
    swipertransitionstart = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired after transition.
     *  @ignore 
     */
    swipertransitionend = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when user touch Swiper. Receives `pointerdown` event as an arguments.
     *  @ignore 
     */
    swipertouchstart = output<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();

    /** Event will be fired when user touch and move finger over Swiper. Receives `pointermove` event as an arguments.
     *  @ignore 
     */
    swipertouchmove = output<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();

    /** Event will be fired when user touch and move finger over Swiper in direction opposite to direction parameter. Receives `pointermove` event as an arguments.
     *  @ignore 
     */
    swipertouchmoveopposite = output<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();

    /** Event will be fired when user touch and move finger over Swiper and move it. Receives `pointermove` event as an arguments.
     *  @ignore 
     */
    swiperslidermove = output<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();

    /** Event will be fired when user release Swiper. Receives `pointerup` event as an arguments.
     *  @ignore 
     */
    swipertouchend = output<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();

    /** Event will be fired when user click/tap on Swiper. Receives `pointerup` event as an arguments.
     *  @ignore 
     */
    swiperclick = output<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();

    /** Event will be fired when user click/tap on Swiper. Receives `pointerup` event as an arguments.
     *  @ignore 
     */
    swipertap = output<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();

    /** Event will be fired when user double tap on Swiper's container. Receives `pointerup` event as an arguments
     *  @ignore 
     */
    swiperdoubletap = output<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();

    /** Event will be fired when Swiper progress is changed, as an arguments it receives progress that is always from 0 to 1
     *  @ignore 
     */
    swiperprogress = output<Pick<SwiperInterfaceOptions, 'swiper' | 'progress'>>();

    /** Event will be fired when Swiper reach its beginning (initial position)
     *  @ignore 
     */
    swiperreachbeginning = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when Swiper reach last slide
     *  @ignore 
     */
    swiperreachend = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when Swiper goes to beginning or end position
     *  @ignore 
     */
    swipertoedge = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when Swiper goes from beginning or end position
     *  @ignore 
     */
    swiperfromedge = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when swiper's wrapper change its position. Receives current translate value as an arguments
     *  @ignore 
     */
    swipersettranslate = output<Pick<SwiperInterfaceOptions, 'swiper' | 'translate'>>();

    /** Event will be fired everytime when swiper starts animation. Receives current transition duration (in ms) as an arguments
     *  @ignore 
     */
    swipersettransition = output<Pick<SwiperInterfaceOptions, 'swiper' | 'transition'>>();

    /** Event will be fired on window resize right before swiper's onresize manipulation
     *  @ignore 
     */
    swiperresize = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /**Event will be fired if observer is enabled and it detects DOM mutations
     *  @ignore 
     */
    swiperobserverupdate = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired right before "loop fix"
     *  @ignore 
     */
    swiperbeforeloopfix = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired after "loop fix"
     *  @ignore 
     */
    swiperloopfix = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired on breakpoint change
     *  @ignore 
     */
    swiperbreakpoint = output<Pick<SwiperInterfaceOptions, 'swiper' | 'breakpointParams'>>();

    /** Event will fired on active index change
     *  @ignore 
     */
    swiperactiveindexchange = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will fired on snap index change
     *  @ignore 
     */
    swipersnapindexchange = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will fired on real index change
     *  @ignore 
     */
    swiperrealindexchange = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will fired right after initialization
     *  @ignore 
     */
    swiperafterinit = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will fired right before initialization
     *  @ignore 
     */
    swiperbeforeinit = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will fired before resize handler
     *  @ignore 
     */
    swiperbeforeresize = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will fired before slide change transition start
     *  @ignore 
     */
    swiperbeforeslidechangestart = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will fired before transition start
     *  @ignore 
     */
    swiperbeforetransitionstart = output<Pick<SwiperInterfaceOptions, 'swiper' | 'speed' | 'internal'>>(); // what is internal?

    /** Event will fired on direction change
     *  @ignore 
     */
    swiperchangedirection = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when user double click/tap on Swiper
     *  @ignore 
     */
    swiperdoubleclick = output<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();

    /** Event will be fired on swiper destroy
     *  @ignore 
     */
    swiperdestroy = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired on momentum bounce
     *  @ignore 
     */
    swipermomentumbounce = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired on orientation change (e.g. landscape -> portrait)
     *  @ignore 
     */
    swiperorientationchange = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired in the beginning of animation of resetting slide to current one
     *  @ignore 
     */
    swiperslideresettransitionstart = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired in the end of animation of resetting slide to current one
     *  @ignore 
     */
    swiperslideresettransitionend = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired with first touch/drag move
     *  @ignore 
     */
    swipersliderfirstmove = output<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();

    /** Event will be fired when number of slides has changed
     *  @ignore 
     */
    swiperslideslengthchange = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when slides grid has changed
     *  @ignore 
     */
    swiperslidesgridlengthchange = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when snap grid has changed
     *  @ignore 
     */
    swipersnapgridlengthchange = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired after swiper.update() call
     *  @ignore 
     */
    swiperupdate = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when swiper is locked (when `watchOverflow` enabled)
     *  @ignore 
     */
    swiperlock = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when swiper is unlocked (when `watchOverflow` enabled)
     *  @ignore 
     */
    swiperunlock = output<Pick<SwiperInterfaceOptions, 'swiper'>>();
    // CORE_EVENTS_END
}