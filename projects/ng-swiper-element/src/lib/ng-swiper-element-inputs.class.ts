import { Directive, InputSignal, computed, input } from "@angular/core";
import { SwiperOptions, SwiperModule, CSSSelector, A11yOptions, AutoplayOptions, ControllerOptions, CoverflowEffectOptions, CubeEffectOptions, FadeEffectOptions, FlipEffectOptions, CreativeEffectOptions, CardsEffectOptions, HashNavigationOptions, HistoryOptions, KeyboardOptions, MousewheelOptions, NavigationOptions, PaginationOptions, ParallaxOptions, ScrollbarOptions, ThumbsOptions, VirtualOptions, ZoomOptions, FreeModeOptions, GridOptions } from "swiper/types";
import { EffectType, OnInterface, BreakPointsType } from "./ng-swiper-element.component";

@Directive()
export class SwiperContainerInputs {

    /**
     * Swiper configuration options.
     * 
     * @type {SwiperOptions | undefined}
     * @default undefined
     */
    swiperOptions: InputSignal<SwiperOptions | undefined> = input<SwiperOptions | undefined>(undefined);
    /**
     * Array with Swiper modules
     *
     * @type {SwiperModule[] | undefined}
     * @default undefined
     * @example
     * ```js
     * import Swiper from 'swiper';
     * import { Navigation, Pagination } from 'swiper/modules';
     *
     * const swiper = new Swiper('.swiper', {
     *    modules: [ Navigation, Pagination ],
     *  });
     * ```
     */
    modules: InputSignal<SwiperModule[] | undefined> = input<SwiperModule[] | undefined>(undefined);
    /**
     * Inject text styles to the shadow DOM. Only for usage with Swiper Element
     *
     * @type {string[] | undefined}
     * @default undefined
     */
    injectStyles: InputSignal<string[] | undefined> = input<string[] | undefined>(undefined);
    /**
     * Inject styles `<link>`s to the shadow DOM. Only for usage with Swiper Element
     * @type {string[] | undefined}
     * @default undefined
     */
    injectStylesUrls: InputSignal<string[] | undefined> = input<string[] | undefined>(undefined);
    /**
     * Whether Swiper should be initialised automatically when you create an instance.
     * If disabled, then you need to init it manually by calling `swiper.init()`
     *
     * @type {boolean | undefined}
     * @default true
     */
    init: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Whether Swiper initially enabled. When Swiper is disabled, it will hide all navigation elements and won't respond to any events and interactions
     *
     * @type {boolean | undefined}
     * @default undefined
     */
    enabled: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Swiper will recalculate slides position on window resize (orientationchange)
     *
     * @type {boolean | undefined}
     * @default undefined
     */
    updateOnWindowResize: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * When enabled it will use ResizeObserver (if supported by browser) on swiper container to detect container resize (instead of watching for window resize)
     *
     * @type {boolean | undefined}
     * @default true
     */
    resizeObserver: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Index number of initial slide.
     * @type {number | undefined}
     * @default 0
     */
    initialSlide: InputSignal<number | undefined> = input<number | undefined>(undefined);

    /**
     * Can be `'horizontal'` or `'vertical'` (for vertical slider).
     * @type {'horizontal' | 'vertical' | undefined}
     * @default 'horizontal'
     */
    direction: InputSignal<'horizontal' | 'vertical' | undefined> = input<'horizontal' | 'vertical' | undefined>(undefined);

    /**
     * When enabled, will swipe slides only forward (one-way) regardless of swipe direction
     * @type {boolean | undefined}
     * @default false
     */

    oneWayMovement: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * The name of the swiper element node name; used for detecting web component rendering
     * @type {string | undefined}
     * @default 'SWIPER-CONTAINER'
     */
    swiperElementNodeName: InputSignal<string | undefined> = input<string | undefined>(undefined);

    /**
     * Duration of transition between slides (in ms)
     * @type {number | undefined}
     * @default 300
     */
    speed: InputSignal<number | undefined> = input<number | undefined>(undefined);

    /**
     * Enabled this option and plugin will set width/height on swiper wrapper equal to total size of all slides.
     * Mostly should be used as compatibility fallback option for browser that don't support flexbox layout well
     * @type {boolean | undefined}
     * @default false
     */
    setWrapperSize: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Enabled this option and swiper will be operated as usual except it will not move, real translate values on wrapper will not be set.
     * Useful when you may need to create custom slide transition
     * @type {boolean | undefined}
     * @default false
     */
    virtualTranslate: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Swiper width (in px). Parameter allows to force Swiper width.
     * Useful only if you initialize Swiper when it is hidden and in SSR and Test environments for correct Swiper initialization
     *
     * @type {number | null | undefined}
     * @default null
     *
     * @note Setting this parameter will make Swiper not responsive
     */
    width: InputSignal<number | null | undefined> = input<number | null | undefined>(undefined);

    /**
     * Swiper height (in px). Parameter allows to force Swiper height.
     * Useful only if you initialize Swiper when it is hidden and in SSR and Test environments for correct Swiper initialization
     *
     * @type {number | null | undefined}
     * @default null
     *
     * @note Setting this parameter will make Swiper not responsive
     */
    height: InputSignal<number | null | undefined> = input<number | null | undefined>(undefined);

