import React from 'react';
import {render} from '@testing-library/react-native';
import QuickPay from 'src/screens/Home/components/QuickPay';

const mockData = {
  contacts: [
    {
      id: 1,
      firstname: 'Santiago',
      lastname: 'Bayazbakian',
      email: 'santiago.bayazbakian@icloud.com',
      phone: '111',
      birthday: '1985-03-01',
      gender: 'm',
      address: {
        id: 1,
        street: '',
        streetName: '',
        buildingNumber: '',
        city: '',
        zipcode: '',
        country: '',
        county_code: '',
        latitude: 0,
        longitude: 0,
      },
      website: 'santiago.bayazbakian.dev',
      image: '',
    },
  ],
};

describe('Quick Pay', (): void => {
  it('renders as expected', (): void => {
    const component = render(<QuickPay {...mockData} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
