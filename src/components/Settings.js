import { useState } from 'react';
import styled from 'styled-components';
import ReactToPrint from 'react-to-print';
import SettingSection from './SettingSection';
import { ChromePicker } from 'react-color';
import FontPicker from './FontPicker';
import Areas from './Areas';

const SettingsContainer = styled.div`
  position: fixed;
  width: 25rem;
  height: 100%;
  background-color: #282828;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 1;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

const PrintButton = styled.div`
  position: relative;
  width: 80%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  border-radius: 1rem;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`;

const Color = styled.div`
  position: relative;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ababab;
  background-color: #282828;
  border-radius: 1rem;
  padding: 0.5rem 0 0.5rem 0;
  cursor: pointer;
  filter: brightness(1.2);
`;

const ColorBall = styled.span`
  position: relative;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-top: 0.1rem;
`;

const Settings = ({ printRef, settings, setSettings }) => {
  const [isPickerOpen, setIsPickerOpen] = useState(-1);
  const printTrigger = () => {
    return (
      <PrintButton style={{ backgroundColor: settings.colors.style }}>
        Print / Save PDF
      </PrintButton>
    );
  };

  const handleClick = (loc) => {
    setIsPickerOpen(loc);
  };

  const handleClose = () => {
    setIsPickerOpen(-1);
  };

  const handleChange = (color) => {
    setSettings((prev) => {
      const colors = { ...prev.colors };
      colors[colsStr[isPickerOpen]] = color.hex;
      return { ...prev, colors: colors };
    });
  };

  const cols = [
    settings.colors.paper,
    settings.colors.text,
    settings.colors.style,
  ];

  const colsStr = ['paper', 'text', 'style'];

  const popover = {
    position: 'absolute',
    zIndex: '3',
    top: '90%',
    left: '0',
  };
  const cover = {
    position: 'fixed',
    top: '0',
    zIndex: '2',
    left: '0',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  };

  return (
    <SettingsContainer>
      <SettingSection title="Color">
        <Color onClick={() => handleClick(0)}>
          Paper Color
          <ColorBall style={{ backgroundColor: settings.colors.paper }} />
        </Color>
        <Color onClick={() => handleClick(1)}>
          Text Color
          <ColorBall style={{ backgroundColor: settings.colors.text }} />
        </Color>
        <Color onClick={() => handleClick(2)}>
          Style Color
          <ColorBall style={{ backgroundColor: settings.colors.style }} />
        </Color>
        {isPickerOpen > -1 ? (
          <>
            <div style={cover} onClick={handleClose} />
            <div style={popover}>
              <ChromePicker
                color={cols[isPickerOpen]}
                onChange={handleChange}
              />
            </div>
          </>
        ) : null}
      </SettingSection>
      <SettingSection title="Font">
        <FontPicker settings={settings} setSettings={setSettings} />
      </SettingSection>
      <SettingSection title="Areas">
        <Areas settings={settings} setSettings={setSettings} />
      </SettingSection>

      <ReactToPrint content={() => printRef.current} trigger={printTrigger} />
    </SettingsContainer>
  );
};

export default Settings;
