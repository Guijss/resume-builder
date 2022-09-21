import { useState } from 'react';
import styled from 'styled-components';
import ReactToPrint from 'react-to-print';
import SettingSection from './SettingSection';
import { ChromePicker } from 'react-color';
import FontPicker from './FontPicker';

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
`;

const PrintButton = styled.div`
  position: relative;
  width: 80%;
  height: 5rem;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 1rem;
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
    return <PrintButton>Print</PrintButton>;
  };

  const handleClick = (loc) => {
    setIsPickerOpen(loc);
  };

  const handleClose = () => {
    setIsPickerOpen(-1);
  };

  const handleChange = (color) => {
    setSettings((prev) => {
      const colors = prev.colors;
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
    zIndex: '2',
    top: '90%',
    left: '0',
  };
  const cover = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
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
          <div style={popover}>
            <div style={cover} onClick={handleClose} />
            <ChromePicker color={cols[isPickerOpen]} onChange={handleChange} />
          </div>
        ) : null}
      </SettingSection>
      <SettingSection title="Font">
        <FontPicker settings={settings} setSettings={setSettings} />
      </SettingSection>
      <SettingSection title="Sections">
        <PrintButton />
        <PrintButton />
        <PrintButton />
        <PrintButton />
      </SettingSection>
      <ReactToPrint content={() => printRef.current} trigger={printTrigger} />
    </SettingsContainer>
  );
};

export default Settings;
