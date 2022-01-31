# fem-room-homepage

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Notes

(January 30, 2022)

Progressive enchancement isn't usually something I concern myself too much with these kinds of demos. Typically, I'll approach building one of these projects in one of two ways:

1. Build it out entirely in some JS framework, such that it won't so much as render in a JavaScript-less browser.

2. Swear to myself that I'll do it *right* this time, and build out a static page in pure HTML/CSS. Then never actually progressively enhance anything.

Neither approach really worked for this design, which would leave large portions of important content unreachable if implemented solely with JS, but still specified a slider/tab-like interface. So I was forced to adopt an *actual* progressive-enhancement mindset when building out this project, resorting to several tricks (primarily making use of the `:target` pseudo-class) in order to make the design usable in a JS-less environment, then modifying the page to allow for a better experience when JS was available.

What I learned from this was that I should probably be doing this exercise more often. It turns out that neither of my two usual approaches, even approach #2, is ideal for progressive enhancement, since both make broad assumptions about the context in which the page will be displayed. As a result, my code ended up messier than I would have liked as I explored different ways of approaching the problem.

With the nav menu, I tried a JS-first approach, but neglected to structure my markup to support a CSS-based implementation.

With the slider elements, CSS-first worked out, but then my JS code was forced to work around the (statically-inclined) markup and styling decisions I'd make in the first half of the project.

If I were to re-implement this project, I'd take a third approach: recognize that progressive enhancement isn't something to be tacked on to an existing solution (or a patch over suddenly-missing functionality), but rather a design decision that needs to be made up-front, and considered through all stages of implementation. Had I written the page realizing that I would need to strike a compromise between JS and no-JS concerns, things would probably have gone a lot more smoothly.


[A live version of this project can be found here.](https://defeated-dress.surge.sh/)