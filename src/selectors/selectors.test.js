import expect from 'expect';
import {authorFormattedForDropdown} from './selectors';


describe('Author Selectors', () => {
  describe('authorFormattedForDropdown', () => {
    it('should should return author data formatted for use in dropdown', () => {
      const authors = [
        {id: 'ashu', firstName: 'Ashu', lastName: 'Rawat'},
        {id: 'ashutosh', firstName: 'Ashutosh', lastName: 'Rawat'}
      ];
      const expected = [
        {value: 'ashu', text: 'Ashu Rawat'},
        {value: 'ashutosh', text: 'Ashutosh Rawat'}
      ];

      expect(authorFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
