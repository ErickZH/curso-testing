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

test('fullName computed is displayed', () => {
    const wrapper = mount(App, {
        computed: {
            fullName: () => 'John Doe'
        }
    });

    expect(wrapper.text()).toContain('John Doe');
});

test('toUppercase method is called when button is pressed', () => {
    // mock
    const toUppercase = jest.fn();
    const wrapper = mount(App, {
        methods: {
            toUppercase
        }
    });
    
    // assert
    expect(toUppercase).toHaveBeenCalledTimes(0);
    const button = wrapper.find('button')
    button.trigger('click');
    expect(toUppercase).toHaveBeenCalledTimes(1);
});

test('firstName is in uppercase when toUppercase method is called', () => {
    const wrapper = mount(App);
    wrapper.setData({
        firstName: 'John'
    });

    wrapper.vm.toUppercase();
    expect(wrapper.vm.firstName).toBe('JOHN');
});

test('is a Vue instance', () => {
    const wrapper = mount(App)
    expect(wrapper.isVueInstance()).toBeTruthy()
});

test('msg is displayed inside message span', () => {
    const wrapper = mount(App);

    wrapper.setData({
        msg: 'Hello World'
    });

    const span = wrapper.find('span#message');
    expect(span.text()).toBe('Hello World');
});

test('fullName is displayed inside full-name span', () => {
    const wrapper = mount(App, {
        computed: { fullName: () => 'John Doe'}
    });

    const span = wrapper.find('span#full-name');
    expect(span.text()).toBe('John Doe');
});

test('message is displayed before full-name', () => {
    const wrapper = mount(App, {
        computed: { fullName: () => 'John Doe' }
    });
    wrapper.setData({
        msg: 'Hello'
    });

    const spans = wrapper.findAll('span');

    expect(spans.wrappers[0].text()).toBe('Hello');
    expect(spans.wrappers[1].text()).toBe('John Doe');
});

test('warning is displayed if msg empty', () => {
    const wrapper = mount(App);
    wrapper.setData({
        msg: ''
    });

    // const warning = wrapper.find('#warning');
    // expect(warning.exists()).toBe(true);

    expect(wrapper.contains('#warning')).toBe(true);
});

test('warning is not displayed if msg is not empty', () => {
    const wrapper = mount(App);
    wrapper.setData({
        msg: 'something'
    });
    expect(wrapper.contains('#warning')).toBe(false);
});

