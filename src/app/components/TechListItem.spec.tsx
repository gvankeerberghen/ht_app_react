import * as React from 'react';
import * as TestUtils from 'react-addons-test-utils';
import TechListItem from './TechListItem';

function setup() {
  const props = {
    userId: '10',
    tech: {
      id: 0,
      name: 'Redux',
      type: 'A tech',
      votes: ['1001']
    },
    addVote: jasmine.createSpy('addVote'),
    removeVote: jasmine.createSpy('removeVote')
  };

  const renderer = TestUtils.createRenderer();

  renderer.render(
    <TechListItem {...props}/>
  );

  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('components', () => {
  describe('TechListItem', () => {
    it('should render a list item with title and subtitle', () => {
      const {output} = setup();

      expect(output.props).toEqual(jasmine.objectContaining({
        primaryText: 'Redux',
        secondaryText: 'A tech'
      }));
    });

    it('should render a list item with a leftAvatar containing the number of votes', () => {
      const {output} = setup();

      expect(output.props.leftAvatar.props).toEqual(jasmine.objectContaining({
        children: 1
      }));
    });
  });
});
