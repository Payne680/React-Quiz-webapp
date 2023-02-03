import { useState } from 'react';

function useIncrement(defaultValue = null) {
  const [state, setState] = useState(defaultValue);

  return [state, setState];
}

export default useIncrement;
