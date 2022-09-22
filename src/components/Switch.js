import styled from 'styled-components';

const SwitchContainer = styled.div`
  position: relative;
  width: 2.5rem;
  height: 1.5rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.3rem 0.5rem 0 0;
  cursor: pointer;
  transition: all ease 0.2s;
`;

const Knob = styled.div`
  position: absolute;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  translate: -40%;
  transition: all ease 0.2s;
`;

const Switch = ({ settings, setSettings, index, isEditable }) => {
  const handleClick = (i) => {
    if (!isEditable) {
      return;
    }
    setSettings((prev) => {
      const tempAreas = [...prev.areas];
      tempAreas[i] = [...tempAreas[i]];
      tempAreas[i][1] *= -1;
      return { ...prev, areas: tempAreas };
    });
  };

  return (
    <SwitchContainer
      style={{
        border: `4px solid ${
          settings.areas[index][1] === 1 ? settings.colors.style : '#575757'
        }`,
      }}
      onClick={() => handleClick(index)}
    >
      <Knob
        style={{
          backgroundColor:
            settings.areas[index][1] === 1 ? settings.colors.style : '#575757',
          translate: `${settings.areas[index][1] * 40}%`,
        }}
      />
    </SwitchContainer>
  );
};

export default Switch;
