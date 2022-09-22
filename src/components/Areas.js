import styled from 'styled-components';
import Switch from './Switch';

const AreaContainer = styled.div`
  position: relative;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Area = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Areas = ({ settings, setSettings }) => {
  return (
    <>
      <AreaContainer>
        {settings.areas.map((e, i) => (
          <Area style={{ opacity: e[2] ? 1 : 0.2 }}>
            <Switch
              key={i}
              settings={settings}
              setSettings={setSettings}
              index={i}
              isEditable={e[2]}
            />
            {e[0]}
          </Area>
        ))}
      </AreaContainer>
    </>
  );
};

export default Areas;
