import { createContext } from 'react';

const Context = createContext({
  theme: 'light',
  measure: 'metric',
  changeContext: () => {},
});

export default Context;
