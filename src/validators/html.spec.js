import validator from './html';
import { expect } from 'chai';

describe('HTML Validator', () => {
  const makeMarkup = (contentBody) => `
    <!DOCTYPE html>
    <html>
      <head>
      </head>
      <body>
        ${contentBody}
      </body>
    </html>
  `;

  describe('includes', () => {
    const tableGood = makeMarkup('<table></table>');
    const tableNoClosing = makeMarkup('<table>');

    it('passes with an open and closing tag', () => {
      expect(
        validator.includes("<table></table>", tableGood).pass
      ).to.equal(true);
    });

    it('fails without a closing tag', () => {
      expect(
        validator.includes("<table></table>", tableNoClosing).pass
      ).to.equal(false);
    });
  });
});
