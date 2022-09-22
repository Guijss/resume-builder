import { useState, useRef } from 'react';
import styled from 'styled-components';
import Resume from './Resume';
import Settings from './Settings';

const PageContainer = styled.main`
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Page = () => {
  const printRef = useRef(null);

  const [settings, setSettings] = useState({
    colors: { paper: '#ffffff', text: '#000000', style: '#ffa500' },
    font: ['Roboto', `'Roboto', sans-serif`],
    fontSize: 1,
    areas: [
      ['Name', 1, false], //[area, state, editable]
      ['Role', 1, false],
      ['Summary', 1, false],
      ['Address', 1, true],
      ['E-mail', 1, false],
      ['Phone', -1, true],
      ['Website', -1, true],
      ['Linkedin', -1, true],
      ['Github', -1, true],
      ['Experience', 1, true],
      ['Education', 1, true],
      ['Skills', -1, true],
    ],
  });

  return (
    <PageContainer>
      <Settings
        printRef={printRef}
        settings={settings}
        setSettings={setSettings}
      />
      <Resume printRef={printRef} settings={settings} />
    </PageContainer>
  );
};

export default Page;
