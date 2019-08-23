import { mount, shallowMount } from '@vue/test-utils'
import ToDoList from '@/components/ToDoList';
import Task from '@/components/Task';
import TaskStub from '../stubs/Task';
import { JestEnvironment } from '@jest/environment';

describe('Component ToDoList', () => {
    test('it has name', () => {
        const wrapper = shallowMount(ToDoList);
        expect(wrapper.name()).toBe('ToDoList');
    });

    test('it renders Task component', () => {
        const wrapper = shallowMount(ToDoList, {
            stubs: {
                Task: TaskStub
            }
        });
        wrapper.setData({ tasks: [1] });
        expect(wrapper.contains(Task)).toBe(true);
    });

    test('it renders as many Task components as tasks', () => {
        const wrapper = shallowMount(ToDoList, {
            stubs: {
                Task: TaskStub
            }
        });
        wrapper.setData({ tasks: ['1', 2] });

        const tasks = wrapper.findAll(Task);

        expect(tasks.length).toBe(2);
    });

    test('it passes right props to Task component', () => {
        const wrapper = shallowMount(ToDoList, {
            stubs: {
                Task: TaskStub
            }
        });
        wrapper.setData({ tasks: [1] });

        const tasks = wrapper.find(Task);

        expect(tasks.props()).toEqual({ task: 1});
    });

    test('it renders Header component', () => {
        const wrapper = shallowMount(ToDoList, {
            stubs: {
                Header: '<div id="header"></div>'
            }
        });
        expect(wrapper.contains('#header')).toBe(true);
    });

    test('it calls deleteTask method when task component emits delete event', () => {
        const deleteTask = jest.fn();

        const wrapper = shallowMount(ToDoList, {
            methods: { deleteTask },
        });
        wrapper.setData({ tasks: ['MY PROP'] });
        const task = wrapper.find(Task);
        task.vm.$emit('delete')
        
        expect(deleteTask).toHaveBeenCalledTimes(1);
        expect(deleteTask.mock.calls[0][0]).toBe('MY PROP');
    });
});