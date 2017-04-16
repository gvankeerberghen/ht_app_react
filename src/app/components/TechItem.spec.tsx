import * as React from 'react';
import * as TestUtils from 'react-addons-test-utils';
import TechItem from './TechItem';
import TechNameInput from './TechNameInput';

function setup(editing: boolean = false) {
  const props = {
    tech: {
      id: 0,
      name: 'Use Redux',
      type: '',
      votes: ''
    },
    editTech: jasmine.createSpy('editTech'),
    deleteTech: jasmine.createSpy('deleteTech'),
  };

  const renderer = TestUtils.createRenderer();

  renderer.render(
    <TechItem {...props}/>
  );

  let output = renderer.getRenderOutput();

  if (editing) {
    const label = output.props.children.props.children[0];
    label.props.onDoubleClick({});
    output = renderer.getRenderOutput();
  }

  return {
    props,
    output,
    renderer
  };
}

describe('components', () => {
  describe('TechItem', () => {
    it('initial render', () => {
      const {output} = setup();

      expect(output.type).toBe('li');
      expect(output.props.className).toBe('');

      const div = output.props.children;

      expect(div.type).toBe('div');
      expect(div.props.className).toBe('view');

      const [label, button] = div.props.children;

      expect(label.type).toBe('label');
      expect(label.props.children).toBe('Use Redux');

      expect(button.type).toBe('button');
      expect(button.props.className).toBe('destroy');
    });

    it('button onClick should call deleteTech', () => {
      const {output, props} = setup();
      const button = output.props.children.props.children[1];
      button.props.onClick({});
      expect(props.deleteTech).toHaveBeenCalledWith(0);
    });

    it('label onDoubleClick should put component in edit state', () => {
      const {output, renderer} = setup();
      const label = output.props.children.props.children[0];
      label.props.onDoubleClick({});
      const updated = renderer.getRenderOutput();
      expect(updated.type).toBe('li');
      expect(updated.props.className).toBe('editing');
    });

    it('edit state render', () => {
      const {output} = setup(true);

      expect(output.type).toBe('li');
      expect(output.props.className).toBe('editing');

      const input = output.props.children;
      expect(input.type).toBe(TechNameInput);
      expect(input.props.text).toBe('Use Redux');
      expect(input.props.editing).toBe(true);
    });

    it('TechNameInput onSave should call editTech', () => {
      const {output, props} = setup(true);
      output.props.children.props.onSave('Use Redux');
      expect(props.editTech).toHaveBeenCalledWith(0, 'Use Redux');
    });

    it('TechNameInput onSave should call deleteTech if text is empty', () => {
      const {output, props} = setup(true);
      output.props.children.props.onSave('');
      expect(props.deleteTech).toHaveBeenCalledWith(0);
    });

    it('TechNameInput onSave should exit component from edit state', () => {
      const {output, renderer} = setup(true);
      output.props.children.props.onSave('Use Redux');
      const updated = renderer.getRenderOutput();
      expect(updated.type).toBe('li');
      expect(updated.props.className).toBe('');
    });
  });
});
