import React from 'react';
import { ScreenDiv, OneSit, SitsDiv, ScreenInHall, LeftRows, RightRows } from './ScreenStyles';

const Screen = () => {
  const renderSits = () => {
    const sits = [];
    for (let i = 0; i < 60; i++) {
      sits.push(`${i}`);
    }
    return sits.map(sit => (
      <OneSit></OneSit>
    ));
  }
  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < 6; i++) {
      rows.push(String.fromCharCode(65 + i));
    }
    return rows.map(row => (
      <p>{row}</p>
    ));
  }
  renderRows();
  return (
    <ScreenDiv>
      <ScreenInHall>
        <p>Ekran</p>
      </ScreenInHall>
      <LeftRows>{renderRows()}</LeftRows>
      <SitsDiv> {renderSits()}</SitsDiv>
      <RightRows>{renderRows()}</RightRows>
    </ScreenDiv>
  );
};

export default Screen;
