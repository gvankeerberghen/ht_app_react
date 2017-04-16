import * as React from 'react';
import * as TestUtils from 'react-addons-test-utils';
import MainSection from './MainSection';
import TechItem from './TechItem';
import Footer from './Footer';
import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants/TodoFilters';
import {assign} from '../assign';

function setup(propOverrides: any) {
  const props = assign({
    techs: [
      {
        id: 0,
        name: 'Tech 0',
        type: '',
        votes: 0
      }, {
        id: 1,
        name: 'Tech 1',
        type: '',
        votes: 0
      }
    ],
    actions: {
      editTech: jasmine.createSpy('editTech'),
      deleteTech: jasmine.createSpy('deleteTech'),
    }
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

    describe('footer', () => {
      it('should render', () => {
        const {output} = setup({});
        const [, footer] = output.props.children;
        expect(footer.type).toBe(Footer);
        expect(footer.props.completedCount).toBe(0);
        expect(footer.props.activeCount).toBe(2);
        expect(footer.props.filter).toBe(SHOW_ALL);
      });

      it('onShow should set the filter', () => {
        const {output, renderer} = setup({});
        const [, footer] = output.props.children;
        footer.props.onShow(SHOW_COMPLETED);
        const updated = renderer.getRenderOutput();
        const [, updatedFooter] = updated.props.children;
        expect(updatedFooter.props.filter).toBe(SHOW_COMPLETED);
      });
    });

    describe('tech list', () => {
      it('should render', () => {
        const {output, props} = setup({});
        const [list, ] = output.props.children;
        expect(list.type).toBe('ul');
        expect(list.props.children.length).toBe(2);
        list.props.children.forEach((item, i) => { // eslint-disable-line max-nested-callbacks
          expect(item.type).toBe(TechItem);
          expect(item.props.tech).toBe(props.techs[i]);
        });
      });

      it('should filter items', () => {
        const {output, renderer, props} = setup({});
        const [, footer] = output.props.children;
        footer.props.onShow(SHOW_ACTIVE);
        const updated = renderer.getRenderOutput();
        const [updatedList, ] = updated.props.children;
        expect(updatedList.props.children.length).toBe(2);
        expect(updatedList.props.children[0].props.tech).toBe(props.techs[0]);
      });
    });
  });
});