    /**
     * Set to `true` and slider wrapper will adapt its height to the height of the currently active slide
     *
     * @type {boolean | undefined}
     * @default false
     */
    autoHeight: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Set to `true` to round values of slides width and height to prevent blurry texts on usual
     * resolution screens (if you have such)
     * @type {boolean | undefined}
     * @default false
     */
    roundLengths: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Set to `true` on  Swiper for correct touch events interception. Use only on
     * swipers that use same direction as the parent one
     * @type {boolean | undefined}
     * @default false
     */
    nested: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * When enabled Swiper will automatically wrap slides with swiper-wrapper element,
     * and will create required elements for navigation, pagination and scrollbar
     * they are enabled (with their respective params object or with boolean `true`))
     * @type {boolean | undefined}
     * @default false
     */
    createElements: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Event name prefix for all DOM events emitted by Swiper Element (web component)
     * @type {string | undefined}
     * @default `swiper`
     */
    eventsPrefix: InputSignal<string | undefined> = input<string | undefined>(undefined);

    /**
     * CSS selector for focusable elements. Swiping will be disabled on such elements if they are "focused"
     * @type {string | undefined}
     * @default 'input, select, option, textarea, button, video, label'
     */
    focusableElements: InputSignal<string | undefined> = input<string | undefined>(undefined);

    /**
     * If enabled (by default) and navigation elements' parameters passed as a string (like `".pagination"`)
     * then Swiper will look for such elements through child elements first.
     * Applies for pagination, prev/next buttons and scrollbar elements
     * @type {boolean | undefined}
     * @default true
     */
    uniqueNavElements: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Transition effect. Can be `'slide'`, `'fade'`, `'cube'`, `'coverflow'`, `'flip'`, `'creative'` or `'cards'`
     * @type {EffectType | undefined}
     * @default 'slide'
     */
    effect: InputSignal<EffectType | undefined> = input<EffectType | undefined>(undefined);

    /**
     * Fire Transition/SlideChange/Start/End events on swiper initialization.
     * Such events will be fired on initialization in case of your initialSlide is not 0, or you use loop mode
     * @type {boolean | undefined}
     * @default true
     */
    runCallbacksOnInit: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * When enabled Swiper will be disabled and hide navigation buttons on
     * case there are not enough slides for sliding.
     * @type {boolean | undefined}
     * @default true
     */
    watchOverflow: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * userAgent string. Required for browser/device detection when rendered on server-side
     * @type {string | null | undefined}
     * @default null
     */
    userAgent: InputSignal<string | null | undefined> = input<string | null | undefined>(undefined);

    /**
     * Required for active slide detection when rendered on server-side and enabled history
     * @type {string | null | undefined}
     * @default null
     */
    url: InputSignal<string | null | undefined> = input<string | null | undefined>(undefined);

    /**
     * Register event handlers
     * @ignore
     * @type {OnInterface | undefined}
     */
    on: InputSignal<OnInterface | undefined> = input<OnInterface | undefined>(undefined);

    /**
     * Add event listener that will be fired on all events
     * @ignore
     * @type {any | undefined}
     * @example
     * ```js
     * const swiper = new Swiper('.swiper', {
     *    onAny(eventName, ...args) {
     *      console.log('Event: ', eventName);
     *      console.log('Event data: ', args);
     *    }
     *  });
     * ```
     */
    onAny: InputSignal<any> = input<any | undefined>(undefined);

    /**
     * When enabled it will use modern CSS Scroll Snap API.
     * It doesn't support all of Swiper's features, but potentially should bring a much better performance in simple configurations.
     *
     * This is what is not supported when it is enabled:
     *
     * - Cube effect
     * - `speed` parameter may not have no effect
     * - All transition start/end related events (use `slideChange` instead)
     * - `slidesPerGroup` has limited support
     * - `simulateTouch` doesn't have effect and "dragging" with mouse doesn't work
     * - `resistance` doesn't have any effect
     * - `allowSlidePrev/Next`
     * - `swipeHandler`
     *
     * In case if you use it with other effects, especially 3D effects, it is required to wrap slide's content with `<div class="swiper-slide-transform">` element. And if you use any custom styles on slides (like background colors, border radius, border, etc.), they should be set on `swiper-slide-transform` element instead.
     *
     * @type {boolean | undefined}
     * @example
     * ```html
     * <div class="swiper">
     *   <div class="swiper-wrapper">
     *     <div class="swiper-slide">
     *       <!-- wrap slide content with transform element -->
     *       <div class="swiper-slide-transform">
     *         ... slide content ...
     *       </div>
     *     </div>
     *     ...
     *   </div>
     * </div>
     * <script>
     * const swiper = new Swiper('.swiper', {
     *    effect: 'flip',
     *    cssMode: true,
     *  });
     * </script>
     * ```
     *
     * @default false
     */
    cssMode: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    // Slides grid

    /**
     * Distance between slides in px.
     *
     * @type {number | string | undefined}
     * @default 0
     * @note If you use "margin" css property to the elements which go into Swiper in which you pass "spaceBetween" into, navigation might not work properly.
     */
    spaceBetween: InputSignal<number | string | undefined> = input<number | string | undefined>(undefined);

    /**
     * Number of slides per view (slides visible at the same time on slider's container).
     * @note `slidesPerView: 'auto'` is currently not compatible with multirow mode, when `grid.rows` > 1
     *
     * @type {number | 'auto' | undefined}
     * @default 1
     */
    slidesPerView: InputSignal<number | 'auto' | undefined> = input<number | 'auto' | undefined>(undefined);

    /**
     * If total number of slides less than specified here value, then Swiper will enable `backface-visibility: hidden` on slide elements to reduce visual "flicker" in Safari.
     *
     * @type {number | undefined}
     * @default 10
     * @note It is not recommended to enable it on large amount of slides as it will reduce performance
     */
    maxBackfaceHiddenSlides: InputSignal<number | undefined> = input<number | undefined>(undefined);

    /**
     * Set numbers of slides to define and enable group sliding. Useful to use with slidesPerView > 1
     *
     * @type {number | undefined}
     * @default 1
     */
    slidesPerGroup: InputSignal<number | undefined> = input<number | undefined>(undefined);

    /**
     * The parameter works in the following way: If `slidesPerGroupSkip` equals `0` (default), no slides are excluded from grouping, and the resulting behaviour is the same as without this change.
     *
     * If `slidesPerGroupSkip` is equal or greater than `1` the first X slides are treated as single groups, whereas all following slides are grouped by the `slidesPerGroup` value.
     *
     * @type {number | undefined}
     * @default 0
     */
    slidesPerGroupSkip: InputSignal<number | undefined> = input<number | undefined>(undefined);

    /**
     * This param intended to be used only with `slidesPerView: 'auto'` and `slidesPerGroup: 1`. When enabled, it will skip all slides in view on `.slideNext()` & `.slidePrev()` methods calls, on Navigation "buttons" clicks and in autoplay.
     *
     * @type {boolean | undefined}
     * @default false
     */
    slidesPerGroupAuto: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * If `true`, then active slide will be centered, not always on the left side.
     *
     * @type {boolean | undefined}
     * @default false
     */
    centeredSlides: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * If `true`, then active slide will be centered without adding gaps at the beginning and end of slider.
     * Required `centeredSlides: true`. Not intended to be used with `loop` or `pagination`
     *
     * @type {boolean | undefined}
     * @default false
     */
    centeredSlidesBounds: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Add (in px) additional slide offset in the beginning of the container (before all slides)
     *
     * @type {number | undefined}
     * @default 0
     */
    slidesOffsetBefore: InputSignal<number | undefined> = input<number | undefined>(undefined);

    /**
     * Add (in px) additional slide offset in the end of the container (after all slides)
     *
     * @type {number | undefined}
     * @default 0
     */
    slidesOffsetAfter: InputSignal<number | undefined> = input<number | undefined>(undefined);

    /**
     * Normalize slide index.
     *
     * @type {boolean | undefined}
     * @default true
     */
    normalizeSlideIndex: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * When enabled it center slides if the amount of slides less than `slidesPerView`. Not intended to be used `loop` mode and `grid.rows`
     *
     * @type {boolean | undefined}
     * @default false
     */
    centerInsufficientSlides: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * This option may a little improve desktop usability. If `true`, user will see the "grab" cursor when hover on Swiper
     *
     * @type {boolean | undefined}
     * @default false
     */
    grabCursor: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Target element to listen touch events on. Can be `'container'` (to listen for touch events on swiper) or `'wrapper'`
     * (to listen for touch events on swiper-wrapper)
     *
     * @type {'container' | 'wrapper' | undefined}
     * @default 'wrapper'
     */
    touchEventsTarget: InputSignal<'container' | 'wrapper' | undefined> = input<'container' | 'wrapper' | undefined>(undefined);

    /**
     * Touch ratio
     *
     * @type {number | undefined}
     * @default 1
     */
    touchRatio: InputSignal<number | undefined> = input<number | undefined>(undefined);

    /**
     * Allowable angle (in degrees) to trigger touch move
     *
     * @type {number | undefined}
     * @default 45
     */
    touchAngle: InputSignal<number | undefined> = input<number | undefined>(undefined);

    /**
     * If `true`, Swiper will accept mouse events like touch events (click and drag to change slides)
     *
     * @type {boolean | undefined}
     * @default true
     */
    simulateTouch: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Set to `false` if you want to disable short swipes
     *
     * @type {boolean | undefined}
     * @default true
     */
    shortSwipes: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Set to `false` if you want to disable long swipes
     *
     * @type {boolean | undefined}
     * @default true
     */
    longSwipes: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Ratio to trigger swipe to next/previous slide during long swipes
     *
     * @type {number | undefined}
     * @default 0.5
     */
    longSwipesRatio: InputSignal<number | undefined> = input<number | undefined>(undefined);

    /**
     * Minimal duration (in ms) to trigger swipe to next/previous slide during long swipes
     *
     * @type {number | undefined}
     * @default 300
     */
    longSwipesMs: InputSignal<number | undefined> = input<number | undefined>(undefined);

    /**
     * If disabled, then slider will be animated only when you release it, it will not move while you hold your finger on it
     *
     * @type {boolean | undefined}
     * @default true
     */
    followFinger: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * If `false`, then the only way to switch the slide is use of external API functions like slidePrev or slideNext
     *
     * @type {boolean | undefined}
     * @default true
     */
    allowTouchMove: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Threshold value in px. If "touch distance" will be lower than this value then swiper will not move
     *
     * @type {number | undefined}
     * @default 5
     */
    threshold: InputSignal<number | undefined> = input<number | undefined>(undefined);

    /**
     * If disabled, `pointerdown` event won't be prevented
     *
     * @type {boolean | undefined}
     * @default true
     */
    touchStartPreventDefault: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Force to always prevent default for `touchstart` (`pointerdown`) event
     *
     * @type {boolean | undefined}
     * @default false
     */
    touchStartForcePreventDefault: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * If enabled, then propagation of "touchmove" will be stopped
     *
     * @type {boolean | undefined}
     * @default false
     */
    touchMoveStopPropagation: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Enable to release Swiper events for swipe-back work in app. If set to `'prevent'` then it will prevent system swipe-back navigation instead. This feature works only with "touch" events (and not pointer events), so it will work on iOS/Android devices and won't work on Windows devices with pointer (touch) events.
     *
     * @type {boolean | string | undefined}
     * @default false
     */
    edgeSwipeDetection: InputSignal<boolean | string | undefined> = input<boolean | string | undefined>(undefined);

    /**
     * Area (in px) from left edge of the screen to release touch events for swipe-back in app
     *
     * @type {number | undefined}
     * @default 20
     */
    edgeSwipeThreshold: InputSignal<number | undefined> = input<number | undefined>(undefined);

    /**
     * Enable to release touch events on slider edge position (beginning, end) to allow for further page scrolling. This feature works only with "touch" events (and not pointer events), so it will work on iOS/Android devices and won't work on Windows devices with pointer events. Also `threshold` parameter must be set to `0`
     *
     * @type {boolean | undefined}
     * @default false
     */
    touchReleaseOnEdges: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Passive event listeners will be used by default where possible to improve scrolling performance on mobile devices.
     * But if you need to use `e.preventDefault` and you have conflict with it, then you should disable this parameter
     *
     * @type {boolean | undefined}
     * @default true
     */
    passiveListeners: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    // Touch Resistance

    /**
     * Set to `false` if you want to disable resistant bounds
     *
     * @type {boolean | undefined}
     * @default true
     */
    resistance: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * This option allows you to control resistance ratio
     *
     * @type {number | undefined}
     * @default 0.85
     */
    resistanceRatio: InputSignal<number | undefined> = input<number | undefined>(undefined);

    // Swiping / No swiping

    /**
     * When enabled it won't allow to change slides by swiping or navigation/pagination buttons during transition
     *
     * @type {boolean | undefined}
     * @default false
     */
    preventInteractionOnTransition: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Set to `false` to disable swiping to previous slide direction (to left or top)
     *
     * @type {boolean | undefined}
     * @default true
     */
    allowSlidePrev: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Set to `false` to disable swiping to next slide direction (to right or bottom)
     *
     * @type {boolean | undefined}
     * @default true
     */
    allowSlideNext: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Enable/disable swiping on elements matched to class specified in `noSwipingClass`
     *
     * @type {boolean | undefined}
     * @default true
     */
    noSwiping: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Specify `noSwiping`'s element css class
     *
     * @type {string | undefined}
     * @default 'swiper-no-swiping'
     */
    noSwipingClass: InputSignal<string | undefined> = input<string | undefined>(undefined);

    /**
     * Can be used instead of `noSwipingClass` to specify elements to disable swiping on.
     * For example `'input'` will disable swiping on all inputs
     * @type {string | undefined}
     * @default
     */
    noSwipingSelector: InputSignal<string | undefined> = input<string | undefined>(undefined);

    /**
     * String with CSS selector or HTML element of the container with pagination that will work as only available handler for swiping
     *
     * @type {CSSSelector | HTMLElement | null | undefined}
     * @default null
     */
    swipeHandler: InputSignal<CSSSelector | HTMLElement | null | undefined> = input<CSSSelector | HTMLElement | null | undefined>(undefined);

    // Clicks

    /**
     * Set to `true` to prevent accidental unwanted clicks on links during swiping
     *
     * @type {boolean | undefined}
     * @default true
     */
    preventClicks: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Set to `true` to stop clicks event propagation on links during swiping
     *
     * @type {boolean | undefined}
     * @default true
     */
    preventClicksPropagation: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Set to `true` and click on any slide will produce transition to this slide
     *
     * @type {boolean | undefined}
     * @default false
     */
    slideToClickedSlide: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    // Progress

    /**
     * Enable this feature to calculate each slides progress and visibility (slides in viewport will have additional visible class)
     *
     * @type {boolean | undefined}
     * @default false
     */
    watchSlidesProgress: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Set to `true` to enable continuous loop mode
     *
     * Because of nature of how the loop mode works (it will rearrange slides), total number of slides must be:
     *
     * - more than or equal to `slidesPerView` + `slidesPerGroup`
     * - even to `slidesPerGroup` (or use `loopAddBlankSlides` parameter)
     * - even to `grid.rows` (or use `loopAddBlankSlides` parameter)
     *
     * @type {boolean | undefined}
     * @default false
     *
     */
    loop: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Automatically adds blank slides if you use Grid or `slidesPerGroup` and the total amount of slides is not even to `slidesPerGroup` or to `grid.rows`
     * @type {boolean | undefined}
     * @default true
     *
     */
    loopAddBlankSlides: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Allows to increase amount of looped slides
     *
     * @type {number | undefined}
     * @default 0
     */
    loopAdditionalSlides: InputSignal<number | undefined> = input<number | undefined>(undefined);

    /**
     * If enabled then slideNext/Prev will do nothing while slider is animating in loop mode
     *
     * @type {boolean | undefined}
     * @default true
     */
    loopPreventsSliding: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Set to `true` to enable "rewind" mode. When enabled, clicking "next" navigation button (or calling `.slideNext()`) when on last slide will slide back to the first slide. Clicking "prev" navigation button (or calling `.slidePrev()`) when on first slide will slide forward to the last slide.
     *
     * @type {boolean | undefined}
     * @default false
     *
     * @note Should not be used together with `loop` mode
     */
    rewind: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Allows to set different parameter for different responsive breakpoints (screen sizes). Not all parameters can be changed in breakpoints, only those which do not require different layout and logic, like `slidesPerView`, `slidesPerGroup`, `spaceBetween`, `grid.rows`. Such parameters like `loop` and `effect` won't work
     *
     * @example
     * ```js
     * const swiper = new Swiper('.swiper', {
     *   // Default parameters
     *   slidesPerView: 1,
     *   spaceBetween: 10,
     *   // Responsive breakpoints
     *   breakpoints: {
     *     // when window width is >= 320px
     *     320: {
     *       slidesPerView: 2,
     *       spaceBetween: 20
     *     },
     *     // when window width is >= 480px
     *     480: {
     *       slidesPerView: 3,
     *       spaceBetween: 30
     *     },
     *     // when window width is >= 640px
     *     640: {
     *       slidesPerView: 4,
     *       spaceBetween: 40
     *     }
     *   }
     * })
     * ```
     *
     * @example
     * ```js
     * const swiper = new Swiper('.swiper', {
     *   slidesPerView: 1,
     *   spaceBetween: 10,
     *   // using "ratio" endpoints
     *   breakpoints: {
     *     '@0.75': {
     *       slidesPerView: 2,
     *       spaceBetween: 20,
     *     },
     *     '@1.00': {
     *       slidesPerView: 3,
     *       spaceBetween: 40,
     *     },
     *     '@1.50': {
     *       slidesPerView: 4,
     *       spaceBetween: 50,
     *     },
     *   }
     * });
     * ```
     */
    breakpoints: InputSignal<BreakPointsType | undefined> = input<BreakPointsType | undefined>(undefined);

    /**
     * Base for breakpoints (beta). Can be `window` or `container`. If set to `window` (by default) then breakpoint keys mean window width. If set to `container` then breakpoint keys treated as swiper container width
     *
     * @type {'window' | 'container' | CSSSelector | undefined}
     * @default 'window'
     */
    breakpointsBase: InputSignal<'window' | 'container' | CSSSelector | undefined> = input<'window' | 'container' | CSSSelector | undefined>(undefined);

    // Observer

    /**
     * Set to `true` to enable Mutation Observer on Swiper and its elements. In this case Swiper will be updated (reinitialized) each time if you change its style (like hide/show) or modify its child elements (like adding/removing slides)
     *
     * @type {boolean | undefined}
     * @default false
     */
    observer: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Set to `true` if you also need to watch Mutations for Swiper slide children elements
     *
     * @type {boolean | undefined}
     * @default false
     */
    observeSlideChildren: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    /**
     * Set to `true` if you also need to watch Mutations for Swiper parent elements
     *
     * @type {boolean | undefined}
     * @default false
     */
    observeParents: InputSignal<boolean | undefined> = input<boolean | undefined>(undefined);

    // Namespace

    /**
     * The beginning of the modifier CSS class that can be added to swiper container depending on different parameters
     *
     * @type {string | undefined}
     * @default 'swiper-'
     */
    containerModifierClass: InputSignal<string | undefined> = input<string | undefined>(undefined);

    /**
     * CSS class name of slide
     *
     * @type {string | undefined}
     * @default 'swiper-slide'
     *
     * @note By changing classes you will also need to change Swiper's CSS to reflect changed classes
     *
     * @note Not supported in Swiper React/Vue components
     */
    slideClass: InputSignal<string | undefined> = input<string | undefined>(undefined);

    /**
     * CSS class name of currently active slide
     *
     * @type {string | undefined}
     * @default 'swiper-slide-active'
     *
     * @note By changing classes you will also need to change Swiper's CSS to reflect changed classes
     *
     * @note Not supported in Swiper React/Vue components
     */
    slideActiveClass: InputSignal<string | undefined> = input<string | undefined>(undefined);

    /**
     * CSS class name of currently/partially visible slide
     *
     * @type {string | undefined}
     * @default 'swiper-slide-visible'
     *
     * @note By changing classes you will also need to change Swiper's CSS to reflect changed classes
     *
     * @note Not supported in Swiper React/Vue
     */
    slideVisibleClass: InputSignal<string | undefined> = input<string | undefined>(undefined);

    /**
     * CSS class name of fully (when whole slide is in the viewport) visible slide
     *
     * @type {string | undefined}
     * @default 'swiper-slide-fully-visible'
     *
     * @note Not supported in Swiper React/Vue
     */
    slideFullyVisibleClass: InputSignal<string | undefined> = input<string | undefined>(undefined);

    /**
     * CSS class name of the blank slide added by the loop mode (when `loopAddBlankSlides` is enabled)
     *
     * @type {string | undefined}
     * @default 'swiper-slide-blank'
     *
     * @note Not supported in Swiper React/Vue
     */
    slideBlankClass: InputSignal<string | undefined> = input<string | undefined>(undefined);

    /**
     * CSS class name of slide which is right after currently active slide
     *
     * @type {string | undefined}
     * @default 'swiper-slide-next'
     *
     * @note By changing classes you will also need to change Swiper's CSS to reflect changed classes
     *
     * @note Not supported in Swiper React/Vue
     */
    slideNextClass: InputSignal<string | undefined> = input<string | undefined>(undefined);

    /**
     * CSS class name of slide which is right before currently active slide
     *
     * @type {string | undefined}
     * @default 'swiper-slide-prev'
     *
     * @note By changing classes you will also need to change Swiper's CSS to reflect changed classes
     *
     * @note Not supported in Swiper React/Vue
     */
    slidePrevClass: InputSignal<string | undefined> = input<string | undefined>(undefined);

    /**
     * CSS class name of slides' wrapper
     *
     * @type {string | undefined}
     * @default 'swiper-wrapper'
     *
     * @note By changing classes you will also need to change Swiper's CSS to reflect changed classes
     *
     * @note Not supported in Swiper React/Vue
     *
     */
    wrapperClass: InputSignal<string | undefined> = input<string | undefined>(undefined);

    /**
     * CSS class name of lazy preloader
     *
     * @type {string | undefined}
     * @default 'swiper-lazy-preloader'
     */
    lazyPreloaderClass: InputSignal<string | undefined> = input<string | undefined>(undefined);

    /**
     * Number of next and previous slides to preload. Only applicable if using lazy loading.
     *
     * @type {number | undefined}
     * @default 0
     */
    lazyPreloadPrevNext: InputSignal<number | undefined> = input<number | undefined>(undefined);

    /**
     * Object with a11y parameters or boolean `true` to enable with default settings.
     *
     * @type {A11yOptions | undefined}
     * @example
     * ```js
     * const swiper = new Swiper('.swiper', {
     *   a11y: {
     *     prevSlideMessage: 'Previous slide',
     *     nextSlideMessage: 'Next slide',
     *   },
     * });
     * ```
     */
    a11y: InputSignal<A11yOptions | undefined> = input<A11yOptions | undefined>(undefined);

    /**
     * Object with autoplay parameters or boolean `true` to enable with default settings
     *
     * @type {AutoplayOptions | boolean | undefined}
     * @example
     * ```js
     * const swiper = new Swiper('.swiper', {
     *  autoplay: {
     *    delay: 5000,
     *  },
     *});
     * ```
     */
    autoplay: InputSignal<AutoplayOptions | boolean | undefined> = input<AutoplayOptions | boolean | undefined>(undefined);

    /**
     * Object with controller parameters or boolean `true` to enable with default settings
     *
     * @type {ControllerOptions | undefined}
     * @example
     * ```js
     * const swiper = new Swiper('.swiper', {
     *   controller: {
     *     inverse: true,
     *   },
     * });
     * ```
     */
    controller: InputSignal<ControllerOptions | undefined> = input<ControllerOptions | undefined>(undefined);

    /**
     * Object with Coverflow-effect parameters.
     *
     * @type {CoverflowEffectOptions | undefined}
     * @example
     * ```js
     * const swiper = new Swiper('.swiper', {
     *   effect: 'coverflow',
     *   coverflowEffect: {
     *     rotate: 30,
     *     slideShadows: false,
     *   },
     * });
     * ```
     */
    coverflowEffect: InputSignal<CoverflowEffectOptions | undefined> = input<CoverflowEffectOptions | undefined>(undefined);

    /**
     * Object with Cube-effect parameters
     *
     * @type {CubeEffectOptions | undefined}
     * @example
     * ```js
     * const swiper = new Swiper('.swiper', {
     *   effect: 'cube',
     *   cubeEffect: {
     *     slideShadows: false,
     *   },
     * });
     * ```
     */
    cubeEffect: InputSignal<CubeEffectOptions | undefined> = input<CubeEffectOptions | undefined>(undefined);

    /**
     * Object with Fade-effect parameters
     *
     * @type {FadeEffectOptions | undefined}
     * @example
     * ```js
     * const swiper = new Swiper('.swiper', {
     *   effect: 'fade',
     *   fadeEffect: {
     *     crossFade: true
     *   },
     * });
     * ```
     */
    fadeEffect: InputSignal<FadeEffectOptions | undefined> = input<FadeEffectOptions | undefined>(undefined);

    /**
     * Object with Flip-effect parameters
     *
     * @type {FlipEffectOptions | undefined}
     * @example
     * ```js
     * const swiper = new Swiper('.swiper', {
     *   effect: 'flip',
     *   flipEffect: {
     *     slideShadows: false,
     *   },
     * });
     * ```
     */
    flipEffect: InputSignal<FlipEffectOptions | undefined> = input<FlipEffectOptions | undefined>(undefined);

    /**
     * Object with Creative-effect parameters
     *
     * @type {CreativeEffectOptions | undefined}
     * @example
     * ```js
     * const swiper = new Swiper('.swiper', {
     *   effect: 'creative',
     *   creativeEffect: {
     *     prev: {
     *       // will set `translateZ(-400px)` on previous slides
     *       translate: [0, 0, -400],
     *     },
     *     next: {
     *       // will set `translateX(100%)` on next slides
     *       translate: ['100%', 0, 0],
     *     },
     *   },
     * });
     * ```
     */
    creativeEffect: InputSignal<CreativeEffectOptions | undefined> = input<CreativeEffectOptions | undefined>(undefined);

    /**
     * Object with Cards-effect parameters
     *
     * @type {CardsEffectOptions | undefined}
     * @example
     * ```js
     * const swiper = new Swiper('.swiper', {
     *   effect: 'cards',
     *   cardsEffect: {
     *     // ...
     *   },
     * });
     * ```
     */
    cardsEffect: InputSignal<CardsEffectOptions | undefined> = input<CardsEffectOptions | undefined>(undefined);

    /**
     * Enables hash url navigation to for slides.
     * Object with hash navigation parameters or boolean `true` to enable with default settings
     *
     * @type {HashNavigationOptions | boolean | undefined}
     * @example
     * ```js
     * const swiper = new Swiper('.swiper', {
     *   hashNavigation: {
     *     replaceState: true,
     *   },
     * });
     * ```
     */
    hashNavigation: InputSignal<HashNavigationOptions | boolean | undefined> = input<HashNavigationOptions | boolean | undefined>(undefined);

    /**
     * Enables history push state where every slide will have its own url. In this parameter you have to specify main slides url like `"slides"` and specify every slide url using `data-history` attribute.
     * Object with history navigation parameters or boolean `true` to enable with default settings.
     *
     * Object with history navigation parameters or boolean `true` to enable with default settings
     *
     * @example
     * ```js
     * const swiper = new Swiper('.swiper', {
     *   history: {
     *     replaceState: true,
     *   },
     * });
     * ```
     *
     * @example
     * ```html
     * <!-- will produce "slides/slide1" url in browser history -->
     * <div class="swiper-slide" data-history="slide1"></div>
     * ```
     */
    history: InputSignal<HistoryOptions | boolean | undefined> = input<HistoryOptions | boolean | undefined>(undefined);

    /**
     * Enables navigation through slides using keyboard. Object with keyboard parameters or boolean `true` to enable with default settings
     *
     * @type {KeyboardOptions | boolean | undefined}
     * @example
     * ```js
     * const swiper = new Swiper('.swiper', {
     *   keyboard: {
     *     enabled: true,
     *     onlyInViewport: false,
     *   },
     * });
     * ```
     */
    keyboard: InputSignal<KeyboardOptions | boolean | undefined> = input<KeyboardOptions | boolean | undefined>(undefined);

    /**
     * Enables navigation through slides using mouse wheel. Object with mousewheel parameters or boolean `true` to enable with default settings
     *
     * @type {MousewheelOptions | boolean | undefined}
     * @example
     * ```js
     * const swiper = new Swiper('.swiper', {
     *   mousewheel: {
     *     invert: true,
     *   },
     * });
     * ```
     */
    mousewheel: InputSignal<MousewheelOptions | boolean | undefined> = input<MousewheelOptions | boolean | undefined>(undefined);

    /**
     * Object with navigation parameters or boolean `true` to enable with default settings.
     *
     * @type {NavigationOptions | boolean | undefined}
     * @example
     * ```js
     * const swiper = new Swiper('.swiper', {
     *   navigation: {
     *     nextEl: '.swiper-button-next',
     *     prevEl: '.swiper-button-prev',
     *   },
     * });
     * ```
     */
    navigation: InputSignal<NavigationOptions | boolean | undefined> = input<NavigationOptions | boolean | undefined>(undefined);

    /**
     * Object with pagination parameters or boolean `true` to enable with default settings.
     *
     * @type {PaginationOptions | boolean | undefined}
     * @example
     * ```js
     * const swiper = new Swiper('.swiper', {
     *   pagination: {
     *     el: '.swiper-pagination',
     *     type: 'bullets',
     *   },
     * });
     * ```
     */
    pagination: InputSignal<PaginationOptions | boolean | undefined> = input<PaginationOptions | boolean | undefined>(undefined);

    /**
     * Object with parallax parameters or boolean `true` to enable with default settings.
     *
     * @type {ParallaxOptions | boolean | undefined}
     * @example
     * ```js
     * const swiper = new Swiper('.swiper', {
     *   parallax: true,
     * });
     * ```
     */
    parallax: InputSignal<ParallaxOptions | boolean | undefined> = input<ParallaxOptions | boolean | undefined>(undefined);

    /**
     * Object with scrollbar parameters or boolean `true` to enable with default settings.
     *
     * @type {ScrollbarOptions | boolean | undefined}
     * @example
     * ```js
     * const swiper = new Swiper('.swiper', {
     *   scrollbar: {
     *     el: '.swiper-scrollbar',
     *     draggable: true,
     *   },
     * });
     * ```
     */
    scrollbar: InputSignal<ScrollbarOptions | boolean | undefined> = input<ScrollbarOptions | boolean | undefined>(undefined);

    /**
     * Object with thumbs component parameters
     *
     * @type {ThumbsOptions | undefined}
     * @example
     * ```js
     * const swiper = new Swiper('.swiper', {
     *   ...
     *   thumbs: {
     *     swiper: thumbsSwiper
     *   }
     * });
     * ```
     */
    thumbs: InputSignal<ThumbsOptions | undefined> = input<ThumbsOptions | undefined>(undefined);

    /**
     * Enables virtual slides functionality. Object with virtual slides parameters or boolean `true` to enable with default settings.
     *
     * @type {VirtualOptions | boolean | undefined}
     * @example
     * ```js
     * const swiper = new Swiper('.swiper', {
     *   virtual: {
     *     slides: ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'],
     *   },
     * });
     * ```
     */
    virtual: InputSignal<VirtualOptions | boolean | undefined> = input<VirtualOptions | boolean | undefined>(undefined);

    /**
     * Enables zooming functionality. Object with zoom parameters or boolean `true` to enable with default settings
     *
     * @type {ZoomOptions | boolean | undefined}
     * @example
     * ```js
     * const swiper = new Swiper('.swiper', {
     *   zoom: {
     *     maxRatio: 5,
     *   },
     * });
     * ```
     */
    zoom: InputSignal<ZoomOptions | boolean | undefined> = input<ZoomOptions | boolean | undefined>(undefined);

    /**
     * Enables free mode functionality. Object with free mode parameters or boolean `true` to enable with default settings.
     *
     * @type {FreeModeOptions | boolean | undefined}
     * @example
     * ```js
     * const swiper = new Swiper('.swiper', {
     *   freeMode: true,
     * });
     *
     * const swiper = new Swiper('.swiper', {
     *   freeMode: {
     *     enabled: true,
     *     sticky: true,
     *   },
     * });
     * ```
     */
    freeMode: InputSignal<FreeModeOptions | boolean | undefined> = input<FreeModeOptions | boolean | undefined>(undefined);

    /**
     * Object with grid parameters to enable "multirow" slider.
     *
     * @type {GridOptions | undefined}
     * @example
     * ```js
     * const swiper = new Swiper('.swiper', {
     *   grid: {
     *     rows: 2,
     *   },
     * });
     * ```
     */
    grid: InputSignal<GridOptions | undefined> = input<GridOptions | undefined>(undefined);


    _swiperOptionsInternalComputed = computed(() => {
        const _swiperOptionsInternal = {
            modules: this.modules(),
            injectStyles: this.injectStyles(),
            injectStylesUrls: this.injectStylesUrls(),
            init: this.init(),
            enabled: this.enabled(),
            updateOnWindowResize: this.updateOnWindowResize(),
            resizeObserver: this.resizeObserver(),
            initialSlide: this.initialSlide(),
            direction: this.direction(),
            oneWayMovement: this.oneWayMovement(),
            swiperElementNodeName: this.swiperElementNodeName(),
            speed: this.speed(),
            setWrapperSize: this.setWrapperSize(),
            virtualTranslate: this.virtualTranslate(),
            width: this.width(),
            height: this.height(),
            autoHeight: this.autoHeight(),
            roundLengths: this.roundLengths(),
            nested: this.nested(),
            createElements: this.createElements(),
            eventsPrefix: this.eventsPrefix(),
            focusableElements: this.focusableElements(),
            uniqueNavElements: this.uniqueNavElements(),
            effect: this.effect(),
            runCallbacksOnInit: this.runCallbacksOnInit(),
            watchOverflow: this.watchOverflow(),
            userAgent: this.userAgent(),
            url: this.url(),
            on: this.on(),
            onAny: this.onAny(),
            cssMode: this.cssMode(),
            spaceBetween: this.spaceBetween(),
            slidesPerView: this.slidesPerView(),
            maxBackfaceHiddenSlides: this.maxBackfaceHiddenSlides(),
            slidesPerGroup: this.slidesPerGroup(),
            slidesPerGroupSkip: this.slidesPerGroupSkip(),
            slidesPerGroupAuto: this.slidesPerGroupAuto(),
            centeredSlides: this.centeredSlides(),
            centeredSlidesBounds: this.centeredSlidesBounds(),
            slidesOffsetBefore: this.slidesOffsetBefore(),
            slidesOffsetAfter: this.slidesOffsetAfter(),
            normalizeSlideIndex: this.normalizeSlideIndex(),
            centerInsufficientSlides: this.centerInsufficientSlides(),
            grabCursor: this.grabCursor(),
            touchEventsTarget: this.touchEventsTarget(),
            touchRatio: this.touchRatio(),
            touchAngle: this.touchAngle(),
            simulateTouch: this.simulateTouch(),
            shortSwipes: this.shortSwipes(),
            longSwipes: this.longSwipes(),
            longSwipesRatio: this.longSwipesRatio(),
            longSwipesMs: this.longSwipesMs(),
            followFinger: this.followFinger(),
            allowTouchMove: this.allowTouchMove(),
            threshold: this.threshold(),
            touchStartPreventDefault: this.touchStartPreventDefault(),
            touchStartForcePreventDefault: this.touchStartForcePreventDefault(),
            touchMoveStopPropagation: this.touchMoveStopPropagation(),
            edgeSwipeDetection: this.edgeSwipeDetection(),
            edgeSwipeThreshold: this.edgeSwipeThreshold(),
            touchReleaseOnEdges: this.touchReleaseOnEdges(),
            passiveListeners: this.passiveListeners(),
            resistance: this.resistance(),
            resistanceRatio: this.resistanceRatio(),
            preventInteractionOnTransition: this.preventInteractionOnTransition(),
            allowSlidePrev: this.allowSlidePrev(),
            allowSlideNext: this.allowSlideNext(),
            noSwiping: this.noSwiping(),
            noSwipingClass: this.noSwipingClass(),
            noSwipingSelector: this.noSwipingSelector(),
            swipeHandler: this.swipeHandler(),
            preventClicks: this.preventClicks(),
            preventClicksPropagation: this.preventClicksPropagation(),
            slideToClickedSlide: this.slideToClickedSlide(),
            watchSlidesProgress: this.watchSlidesProgress(),
            loop: this.loop(),
            loopAddBlankSlides: this.loopAddBlankSlides(),
            loopAdditionalSlides: this.loopAdditionalSlides(),
            loopPreventsSliding: this.loopPreventsSliding(),
            rewind: this.rewind(),
            breakpoints: this.breakpoints(),
            breakpointsBase: this.breakpointsBase(),
            observer: this.observer(),
            observeSlideChildren: this.observeSlideChildren(),
            observeParents: this.observeParents(),
            containerModifierClass: this.containerModifierClass(),
            slideClass: this.slideClass(),
            slideActiveClass: this.slideActiveClass(),
            slideVisibleClass: this.slideVisibleClass(),
            slideFullyVisibleClass: this.slideFullyVisibleClass(),
            slideBlankClass: this.slideBlankClass(),
            slideNextClass: this.slideNextClass(),
            slidePrevClass: this.slidePrevClass(),
            wrapperClass: this.wrapperClass(),
            lazyPreloaderClass: this.lazyPreloaderClass(),
            lazyPreloadPrevNext: this.lazyPreloadPrevNext(),
            a11y: this.a11y(),
            autoplay: this.autoplay(),
            controller: this.controller(),
            coverflowEffect: this.coverflowEffect(),
            cubeEffect: this.cubeEffect(),
            fadeEffect: this.fadeEffect(),
            flipEffect: this.flipEffect(),
            creativeEffect: this.creativeEffect(),
            cardsEffect: this.cardsEffect(),
            hashNavigation: this.hashNavigation(),
            history: this.history(),
            keyboard: this.keyboard(),
            mousewheel: this.mousewheel(),
            navigation: this.navigation(),
            pagination: this.pagination(),
            parallax: this.parallax(),
            scrollbar: this.scrollbar(),
            thumbs: this.thumbs(),
            virtual: this.virtual(),
            zoom: this.zoom(),
            freeMode: this.freeMode(),
            grid: this.grid(),
        }
        return {
            ...(this.swiperOptions() || {}), ..._swiperOptionsInternal,
            on: {
                init: function () {
                    console.log('swiper initialized');
                },
            },
            init: false,
        };
    })
}