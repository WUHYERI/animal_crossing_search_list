// main App
import { todayKey } from './demo/utils.js';

export default function App() {
  const today = todayKey();

  return (
    <main>
      <h1>검색 리스트 구현!</h1>
      <p>{today}</p>
    </main>
  );
}
