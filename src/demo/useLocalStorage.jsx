// 상태를 저장하고 값, setter 반환.
// 추후 로컬스토리지 연동하기!
import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(
    typeof initialValue === 'function' ? initialValue() : initialValue,
  );
  return [value, setValue];
}
