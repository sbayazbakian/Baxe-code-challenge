export interface IFakerApiPayload {
  status: string;
  code: number;
  total: number;
  data: IContact[];
}
export interface IContact {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  birthday: string;
  gender: string;
  address: IAddress;
  website: string;
  image: string;
}

export interface IAddress {
  id: number;
  street: string;
  streetName: string;
  buildingNumber: string;
  city: string;
  zipcode: string;
  country: string;
  county_code: string;
  latitude: number;
  longitude: number;
}
