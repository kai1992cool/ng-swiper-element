import { Directive, EventEmitter, Output } from "@angular/core";
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
    'autoplay',
    'autoplayPause',
    'autoplayResume',
    'autoplayStart',
    'autoplayStop',
    'autoplayTimeLeft',
    'scroll',
    'zoomChange',
    'keyPress',
    'hashChange',
    'hashSet',
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
    @Output() initEmitter = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired right before Swiper destroyed
     *  @ignore 
     */
    @Output() beforeDestroy = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired after slides and their sizes are calculated and updated
     *  @ignore 
     */
    @Output() slidesUpdated = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when currently active slide is changed
     *  @ignore 
     */
    @Output() slideChange = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired in the beginning of animation to other slide (next or previous).
     *  @ignore 
     */
    @Output() slideChangeTransitionStart = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired after animation to other slide (next or previous).
     *  @ignore 
     */
    @Output() slideChangeTransitionEnd = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Same as "slideChangeTransitionStart" but for "forward" direction only
     *  @ignore 
     */
    @Output() slideNextTransitionStart = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Same as "slideChangeTransitionEnd" but for "forward" direction only
     *  @ignore 
     */
    @Output() slideNextTransitionEnd = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Same as "slideChangeTransitionStart" but for "backward" direction only
     *  @ignore 
     */
    @Output() slidePrevTransitionStart = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Same as "slideChangeTransitionEnd" but for "backward" direction only
     *  @ignore 
     */
    @Output() slidePrevTransitionEnd = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired in the beginning of transition.
     *  @ignore 
     */
    @Output() transitionStart = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired after transition.
     *  @ignore 
     */
    @Output() transitionEnd = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when user touch Swiper. Receives `pointerdown` event as an arguments.
     *  @ignore 
     */
    @Output() touchStart = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();

    /** Event will be fired when user touch and move finger over Swiper. Receives `pointermove` event as an arguments.
     *  @ignore 
     */
    @Output() touchMove = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();

    /** Event will be fired when user touch and move finger over Swiper in direction opposite to direction parameter. Receives `pointermove` event as an arguments.
     *  @ignore 
     */
    @Output() touchMoveOpposite = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();

    /** Event will be fired when user touch and move finger over Swiper and move it. Receives `pointermove` event as an arguments.
     *  @ignore 
     */
    @Output() sliderMove = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();

    /** Event will be fired when user release Swiper. Receives `pointerup` event as an arguments.
     *  @ignore 
     */
    @Output() touchEnd = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();

    /** Event will be fired when user click/tap on Swiper. Receives `pointerup` event as an arguments.
     *  @ignore 
     */
    @Output() click = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();

    /** Event will be fired when user click/tap on Swiper. Receives `pointerup` event as an arguments.
     *  @ignore 
     */
    @Output() tap = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();

    /** Event will be fired when user double tap on Swiper's container. Receives `pointerup` event as an arguments
     *  @ignore 
     */
    @Output() doubleTap = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();

    /** Event will be fired when Swiper progress is changed, as an arguments it receives progress that is always from 0 to 1
     *  @ignore 
     */
    @Output() progress = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper' | 'progress'>>();

    /** Event will be fired when Swiper reach its beginning (initial position)
     *  @ignore 
     */
    @Output() reachBeginning = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when Swiper reach last slide
     *  @ignore 
     */
    @Output() reachEnd = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when Swiper goes to beginning or end position
     *  @ignore 
     */
    @Output() toEdge = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when Swiper goes from beginning or end position
     *  @ignore 
     */
    @Output() fromEdge = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when swiper's wrapper change its position. Receives current translate value as an arguments
     *  @ignore 
     */
    @Output() setTranslate = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper' | 'translate'>>();

    /** Event will be fired everytime when swiper starts animation. Receives current transition duration (in ms) as an arguments
     *  @ignore 
     */
    @Output() setTransition = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper' | 'transition'>>();

    /** Event will be fired on window resize right before swiper's onresize manipulation
     *  @ignore 
     */
    @Output() resize = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /**Event will be fired if observer is enabled and it detects DOM mutations
     *  @ignore 
     */
    @Output() observerUpdate = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired right before "loop fix"
     *  @ignore 
     */
    @Output() beforeLoopFix = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired after "loop fix"
     *  @ignore 
     */
    @Output() loopFix = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired on breakpoint change
     *  @ignore 
     */
    @Output() breakpoint = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper' | 'breakpointParams'>>();

    /** Event will fired on active index change
     *  @ignore 
     */
    @Output() activeIndexChange = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will fired on snap index change
     *  @ignore 
     */
    @Output() snapIndexChange = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will fired on real index change
     *  @ignore 
     */
    @Output() realIndexChange = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will fired right after initialization
     *  @ignore 
     */
    @Output() afterInit = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will fired right before initialization
     *  @ignore 
     */
    @Output() beforeInit = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will fired before resize handler
     *  @ignore 
     */
    @Output() beforeResize = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will fired before slide change transition start
     *  @ignore 
     */
    @Output() beforeSlideChangeStart = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will fired before transition start
     *  @ignore 
     */
    @Output() beforeTransitionStart = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper' | 'speed' | 'internal'>>(); // what is internal?

    /** Event will fired on direction change
     *  @ignore 
     */
    @Output() changeDirection = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when user double click/tap on Swiper
     *  @ignore 
     */
    @Output() doubleClick = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();

    /** Event will be fired on swiper destroy
     *  @ignore 
     */
    @Output() destroy = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired on momentum bounce
     *  @ignore 
     */
    @Output() momentumBounce = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired on orientation change (e.g. landscape -> portrait)
     *  @ignore 
     */
    @Output() orientationChange = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired in the beginning of animation of resetting slide to current one
     *  @ignore 
     */
    @Output() slideResetTransitionStart = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired in the end of animation of resetting slide to current one
     *  @ignore 
     */
    @Output() slideResetTransitionEnd = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired with first touch/drag move
     *  @ignore 
     */
    @Output() sliderFirstMove = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();

    /** Event will be fired when number of slides has changed
     *  @ignore 
     */
    @Output() slidesLengthChange = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when slides grid has changed
     *  @ignore 
     */
    @Output() slidesGridLengthChange = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when snap grid has changed
     *  @ignore 
     */
    @Output() snapGridLengthChange = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired after swiper.update() call
     *  @ignore 
     */
    @Output() update = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when swiper is locked (when `watchOverflow` enabled)
     *  @ignore 
     */
    @Output() lock = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when swiper is unlocked (when `watchOverflow` enabled)
     *  @ignore 
     */
    @Output() unlock = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();
    // CORE_EVENTS_END

    // Navigation events
    /** Event will be fired when navigation hides
     *  @ignore 
     */
    @Output() navigationHide = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();
    /** Event will be fired when navigation shows
     *  @ignore 
     */
    @Output() navigationShow = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();
    /** Event will be fired when navigation next button is clicked
     *  @ignore 
     */
    @Output() navigationNext = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();
    /** Event will be fired when navigation prev button is clicked
     *  @ignore 
     */
    @Output() navigationPrev = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();
    // Navigation events

    // Pagination events
    /** Event will be fired when pagination hides
     *  @ignore 
     */
    @Output() paginationHide = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();
    /** Event will be fired when pagination shows
     *  @ignore 
     */
    @Output() paginationShow = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();
    /** Event will be fired when pagination is rendered
     *  @ignore 
     */
    @Output() paginationRender = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();
    /** Event will be fired when pagination is updated
     *  @ignore 
     */
    @Output() paginationUpdate = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();
    // Pagination events

    // Scrollbar events
    /** Event will be fired when scrollbar drag ends
     *  @ignore 
     */
    @Output() scrollbarDragEnd = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();
    /** Event will be fired when scrollbar drag moves
     *  @ignore 
     */
    @Output() scrollbarDragMove = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();
    /** Event will be fired when scrollbar drag starts
     *  @ignore 
     */
    @Output() scrollbarDragStart = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();
    // Scrollbar events

    // Autoplay events
    /** Event will be fired when slide changed with autoplay
     *  @ignore 
     */
    @Output() autoplayEvent = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();
    /** Event will be fired when autoplay is paused
     *  @ignore 
     */
    @Output() autoplayPause = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();
    /** Event will be fired when autoplay is resumed
     *  @ignore 
     */
    @Output() autoplayResume = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();
    /** Event will be fired when autoplay is started
     *  @ignore 
     */
    @Output() autoplayStart = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();
    /** Event will be fired when autoplay is stopped
     *  @ignore 
     */
    @Output() autoplayStop = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();
    /** Event will be fired when time is left for autoplay
     *  @ignore 
     */
    @Output() autoplayTimeLeft = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();
    // Autoplay events

    // Mousewheel events

    /** Event will be fired when mousewheel is scrolled
     *  @ignore 
     */
    @Output() scroll = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper' | 'event'>>();
    
    // Mousewheel events

    // Zoom events

    /** Event will be fired on zoom change
     *  @ignore 
     */
    // zoomChange	(swiper, scale, imageEl, slideEl)	
    @Output() zoomChange = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper' | 'translate' | 'slideEl'>>();
    
    // Zoom events

    // Keyboard events

    /** Event will be fired on key press
     *  @ignore 
     */
    // keyPress (swiper, keyCode)
    @Output() keyPress = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();
    
    // Keyboard events

    // Hash Navigation events

    /** Event will be fired on window hash change
     *  @ignore 
     */
    // hashChange (swiper)
    @Output() hashChange = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();

    /** Event will be fired when swiper updates the hash
     *  @ignore 
     */
    // hashSet (swiper)
    @Output() hashSet = new EventEmitter<Pick<SwiperInterfaceOptions, 'swiper'>>();
    
    // Hash Navigation events
}