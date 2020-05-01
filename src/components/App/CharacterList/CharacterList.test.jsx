import React from 'react';
import { shallow } from 'enzyme';
import CharacterList from './CharacterList';

describe('Character List component', () => {
  it('renders Character List', () => {
    const characters = [
      {
        image: 'https://i.pinimg.com/originals/ee/ef/3d/eeef3ddb2bb738db80f226213b6e2514.png',
        name: 'Fox Maulder'     
      },
      {
        image: 'data:image/jpeg;base64,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',
        name: 'Cigarette-smoking Man'
      },
      {
        image: 'https://upload.wikimedia.org/wikipedia/en/d/da/Alex_Krycek.jpg',
        name: 'that one punk-ass'
      }

    ];

    const wrapper = shallow(<CharacterList characters={characters}/>);
    expect(wrapper).toMatchSnapshot();
    
    
    
    
    
  });
});
