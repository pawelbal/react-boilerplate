import React from 'react';
import { shallow } from 'enzyme';
import DashbordPage from '../../components/Dashboard';

test('should render DashboardPage', () => {
  const wrapper = shallow(<DashbordPage />);
  expect(wrapper).toMatchSnapshot();
});
