import styled from 'styled-components';

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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
        fugit suscipit sequi beatae nisi soluta quibusdam quam voluptatum
        distinctio, earum quaerat ab voluptates inventore architecto ex officia
        reprehenderit. Asperiores eligendi voluptatem repellendus laboriosam
        praesentium laborum molestias voluptatibus in? Soluta optio consequatur
        voluptates nemo? Omnis rem veniam ut. Optio, dolorem! Quod possimus at
        eaque accusantium harum nemo deleniti alias, molestias non ea omnis
        quibusdam esse nobis recusandae aliquid dignissimos voluptates
        voluptatem. A quisquam autem tempora laudantium voluptatem, id eveniet
        corrupti cumque earum architecto, labore numquam repellat porro nesciunt
        vitae alias iusto expedita. Itaque quae perferendis culpa quod fugit
        asperiores doloribus earum laudantium? Sequi veritatis officiis ducimus
        sit quaerat fugiat omnis. Sint fugiat voluptatum quo quas. Expedita,
        ullam alias maiores et, corporis, voluptas temporibus debitis quia
        deleniti cumque laborum harum libero officiis. Reprehenderit, aliquid
        maiores beatae totam dolore dignissimos ipsum maxime laboriosam libero
        enim officia. Nobis voluptas expedita eos, repudiandae accusamus odit
        corporis quae ipsa quis illum dolor soluta asperiores velit cum totam
        eveniet vel vero? Ab rem fugiat esse perspiciatis deleniti natus nam
        doloremque odio amet vero velit blanditiis accusantium, nihil sed
        officia cupiditate similique ratione, hic voluptates. At tempore
        explicabo iure possimus maxime inventore! Nobis rem tempora ullam illo
        numquam quisquam reiciendis obcaecati voluptatibus, totam recusandae
        porro odio aut eum? Qui recusandae rem non praesentium quas quos
        asperiores. Cupiditate dolorum, et voluptatum iure hic distinctio
        nesciunt sit quo neque dicta perferendis commodi quos itaque aliquid
        perspiciatis, a culpa exercitationem autem officiis. Asperiores illo
        libero fugit voluptate quod. Blanditiis, in. Perferendis ipsum
        consequatur quidem natus aperiam, pariatur voluptates accusantium iusto
        asperiores quis odio, molestiae blanditiis fugit libero! Placeat
        pariatur laboriosam facere doloribus sequi alias reprehenderit ratione
        suscipit et distinctio? Nulla blanditiis repellendus, nam modi molestiae
        rem. Doloremque voluptates vitae saepe, aut accusantium, dolorum,
        molestias eos laboriosam necessitatibus neque in quia ipsum iure non
        adipisci sit ullam ad error ex. Soluta eligendi harum labore cupiditate.
        Minima voluptatibus vero quis ad. Dignissimos, voluptas error molestiae
        omnis minima dolores recusandae vitae ducimus incidunt eum commodi velit
        odit et accusamus quibusdam ad? Hic, est nobis! Nihil, impedit
        assumenda. Voluptates velit maiores explicabo voluptate beatae eligendi
        dolorem commodi rerum repellat repellendus maxime, consequatur nostrum
        distinctio iure animi aliquid totam optio in, qui quidem? Dolorem
        aliquam, optio dolore expedita quia quaerat ab exercitationem
        repudiandae nihil ipsa, possimus odio animi est aut dolor placeat
        obcaecati delectus repellendus, unde sapiente reiciendis alias! Atque
        neque sint obcaecati aliquid error repellendus cum laudantium, ducimus
        sit molestias! Harum neque ducimus soluta iure nostrum? Saepe quo rerum
        vero, soluta voluptate praesentium libero maxime amet! Nobis natus
        voluptatem expedita a repellat inventore voluptatum nam possimus sequi
        molestias sapiente explicabo temporibus autem, aut fugit nostrum dicta
        nulla commodi culpa quas facere aliquid, soluta, non vel! Suscipit
        exercitationem laboriosam dolor assumenda, fugiat maxime! Recusandae
        tempora animi nobis suscipit hic, beatae aliquid! Similique impedit
        tempora sed, placeat maiores autem veniam at sint deleniti. Illum cumque
        beatae reprehenderit assumenda, eos recusandae aliquam ipsa ad minima
        sapiente magni cum dignissimos odio inventore accusantium vero expedita
        alias asperiores. Sit, quibusdam.
      </Paper>
    </ResumeContainer>
  );
};

export default Resume;
