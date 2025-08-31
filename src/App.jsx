// main App
import useVillagers from './components/useVillagers.js';
import VillagerCard from './components/villager_card.jsx';

export default function App() {
  const { villagers, loading, error } = useVillagers();

  if (loading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생: {error.message}</p>;

  return (
    <section>
      <div className="cards flex flex-col gap-8">
        {villagers.map((v) => (
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
  );
}
