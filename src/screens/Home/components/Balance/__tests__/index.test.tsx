import React from 'react';
import {render} from '@testing-library/react-native';
import Balance from 'src/screens/Home/components/Balance';

const mockData = {
  amounts: {
    baxe_cash: '0',
    euro: '0',
  },
};

describe('Balance', (): void => {
  it('renders as expected', (): void => {
    const component = render(<Balance {...mockData} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
