import { jest } from '@jest/globals';
import { Summary } from '../../../../../packages/cfpb-expandables';
import { simulateEvent } from '../../../../util/simulate-event.js';

const HTML_SNIPPET = `
<div class="o-summary o-summary--mobile"
     data-js-hook="behavior_flyout-menu">
    <div class="o-summary__content"
         data-js-hook="behavior_flyout-menu_content">
        <a href="#">Content</a>
        <details>
            <summary>
                I have keys but no doors.
                I have space but no room.
                You can enter but can’t leave.
                What am I?
            </summary>
            A keyboard.
        </details>
    </div>
    <button class="o-summary__btn u-hidden"
            data-js-hook="behavior_flyout-menu_trigger">
        Read full description
    </button>
</div>
`;

let summary;
let summaryDom;
let targetDom;
let contentDom;
let contentLinkDom;
let expandableContentDom;

/**
 * Change the viewport to width x height. Mocks window.resizeTo( w, h ).
 * @param {number} width - width in pixels.
 * @param {number} height - height in pixels.
 */
function windowResizeTo(width, height) {
  // Change the viewport to width x height. Mocks window.resizeTo( w, h ).
  global.innerWidth = width;
  global.innerHeight = height;

  // Trigger the window resize event.
  global.dispatchEvent(new Event('resize'));
}

describe('Summary', () => {
  beforeEach(() => {
    document.body.innerHTML = HTML_SNIPPET;
    summaryDom = document.querySelector('.o-summary--mobile');
    targetDom = summaryDom.querySelector('.o-summary__btn');
    contentDom = summaryDom.querySelector('.o-summary__content');
    contentLinkDom = summaryDom.querySelector('a');
    expandableContentDom = summaryDom.querySelector('details');

    summary = new Summary(summaryDom);
  });

  describe('initialized state', () => {
    it('should be initialized', () => {
      expect(summaryDom.getAttribute('data-js-hook')).toBe(
        'behavior_flyout-menu',
      );
      summary.init();
      expect(summaryDom.getAttribute('data-js-hook')).toBe(
        'behavior_flyout-menu state_atomic_init',
      );
    });
  });

  describe('interactions', () => {
    it('should be absent when content is too brief', () => {
      jest
        .spyOn(contentDom, 'offsetHeight', 'get')
        .mockImplementation(() => 50);
      summary.init();
      windowResizeTo(300);
      expect(targetDom.classList.contains('u-hidden')).toBe(true);
    });

    it('should expand on click', () => {
      jest
        .spyOn(contentDom, 'offsetHeight', 'get')
        .mockImplementation(() => 200);
      summary.init();
      windowResizeTo(300);
      expect(targetDom.getAttribute('aria-expanded')).toBe('false');
      simulateEvent('click', targetDom);

      /* The transitionend event should fire on its own,
         but for some reason the transitionend event is not firing within JSDom.
         In a future JSDom update this should be revisited.
         See https://github.com/jsdom/jsdom/issues/1781
      */
      const event = new Event('transitionend');
      event.propertyName = 'max-height';
      contentDom.dispatchEvent(event);

      expect(contentDom.style.maxHeight).not.toBe('0');
      expect(targetDom.getAttribute('aria-expanded')).toBe('true');

      expect(targetDom.classList.contains('u-hidden')).toBe(true);
      windowResizeTo(1200);
    });

    it('should refresh height when non-link content is clicked', () => {
      jest
        .spyOn(contentDom, 'offsetHeight', 'get')
        .mockImplementation(() => 200);
      summary.init();
      windowResizeTo(300);
      simulateEvent('click', targetDom);

      const spy = jest.spyOn(contentDom, 'scrollHeight', 'get');
      expect(spy).not.toHaveBeenCalled();

      simulateEvent('click', contentLinkDom);
      expect(spy).not.toHaveBeenCalled();

      simulateEvent('click', expandableContentDom);
      expect(spy).toHaveBeenCalled();
    });
  });
});
