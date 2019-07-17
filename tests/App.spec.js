import { mount } from 'vue-test-utils'
import App from '@/App'

test('1 + 1 is 2', () => {
    expect(1 + 1).toBe(2)
});

test('component has a name', () => {
    const wrapper = mount(App);

    expect(wrapper.name()).toBe('App');
});

test('default data is corret', () => {
    const wrapper = mount(App);

    expect(wrapper.vm.msg).toBe('Hello');
});