import * as React from 'react';
import * as TestUtils from 'react-addons-test-utils';
import TechListItem from './TechListItem';

function setup( votes = ['1001']) {
  const props = {
    userId: '10',
    tech: {
      id: 0,
      name: 'Redux',
      type: 'A tech',
      votes: votes
    },
    switchVote: jasmine.createSpy('addVote')
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

    it('should render a list item with a grey rightIconButton when user did not vote', () => {
      const {output} = setup();

      expect(output.props.rightIconButton.props.children.props).toEqual(jasmine.objectContaining({
        color: '#9e9e9e'
      }));
    });

    it('should render a list item with a grey rightIconButton when user did vote', () => {
      const {output} = setup(['10']);

      expect(output.props.rightIconButton.props.children.props).toEqual(jasmine.objectContaining({
        color: '#4dd0e1'
      }));
    });

    it('rightIconButton onClick should call switchVote', () => {
      const {output, props} = setup([]);
      const button = output.props.rightIconButton;
      button.props.onClick();
      expect(props.switchVote).toHaveBeenCalledWith('10', 0);
    });
  });
});
