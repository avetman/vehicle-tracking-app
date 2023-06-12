import {useEffect, useState, useMemo} from 'react';
import vehiclesData from '../services/vehicles.json';
const useVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const data = vehiclesData.vehicles;
        setVehicles(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  console.log(vehicles);
  return {vehicles, loading, error};
};

export default useVehicles;
