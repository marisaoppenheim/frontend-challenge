import React from 'react';
import Property from './Property';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const propertyProps = {
  city: 'Brooklyn',
  displayPictureUrl: 'http://some.url',
  bedrooms: 3,
  bathrooms: 4,
};

it('Shows all property details', () => {
  const property = shallow(
    <Property {...propertyProps} />
  );
  expect(property.find('img').props().src).toEqual(propertyProps.displayPictureUrl)
  expect(property.find('.description').childAt(0).text()).toEqual('Brooklyn')
  expect(property.find('.description').childAt(1).text()).toEqual('3 Bedrooms')
  expect(property.find('.description').childAt(2).text()).toEqual('4 Bathrooms')
});
