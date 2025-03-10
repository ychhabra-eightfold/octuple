import React from 'react';
import Enzyme, { mount, ReactWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import MatchMediaMock from 'jest-matchmedia-mock';
import { Panel } from './';
import { IconName } from '../Icon';

Enzyme.configure({ adapter: new Adapter() });

let matchMedia: any;

describe('Panel', () => {
  let wrapper: ReactWrapper;
  const body = 'This is the panel body';
  const title = 'This is the title';

  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });
  afterEach(() => {
    matchMedia.clear();
  });

  beforeEach(() => {
    wrapper = mount(
      <Panel visible={false}>
        <div>{body}</div>
      </Panel>
    );
  });

  test('panel visibility', () => {
    expect(wrapper.hasClass('visible')).not.toEqual(true);
    wrapper.setProps({
      visible: true,
    });
    expect(wrapper.hasClass('visible')).toBe(false);
  });

  test('panel content', () => {
    wrapper.setProps({
      visible: true,
      title,
      body,
    });
    expect(wrapper.find('.body').text()).toBe(body);
    expect(wrapper.find('.header').text()).toBe(title);
  });

  test('panel actions', () => {
    const onClose = jest.fn();
    wrapper.setProps({
      visible: true,
      onClose,
    });
    wrapper.find('.panel-backdrop').at(0).simulate('click');

    wrapper.find('.button-neutral').at(0).simulate('click');
    expect(onClose).toHaveBeenCalledTimes(2);

    wrapper.setProps({
      maskClosable: false,
    });
    wrapper.find('.panel-backdrop').at(0).simulate('click');
    expect(onClose).toHaveBeenCalledTimes(2);
  });

  test('panel header actions exist', () => {
    wrapper.setProps({
      visible: true,
      headerButtonProps: {
        classNames: 'header-button',
        iconProps: { path: IconName.mdiArrowLeftThick },
      },
      actionButtonOneProps: {
        classNames: 'header-action-button-1',
        iconProps: { path: IconName.mdiCogOutline },
      },
      actionButtonTwoProps: {
        classNames: 'header-action-button-2',
        iconProps: { path: IconName.mdiHistory },
      },
      actionButtonThreeProps: {
        classNames: 'header-action-button-3',
        iconProps: { path: IconName.mdiDatabaseArrowDownOutline },
      },
    });
    expect(wrapper.find('.header-button').length).toBeTruthy();
    expect(wrapper.find('.header-action-button-1').length).toBeTruthy();
    expect(wrapper.find('.header-action-button-2').length).toBeTruthy();
    expect(wrapper.find('.header-action-button-3').length).toBeTruthy();
  });

  test('panel no body padding', () => {
    wrapper.setProps({
      visible: true,
      bodyPadding: false,
    });
    expect(wrapper.find('.no-body-padding').length).toBeTruthy();
  });

  test('panel overlay is hidden', () => {
    wrapper.setProps({
      visible: true,
      overlay: false,
    });
    expect(wrapper.find('.modeless').length).toBeTruthy();
  });
});
