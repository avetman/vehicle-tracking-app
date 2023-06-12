export interface IRegion {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}
interface ILocation {
  latitude: number;
  longitude: number;
}
export interface IVehicle {
  id: number;
  name: string;
  driver_name: string;
  category: string;
  location: ILocation;
}
