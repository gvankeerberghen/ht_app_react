import * as React from 'react';
import * as TestUtils from 'react-addons-test-utils';
import TechNameInput from './TechNameInput';
import {assign} from '../assign';

function setup(propOverrides: any) {
  const props = assign({
    onSave: jasmine.createSpy('onSave'),
    text: 'Use Redux',
    placeholder: 'What needs to be done?',
    editing: false,
    newTech: false
  }, propOverrides);

  const renderer = TestUtils.createRenderer();

  renderer.render(
    <TechNameInput {...props}/>
  );

  let output = renderer.getRenderOutput();

  output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('components', () => {
  describe('TechNameInput', () => {
    it('should render correctly', () => {
      const {output} = setup({});
      expect(output.props.placeholder).toEqual('What needs to be done?');
      expect(output.props.value).toEqual('Use Redux');
      expect(output.props.className).toEqual('');
    });

    it('should render correctly when editing=true', () => {
      const {output} = setup({editing: true});
      expect(output.props.className).toEqual('edit');
    });

    it('should render correctly when newTech=true', () => {
      const {output} = setup({newTech: true});
      expect(output.props.className).toEqual('new-todo');
    });

    it('should update value on change', () => {
      const {output, renderer} = setup({});
      output.props.onChange({target: {value: 'Use Radox'}});
      const updated = renderer.getRenderOutput();
      expect(updated.props.value).toEqual('Use Radox');
    });

    it('should call onSave on return key press', () => {
      const {output, props} = setup({});
      output.props.onKeyDown({which: 13, target: {value: 'Use Redux'}});
      expect(props.onSave).toHaveBeenCalledWith('Use Redux');
    });

    it('should reset state on return key press if newTech', () => {
      const {output, renderer} = setup({newTech: true});
      output.props.onKeyDown({which: 13, target: {value: 'Use Redux'}});
      const updated = renderer.getRenderOutput();
      expect(updated.props.value).toEqual('');
    });

    it('should call onSave on blur', () => {
      const {output, props} = setup({});
      output.props.onBlur({target: {value: 'Use Redux'}});
      expect(props.onSave).toHaveBeenCalledWith('Use Redux');
    });

    it('shouldnt call onSave on blur if newTech', () => {
      const {output, props} = setup({newTech: true});
      output.props.onBlur({target: {value: 'Use Redux'}});
      expect(props.onSave.calls.count()).toBe(0);
    });
  });
});