import * as React from 'react';
import * as TestUtils from 'react-addons-test-utils';
import Header from './Header';
import AppBar from 'material-ui/AppBar';

function setup() {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Header />);
  const output = renderer.getRenderOutput();

  return {
    output,
    renderer
  };
}

describe('components', () => {
  describe('Header', () => {
    it('should render correctly', () => {
      const {output} = setup();

      expect(output.type).toBe(AppBar);
      expect(output.props.title).toBe('HackerTeam Web Techs to explore');
    });
  });
});
