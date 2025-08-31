// main App
import { useState } from 'react';

import SearchForm from './components/SearchForm.jsx';
import useVillagers from './components/useVillagers.js';
import VillagerCard from './components/villager_card.jsx';

export default function App() {
  const { villagers, loading, error } = useVillagers();
  const [searchText, setSearchText] = useState('');

  if (loading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생: {error.message}</p>;

  const filteredVillagers = villagers.filter((v) => {
    const search = searchText.toLowerCase();
    return (
      v.name.toLowerCase().includes(search) ||
      v.gender.toLowerCase().includes(search) ||
      v.personality.toLowerCase().includes(search) ||
      v.hobby.toLowerCase().includes(search) ||
      v.birthday.toLowerCase().includes(search) ||
      v.catchphrase.toLowerCase().includes(search) ||
      v.favoriteSong.toLowerCase().includes(search) ||
      v.favoriteSaying.toLowerCase().includes(search) ||
      v.species.toLowerCase().includes(search)
    );
  });

  return (
    <>
      <SearchForm searchText={searchText} setSearchText={setSearchText} />

      <section>
        <div className="cards flex flex-col gap-8">
          {filteredVillagers.map((v) => (
            <VillagerCard
              key={v.name}
              name={v.name}
              gender={v.gender}
              personality={v.personality}
              hobby={v.hobby}
              birthday={v.birthday}
              catchphrase={v.catchphrase}
              favSong={v.favoriteSong}
              favQuote={v.favoriteSaying}
              species={v.species}
              photo={v.photoImage}
            />
          ))}
        </div>
      </section>
    </>
  );
}
