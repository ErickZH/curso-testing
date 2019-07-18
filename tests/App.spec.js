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

    expect(wrapper.vm.msg).toBe('');
});

test('msg data is displayed', () => {
    const wrapper = mount(App);
    wrapper.setData({ msg: 'Hello' });
    expect(wrapper.text()).toContain('Hello');
});

test('msg is bound to input value', () => {
    const wrapper = mount(App);
    const input = wrapper.find('input');
    wrapper.setData({ msg: 'Hello' });

    input.element.value = 'Updated text';
    input.trigger('input');
    expect(wrapper.html()).toContain('Updated text');
});

test('fullName computed is firstName + lastName', () => {
    const wrapper = mount(App);
    wrapper.setData({
        firstName: 'John',
        lastName: 'Doe'
    });
    expect(wrapper.vm.fullName).toBe('John Doe');
});