import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import renderer from 'react-test-renderer';
import App from './App';

it('renders without crashing', () => {
	const rendered = renderer.create(<App />).toJSON();
	expect(rendered).toBeTruthy();
});

it('calculates correctly', () => {
	// Render a checkbox with label in the document
	const app = shallow(<App />);

	expect(checkbox.text()).toEqual('Off');

	checkbox.find('input').simulate('change');

	expect(checkbox.text()).toEqual('On');
});
