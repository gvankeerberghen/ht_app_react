import * as React from 'react';
import * as TestUtils from 'react-addons-test-utils';
import MainSection from './MainSection';
import {assign} from '../assign';

function setup(propOverrides: any) {
  const props = assign({
    techs: [
      {
        id: 0,
        name: 'Tech 0',
        type: '',
        votes: []
      },
      {
        id: 1,
        name: 'Tech 1',
        type: '',
        votes: [1000, 5001]
      },
      {
        id: 2,
        name: 'Tech B',
        type: '',
        votes: [1000]
      }
      ,
      {
        id: 3,
        name: 'Tech A',
        type: '',
        votes: [2000]
      }
    ],
    actions: {}
  }, propOverrides);

  const renderer = TestUtils.createRenderer();
  renderer.render(<MainSection {...props}/>);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('components', () => {
  describe('MainSection', () => {
    it('should render container', () => {
      const {output} = setup({});
      expect(output.type).toBe('section');
      expect(output.props.className).toBe('main');
    });

    describe('tech list', () => {
      it('should render the techs in descending vote then name order', () => {
        const {output, props} = setup({});

        const paper = output.props.children;

        const list = paper.props.children;

        const listItems = list.props.children;
        expect(listItems.length).toEqual(4, 'does not contain the 4 techs');

        expect(listItems[0].props.tech).toEqual({
          id: 1,
          name: 'Tech 1',
          type: '',
          votes: [1000, 5001]
        });

        expect(listItems[1].props.tech).toEqual({
          id: 3,
          name: 'Tech A',
          type: '',
          votes: [2000]
        });

        expect(listItems[2].props.tech).toEqual({
          id: 2,
          name: 'Tech B',
          type: '',
          votes: [1000]
        });

        expect(listItems[3].props.tech).toEqual({
          id: 0,
          name: 'Tech 0',
          type: '',
          votes: []
        });
      });
    });
  });
});
