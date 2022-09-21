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
    section: {},
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
