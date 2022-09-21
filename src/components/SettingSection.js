import styled from 'styled-components';

const SectionContainer = styled.div`
  position: relative;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #a1a1a1;
  padding: 1rem 0 1rem 0;
`;

const Title = styled.span`
  position: absolute;
  top: -1rem;
  background-color: #282828;
  color: white;
  padding: 0 1rem 0 1rem;
`;

const SettingSection = ({ title, children }) => {
  return (
    <SectionContainer>
      <Title>{title}</Title>
      {children}
    </SectionContainer>
  );
};

export default SettingSection;
