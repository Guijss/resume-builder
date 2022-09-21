import { useState } from 'react';
import styled from 'styled-components';
import { ImFont } from 'react-icons/im';

const FontDisplay = styled.div`
  position: relative;
  width: 30%;
  height: 2rem;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const FontSelector = styled.div`
  position: absolute;
  top: 76%;
  width: 50%;
  height: 10rem;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 10;
  /* Firefox */
  & {
    scrollbar-width: none;
    scrollbar-color: #000000 #757575;
  }

  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-track {
    background: #757575;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000000;
    border-radius: 10px;
    border: 0px solid #ffffff;
  }
`;

const FontSelectorUnit = styled.div`
  position: relative;
  width: 100%;
  height: 2rem;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;
`;

const FontPicker = ({ settings, setSettings }) => {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const fonts = [
    ['Arimo', `'Arimo', sans-serif`],
    ['Asap', `'Asap', sans-serif`],
    ['Barlow', `'Barlow', sans-serif`],
    ['Catamaran', `'Catamaran', sans-serif`],
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
  };

  const setFontSize = (size) => {
    setSettings((prev) => {
      return { ...prev, fontSize: size };
    });
  };

  return (
    <>
      <FontDisplay
        style={{ fontFamily: settings.font[1] }}
        onClick={() => setIsSelectorOpen(true)}
      >
        {settings.font[0]}
      </FontDisplay>
      {isSelectorOpen && (
        <FontSelector>
          {fonts.map((e) => (
            <FontSelectorUnit
              style={{
                fontFamily: e[1],
                backgroundColor:
                  e[0] === settings.font[0] ? '#575757' : '#151515',
              }}
              onClick={() => handleClick(e)}
            >
              {e[0]}
            </FontSelectorUnit>
          ))}
        </FontSelector>
      )}
      <FontSize>
        <FontSizeUnit
          style={{
            color:
              settings.fontSize === 0.8 ? settings.colors.style : '#575757',
          }}
          onClick={() => setFontSize(0.8)}
        >
          <ImFont size={16} />
        </FontSizeUnit>
        <FontSizeUnit
          style={{
            color: settings.fontSize === 1 ? settings.colors.style : '#575757',
          }}
          onClick={() => setFontSize(1)}
        >
          <ImFont size={26} />
        </FontSizeUnit>
        <FontSizeUnit
          style={{
            color:
              settings.fontSize === 1.2 ? settings.colors.style : '#575757',
          }}
          onClick={() => setFontSize(1.2)}
        >
          <ImFont size={36} />
        </FontSizeUnit>
      </FontSize>
    </>
  );
};

export default FontPicker;
