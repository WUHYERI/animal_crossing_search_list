export default function TodoItem({ item, onToggle, onDelete }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={item.done}
          onChange={() => onToggle(item.id)}
        />
        <span>{item.text}</span>
      </label>
      <button onClick={() => onDelete(item.id)}>삭제!</button>
    </li>
  );
}
