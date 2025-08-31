// main App
import { useState } from 'react';

import SearchForm from './components/SearchForm.jsx';
import VillagerCard from './components/VillagerCard.jsx';
import useVillagers from './components/useVillagers.js';

export default function App() {
  const { villagers, loading, error } = useVillagers();
  const [searchText, setSearchText] = useState('');
  const [maxCardCount, setMaxCardCount] = useState(5);

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
    <main className="flex flex-col items-center ">
      <SearchForm searchText={searchText} setSearchText={setSearchText} />

      <section className="flex flex-col items-center gap-4">
        <ul className="cards flex flex-col gap-8">
          {filteredVillagers.slice(0, maxCardCount).map((v) => (
            <li key={v.name}>
              <VillagerCard
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
            </li>
          ))}
        </ul>
        {maxCardCount < filteredVillagers.length && (
          <button
            type="button"
            onClick={() => setMaxCardCount((prev) => prev + 5)}
            className="border-[1px] border-black rounded-xl px-3 py-1 "
          >
            더보기
          </button>
        )}
      </section>
    </main>
  );
}
