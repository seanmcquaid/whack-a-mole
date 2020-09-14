import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Mole from '../../sharedComponents/app/Game/Mole';
import { hitMole } from '../../store/game/actions';
import { molesLeftSelector } from '../../store/game/selectors';

const GameBoard: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const [moles, setMoles] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
  });

  const initialMoles = useMemo(
    () => ({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
    }),
    []
  );

  useEffect(() => {
    makeMoleVisible();
  }, []);

  const makeMoleVisible = () => {
    const moleToMakeVisible = Math.ceil(Math.random() * 9);
    setMoles((state) => ({
      ...state,
      [moleToMakeVisible]: true,
    }));
  };

  console.log(moles);

  const handleVisibleMoleOnClick = useCallback(() => {
    dispatch(hitMole());
    setMoles(initialMoles);
    makeMoleVisible();
  }, [dispatch, initialMoles]);

  return (
    <MolesList>
      {Object.entries(moles).map(([key, value]) => (
        <Mole key={key} isVisible={value} onClick={handleVisibleMoleOnClick} />
      ))}
    </MolesList>
  );
});

const MolesList = styled.ol``;

export default GameBoard;
