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
`;

const Paper = styled.div`
  position: relative;
  width: 210mm;
  height: 297mm;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerPaper = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UpperRow = styled.div`
  position: relative;
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid black;
`;

const Columns = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftColumn = styled.div`
  position: relative;
  width: 34%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid black;
`;

const RightColumn = styled.div`
  position: relative;
  width: 66%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid black;
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
        <InnerPaper>
          <UpperRow>
            <TextBox
              styles={{
                color: settings.colors.style,
                size: settings.fontSize * 5,
                multiLine: false,
              }}
              placeholder="Your Name"
            />
            <TextBox
              styles={{
                color: settings.colors.text,
                size: settings.fontSize * 2,
                multiLine: false,
              }}
              placeholder="Your role"
            />
          </UpperRow>
          <Columns>
            <LeftColumn></LeftColumn>
            <RightColumn></RightColumn>
          </Columns>
        </InnerPaper>
      </Paper>
    </ResumeContainer>
  );
};

export default Resume;
