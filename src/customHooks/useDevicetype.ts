import { useState, useEffect } from 'react';

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState('desktop');

  const updateDeviceType = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setDeviceType('desktop');
    } else if (width >= 464) {
      setDeviceType('tablet');
    } else {
      setDeviceType('mobile');
    }
  };

  useEffect(() => {
    updateDeviceType();
    window.addEventListener('resize', updateDeviceType);

    return () => {
      window.removeEventListener('resize', updateDeviceType);
    };
  }, []);

  return deviceType;
};

export default useDeviceType;
