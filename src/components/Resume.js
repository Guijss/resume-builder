import styled from 'styled-components';
import TextBox from './TextBox';

const ResumeContainer = styled.div`
  position: relative;
  width: calc(100vw - 25rem);
  height: calc(297mm + 10rem);
  background-color: #354550;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    font-family: inherit;
  }
`;

const Paper = styled.div`
  position: relative;
  width: 210mm;
  height: 297mm;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Resume = ({ printRef, settings }) => {
  const pageStyle = `
  @page {
    size: A4 portrait;
  }
`;
  return (
    <ResumeContainer>
      <Paper
        ref={printRef}
        style={{
          backgroundColor: settings.colors.paper,
          color: settings.colors.text,
          fontFamily: settings.font,
          fontSize: `${settings.fontSize}rem`,
        }}
      >
        <style>{pageStyle}</style>
        <TextBox color={settings.colors.style} pHolder="Your Name" />
      </Paper>
    </ResumeContainer>
  );
};

export default Resume;
