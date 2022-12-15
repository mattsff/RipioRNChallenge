import React from 'react';

// create context with no upfront defaultValue
// without having to do undefined check all the time
// https://github.com/typescript-cheatsheets/react-typescript-cheatsheet/blob/master/README.md#context
export function createCtx<A>(name: string) {
  const ctx = React.createContext<A | undefined>(undefined);
  ctx.displayName = name;
  function useCtx() {
    const c = React.useContext(ctx);
    if (!c) {
      throw new Error('useCtx must be inside a Provider with a value');
    }
    return c;
  }
  return [useCtx, ctx.Provider, ctx] as const; // make TypeScript infer a tuple, not an array of union types
}
