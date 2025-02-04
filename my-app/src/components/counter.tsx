import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  addHomePoints,
  addAwayPoints,
  resetHomeScore,
  resetAwayScore,
  startTimer,
  stopTimer,
  resetTimer,
  decrementTime,
} from "../features/scoreboardSlice";

const Scoreboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { homeScore, awayScore, time, isRunning } = useAppSelector(
    (state) => state.scoreboardSlice,
  );

  const [customTime, setCustomTime] = useState(10); // 기본 10분 설정

  // 타이머 기능 (1초마다 감소)
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (isRunning) {
      timer = setInterval(() => {
        dispatch(decrementTime());
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, dispatch]);

  // 타이머를 MM:SS 형식으로 변환
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <Container>
      <Title>🏀 점수판</Title>

      {/* 점수 표시 */}
      <ScoreDisplay>
        <Team>
          <TeamName>🏠 Home</TeamName>
          <TeamScore>{homeScore}</TeamScore>
        </Team>
        <VsText>vs</VsText>
        <Team>
          <TeamName>🛫 Away</TeamName>
          <TeamScore>{awayScore}</TeamScore>
        </Team>
      </ScoreDisplay>

      {/* 각 팀별 점수 버튼 */}
      <ButtonGroup>
        <Column>
          <ScoreButton onClick={() => dispatch(addHomePoints(1))}>+1점</ScoreButton>
          <ScoreButton onClick={() => dispatch(addHomePoints(2))}>+2점</ScoreButton>
          <ScoreButton onClick={() => dispatch(addHomePoints(3))}>+3점</ScoreButton>
          <ResetButton onClick={() => dispatch(resetHomeScore())}>🏠 점수 리셋</ResetButton>
        </Column>
        <Column>
          <ScoreButton onClick={() => dispatch(addAwayPoints(1))}>+1점</ScoreButton>
          <ScoreButton onClick={() => dispatch(addAwayPoints(2))}>+2점</ScoreButton>
          <ScoreButton onClick={() => dispatch(addAwayPoints(3))}>+3점</ScoreButton>
          <ResetButton onClick={() => dispatch(resetAwayScore())}>🛫 점수 리셋</ResetButton>
        </Column>
      </ButtonGroup>

      {/* 타이머 표시 */}
      <TimerDisplay>⏳ {formatTime(time)}</TimerDisplay>

      {/* 타이머 컨트롤 */}
      <TimerControls>
        {isRunning ? (
          <StopButton onClick={() => dispatch(stopTimer())}>⏸ 정지</StopButton>
        ) : (
          <StartButton onClick={() => dispatch(startTimer())}>▶️ 시작</StartButton>
        )}
        <ResetButton onClick={() => dispatch(resetTimer(customTime * 60))}>🔄 리셋</ResetButton>
      </TimerControls>

      {/* 타이머 설정 */}
      <TimerSettings>
        <label>⏱ 시간 설정 (분):</label>
        <TimeInput
          type="number"
          value={customTime}
          onChange={(e) => setCustomTime(Number(e.target.value))}
          min={1}
          max={60}
        />
        <SetTimeButton onClick={() => dispatch(resetTimer(customTime * 60))}>
          ⏳ 시간 설정
        </SetTimeButton>
      </TimerSettings>
    </Container>
  );
};

export default Scoreboard;

// 🌟 스타일 추가
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f8f9fa;
  color: #333;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const ScoreDisplay = styled.div`
  display: flex;
  align-items: center;
  font-size: 3rem;
  font-weight: bold;
`;

const Team = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TeamName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const TeamScore = styled.div`
  font-size: 3rem;
`;

const VsText = styled.div`
  font-size: 2rem;
  margin: 0 1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TimerDisplay = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1.5rem;
`;

const TimerControls = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const TimerSettings = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const TimeInput = styled.input`
  padding: 0.3rem;
  width: 50px;
  text-align: center;
  font-size: 1rem;
`;

const ScoreButton = styled.button`
  padding: 0.8rem 1.2rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const ResetButton = styled(ScoreButton)`
  background: #ff9800;

  &:hover {
    background: #e68900;
  }
`;

const StartButton = styled(ScoreButton)`
  background: #28a745;

  &:hover {
    background: #218838;
  }
`;

const StopButton = styled(ScoreButton)`
  background: #dc3545;

  &:hover {
    background: #c82333;
  }
`;

const SetTimeButton = styled(ScoreButton)`
  background: #17a2b8;

  &:hover {
    background: #138496;
  }
`;
