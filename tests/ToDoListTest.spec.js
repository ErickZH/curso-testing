import { mount } from '@vue/test-utils'
import ToDoList from '@/components/ToDoList';
import Task from '@/components/Task';

describe('Component ToDoList', () => {
    test('it has name', () => {
        const wrapper = mount(ToDoList);
        expect(wrapper.name()).toBe('ToDoList');
    });

    test('it renders Task component', () => {
        const wrapper = mount(ToDoList);
        wrapper.setData({ tasks: ['1'] });
        expect(wrapper.contains(Task)).toBe(true);
    });

    test('it renders as many Task components as tasks', () => {
        const wrapper = mount(ToDoList);
        wrapper.setData({ tasks: ['1', '2'] });

        const tasks = wrapper.findAll(Task);

        expect(tasks.length).toBe(2);
    });

    test('it passes right props to Task component', () => {
        const wrapper = mount(ToDoList);
        wrapper.setData({ tasks: ['1'] });

        const tasks = wrapper.find(Task);

        expect(tasks.props()).toEqual({ task: '1'});
    });
});