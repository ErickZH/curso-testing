import Task from '@/components/Task';
import { mount, shallow } from '@vue/test-utils'

describe('Component Task', () => {
    test('it has name', () => {
        const wrapper = mount(Task);
        expect(wrapper.name()).toBe('Task');
    });

    test('it renders task prop', () => {
        const wrapper = mount(Task, {
            propsData: { task: 'My new Task' }
        });
        expect(wrapper.text()).toContain('My new Task');
    });

    test('it emmits delete event when delete button is clicked', () => {
        const wrapper = mount(Task);

        const button = wrapper.find('#delete');
        button.trigger('click');
        expect(wrapper.emitted().delete).toBeTruthy();
    });

    test('it renders default slot', () => {
        const wrapper = shallow(Task, {
            slots: {
                default: 'close'
            }
        });

        expect(wrapper.text()).toContain('close');
    });
});