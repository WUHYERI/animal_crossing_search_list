import TodoItem from './TodoItem';

export default function TodoList({ items, onToggle, onDelete }) {
  if (items.length === 0) {
    return (
      <div>
        <p>템플릿을 이렇게 이용해 보세요 ! </p>
        <ol>
          <li>`bun create`로 프로젝트를 시작</li>
          <li>`bun dev` 실행 후 브라우저에서 확인</li>
          <li>`src` 안의 코드를 수정해서 나만의 기능을 추가</li>
          <li>완성되면 `bun build`로 결과물을 확인</li>
          <hr />
          <span>tailwind 사용시</span> <br />
          <span>src/styles/main.css 를 import</span> <br />
          <span>혹은 stylesheet 로 추가해주세요</span>
        </ol>
      </div>
    );
  } else
    return (
      <ul>
        {items.map((it) => (
          <TodoItem
            key={it.key}
            item={it}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    );
}
