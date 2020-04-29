import React from 'react';
import { shallow } from 'enzyme';
import CharacterDetail from './CharacterDetail';

describe('Character Detail component', () => {
  it('renders Character Detail', () => {
    const wrapper = shallow(<CharacterDetail name= "Fox Maulder"
      image="maulder.png" description='he wants to believe' categories="every episode except that one season without him" />);
    expect(wrapper).toMatchSnapshot();
  });
});

