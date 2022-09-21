import { useRef } from 'react';
import './main.css';
import ReactToPrint from 'react-to-print';

function App() {
  const pageRef = useRef(null);

  const pageStyle = `
  @page {
    size: A4 portrait;
  }
`;

  const printTrigger = () => {
    return <button className="button">print</button>;
  };
  return (
    <div>
      <ReactToPrint content={() => pageRef.current} trigger={printTrigger} />
      <div ref={pageRef} className="page">
        <style>{pageStyle}</style>
        <div className="inner"></div>
      </div>
    </div>
  );
}

export default App;
