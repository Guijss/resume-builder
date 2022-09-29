import { useState } from 'react';
import styled from 'styled-components';
import { FaFont } from 'react-icons/fa';

const FontDisplay = styled.div`
  position: relative;
  width: 50%;
  height: 2rem;
  border: 1px solid white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
`;

const Arrow = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-top: 5px solid white;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  right: 10%;
`;

const FontSelector = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  border: 1px solid white;
`;

const FontSelectorUnit = styled.div`
  position: relative;
  width: 100%;
  height: 1.3rem;
  background-color: ${(props) =>
    props.isHighlight && props.isFont ? '#575757' : '#151515'};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #575757;
  }
`;

const FontSize = styled.div`
  position: relative;
  width: 30%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FontSizeUnit = styled.div`
  position: relative;
  width: 33%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  transition: all ease-in-out 0.3s;
  border: 3px solid transparent;
  cursor: pointer;
`;

const FontPicker = ({ settings, setSettings }) => {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [isHighlight, setIsHighlight] = useState(true);
  const fonts = [
    ['Arimo', `'Arimo', sans-serif`],
    ['Asap', `'Asap', sans-serif`],
    ['Barlow', `'Barlow', sans-serif`],
    ['Hind Madurai', `'Hind Madurai', sans-serif`],
    ['Lato', `'Lato', sans-serif`],
    ['Nunito', `'Nunito', sans-serif`],
    ['Open Sans', `'Open Sans', sans-serif`],
    ['Oxygen', `'Oxygen', sans-serif`],
    ['Questrial', `'Questrial', sans-serif`],
    ['Quicksand', `'Quicksand', sans-serif`],
    ['Roboto', `'Roboto', sans-serif`],
    ['Rubik', `'Rubik', sans-serif`],
    ['Zilla Slab', `'Zilla Slab', serif`],
  ];

  const handleClick = (font) => {
    setSettings((prev) => {
      return { ...prev, font: font };
    });
    setIsSelectorOpen(false);
    setIsHighlight(true);
  };

  const setFontSize = (size) => {
    setSettings((prev) => {
      return { ...prev, fontSize: size };
    });
  };

  const handleClose = () => {
    setIsSelectorOpen(false);
    setIsHighlight(true);
  };

  const handleMouseEnter = () => {
    setIsHighlight(false);
  };

  const popover = {
    position: 'absolute',
    zIndex: '2',
    width: '50%',
    height: '16.9rem', //13 fonts * 1.3rem each.
    top: '71%',
    left: '5%',
  };
  const cover = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
  };

  return (
    <>
      <FontDisplay
        style={{ fontFamily: settings.font[1] }}
        onClick={() => setIsSelectorOpen(true)}
      >
        <span style={{ marginLeft: '1rem' }}>{settings.font[0]}</span>
        <Arrow />
      </FontDisplay>
      {isSelectorOpen && (
        <div style={popover}>
          <div style={cover} onClick={handleClose} />
          <FontSelector onMouseEnter={handleMouseEnter}>
            {fonts.map((e, i) => (
              <FontSelectorUnit
                key={i}
                isHighlight={isHighlight}
                isFont={e[0] === settings.font[0]}
                style={{
                  fontFamily: e[1],
                  // backgroundColor:
                  //   e[0] === settings.font[0] && isHighlight
                  //     ? '#575757'
                  //     : '#151515',
                }}
                onClick={() => handleClick(e)}
              >
                {e[0]}
              </FontSelectorUnit>
            ))}
          </FontSelector>
        </div>
      )}
      <FontSize>
        <FontSizeUnit
          style={{
            color:
              settings.fontSize === 0.8 ? settings.colors.style : '#575757',
          }}
          onClick={() => setFontSize(0.8)}
        >
          <FaFont size={16} />
        </FontSizeUnit>
        <FontSizeUnit
          style={{
            color: settings.fontSize === 1 ? settings.colors.style : '#575757',
          }}
          onClick={() => setFontSize(1)}
        >
          <FaFont size={26} />
        </FontSizeUnit>
        <FontSizeUnit
          style={{
            color:
              settings.fontSize === 1.2 ? settings.colors.style : '#575757',
          }}
          onClick={() => setFontSize(1.2)}
        >
          <FaFont size={36} />
        </FontSizeUnit>
      </FontSize>
    </>
  );
};

export default FontPicker;
