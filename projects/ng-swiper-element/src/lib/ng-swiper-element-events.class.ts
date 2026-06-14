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
    'init',
    'beforeDestroy',
    'slidesUpdated',
    'slideChange',
    'slideChangeTransitionStart',
    'slideChangeTransitionEnd',
    'slideNextTransitionStart',
    'slideNextTransitionEnd',
    'slidePrevTransitionStart',
    'slidePrevTransitionEnd',
    'transitionStart',
    'transitionEnd',
    'touchStart',
    'touchMove',
    'touchMoveOpposite',
    'sliderMove',
    'touchEnd',
    'click',
    'tap',
    'doubleTap',
    'progress',
    'reachBeginning',
    'reachEnd',
    'toEdge',
    'fromEdge',
    'setTranslate',
    'setTransition',
    'resize',
    'observerUpdate',
    'beforeLoopFix',
    'loopFix',
    'breakpoint',
    'activeIndexChange',
    'snapIndexChange',
    'realIndexChange',
    'afterInit',
    'beforeInit',
    'beforeResize',
    'beforeSlideChangeStart',
    'beforeTransitionStart',
    'changeDirection',
    'doubleClick',
    'destroy',
    'momentumBounce',
    'orientationChange',
    'slideResetTransitionStart',
    'slideResetTransitionEnd',
    'sliderFirstMove',
    'slidesLengthChange',
    'slidesGridLengthChange',
    'snapGridLengthChange',
    'update',
    'lock',
    'unlock',
    'navigationHide',
    'navigationShow',
    'navigationNext',
    'navigationPrev',
    'paginationHide',
    'paginationShow',
    'paginationRender',
    'paginationUpdate',
    'scrollbarDragEnd',
    'scrollbarDragMove',
    'scrollbarDragStart',
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
    initEmitter = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired right before Swiper destroyed
     *  @ignore 
     */
    beforeDestroy = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired after slides and their sizes are calculated and updated
     *  @ignore 
     */
    slidesUpdated = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when currently active slide is changed
     *  @ignore 
     */
    slideChange = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired in the beginning of animation to other slide (next or previous).
     *  @ignore 
     */
    slideChangeTransitionStart = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired after animation to other slide (next or previous).
     *  @ignore 
     */
    slideChangeTransitionEnd = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Same as "slideChangeTransitionStart" but for "forward" direction only
     *  @ignore 
     */
    slideNextTransitionStart = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Same as "slideChangeTransitionEnd" but for "forward" direction only
     *  @ignore 
     */
    slideNextTransitionEnd = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Same as "slideChangeTransitionStart" but for "backward" direction only
     *  @ignore 
     */
    slidePrevTransitionStart = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Same as "slideChangeTransitionEnd" but for "backward" direction only
     *  @ignore 
     */
    slidePrevTransitionEnd = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired in the beginning of transition.
     *  @ignore 
     */
    transitionStart = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired after transition.
     *  @ignore 
     */
    transitionEnd = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when user touch Swiper. Receives `pointerdown` event as an arguments.
     *  @ignore 
     */
    touchStart = output<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();

    /** Event will be fired when user touch and move finger over Swiper. Receives `pointermove` event as an arguments.
     *  @ignore 
     */
    touchMove = output<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();

    /** Event will be fired when user touch and move finger over Swiper in direction opposite to direction parameter. Receives `pointermove` event as an arguments.
     *  @ignore 
     */
    touchMoveOpposite = output<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();

    /** Event will be fired when user touch and move finger over Swiper and move it. Receives `pointermove` event as an arguments.
     *  @ignore 
     */
    sliderMove = output<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();

    /** Event will be fired when user release Swiper. Receives `pointerup` event as an arguments.
     *  @ignore 
     */
    touchEnd = output<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();

    /** Event will be fired when user click/tap on Swiper. Receives `pointerup` event as an arguments.
     *  @ignore 
     */
    click = output<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();

    /** Event will be fired when user click/tap on Swiper. Receives `pointerup` event as an arguments.
     *  @ignore 
     */
    tap = output<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();

    /** Event will be fired when user double tap on Swiper's container. Receives `pointerup` event as an arguments
     *  @ignore 
     */
    doubleTap = output<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();

    /** Event will be fired when Swiper progress is changed, as an arguments it receives progress that is always from 0 to 1
     *  @ignore 
     */
    progress = output<Pick<SwiperInterfaceOptions, 'swiper' | 'progress'>>();

    /** Event will be fired when Swiper reach its beginning (initial position)
     *  @ignore 
     */
    reachBeginning = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when Swiper reach last slide
     *  @ignore 
     */
    reachEnd = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when Swiper goes to beginning or end position
     *  @ignore 
     */
    toEdge = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when Swiper goes from beginning or end position
     *  @ignore 
     */
    fromEdge = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when swiper's wrapper change its position. Receives current translate value as an arguments
     *  @ignore 
     */
    setTranslate = output<Pick<SwiperInterfaceOptions, 'swiper' | 'translate'>>();

    /** Event will be fired everytime when swiper starts animation. Receives current transition duration (in ms) as an arguments
     *  @ignore 
     */
    setTransition = output<Pick<SwiperInterfaceOptions, 'swiper' | 'transition'>>();

    /** Event will be fired on window resize right before swiper's onresize manipulation
     *  @ignore 
     */
    resize = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /**Event will be fired if observer is enabled and it detects DOM mutations
     *  @ignore 
     */
    observerUpdate = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired right before "loop fix"
     *  @ignore 
     */
    beforeLoopFix = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired after "loop fix"
     *  @ignore 
     */
    loopFix = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired on breakpoint change
     *  @ignore 
     */
    breakpoint = output<Pick<SwiperInterfaceOptions, 'swiper' | 'breakpointParams'>>();

    /** Event will fired on active index change
     *  @ignore 
     */
    activeIndexChange = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will fired on snap index change
     *  @ignore 
     */
    snapIndexChange = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will fired on real index change
     *  @ignore 
     */
    realIndexChange = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will fired right after initialization
     *  @ignore 
     */
    afterInit = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will fired right before initialization
     *  @ignore 
     */
    beforeInit = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will fired before resize handler
     *  @ignore 
     */
    beforeResize = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will fired before slide change transition start
     *  @ignore 
     */
    beforeSlideChangeStart = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will fired before transition start
     *  @ignore 
     */
    beforeTransitionStart = output<Pick<SwiperInterfaceOptions, 'swiper' | 'speed' | 'internal'>>(); // what is internal?

    /** Event will fired on direction change
     *  @ignore 
     */
    changeDirection = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when user double click/tap on Swiper
     *  @ignore 
     */
    doubleClick = output<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();

    /** Event will be fired on swiper destroy
     *  @ignore 
     */
    destroy = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired on momentum bounce
     *  @ignore 
     */
    momentumBounce = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired on orientation change (e.g. landscape -> portrait)
     *  @ignore 
     */
    orientationChange = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired in the beginning of animation of resetting slide to current one
     *  @ignore 
     */
    slideResetTransitionStart = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired in the end of animation of resetting slide to current one
     *  @ignore 
     */
    slideResetTransitionEnd = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired with first touch/drag move
     *  @ignore 
     */
    sliderFirstMove = output<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();

    /** Event will be fired when number of slides has changed
     *  @ignore 
     */
    slidesLengthChange = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when slides grid has changed
     *  @ignore 
     */
    slidesGridLengthChange = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when snap grid has changed
     *  @ignore 
     */
    snapGridLengthChange = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired after swiper.update() call
     *  @ignore 
     */
    update = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when swiper is locked (when `watchOverflow` enabled)
     *  @ignore 
     */
    lock = output<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when swiper is unlocked (when `watchOverflow` enabled)
     *  @ignore 
     */
    unlock = output<Pick<SwiperInterfaceOptions, 'swiper'>>();
    // CORE_EVENTS_END

    // Navigation events
    /** Event will be fired when navigation hides
     *  @ignore 
     */
    navigationHide = output<Pick<SwiperInterfaceOptions, 'swiper'>>();
    /** Event will be fired when navigation shows
     *  @ignore 
     */
    navigationShow = output<Pick<SwiperInterfaceOptions, 'swiper'>>();
    /** Event will be fired when navigation next button is clicked
     *  @ignore 
     */
    navigationNext = output<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();
    /** Event will be fired when navigation prev button is clicked
     *  @ignore 
     */
    navigationPrev = output<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();
    // Navigation events

    // Pagination events
    /** Event will be fired when pagination hides
     *  @ignore 
     */
    paginationHide = output<Pick<SwiperInterfaceOptions, 'swiper'>>();
    /** Event will be fired when pagination shows
     *  @ignore 
     */
    paginationShow = output<Pick<SwiperInterfaceOptions, 'swiper'>>();
    /** Event will be fired when pagination is rendered
     *  @ignore 
     */
    paginationRender = output<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();
    /** Event will be fired when pagination is updated
     *  @ignore 
     */
    paginationUpdate = output<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();
    // Pagination events

    // Scrollbar events
    /** Event will be fired when scrollbar drag ends
     *  @ignore 
     */
    scrollbarDragEnd = output<Pick<SwiperInterfaceOptions, 'swiper'>>();
    /** Event will be fired when scrollbar drag moves
     *  @ignore 
     */
    scrollbarDragMove = output<Pick<SwiperInterfaceOptions, 'swiper'>>();
    /** Event will be fired when scrollbar drag starts
     *  @ignore 
     */
    scrollbarDragStart = output<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();
    // Scrollbar events
}