import { useEffect, useState } from 'react';

import villagersData from '../data/Villagers.json';

export default function useVillagers() {
  const [villagers, setVillagers] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setVillagers(villagersData);
    } catch (err) {
      console.error('json 로딩 실패 ', err);
    } finally {
      setLoading(false);
    }
  }, []);
  return { villagers, loading };
}
