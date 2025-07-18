'use client';

import * as React from 'react';

function Todos({promisedTodos}) {
  const todos = React.use(promisedTodos);
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

export function ClientUse({promisedTodos}) {
  return (
    <React.Suspense fallback={<div>Loading more todos...</div>}>
      <p>More todos</p>
      <Todos promisedTodos={promisedTodos} />
    </React.Suspense>
  );
}
