import React from 'react';

export const Rows = () => {
  const rows = [];
  for (let i = 0; i < 6; i++) {
    rows.push(String.fromCharCode(65 + i));
  }
  return rows.map(row => <p key={row}> {row} </p>);
};
