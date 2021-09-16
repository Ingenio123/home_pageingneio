import styled from "styled-components";

export default function HeaderMusic() {
  return (
    <Header className="">
      <div className="container absolute top-0 left-5">
        <ContentGlassMorphis></ContentGlassMorphis>
      </div>
      {/* <ContainerMorphism></ContainerMorphism> */}
    </Header>
  );
}
const Header = styled.header`
  width: 100%;
  height: 98vh;
  position: relative;

  background: linear-gradient(
    121deg,
    rgba(255, 106, 106, 1) 0%,
    rgba(29, 79, 253, 1) 56%,
    rgba(252, 69, 251, 1) 100%
  );
`;

const ContentGlassMorphis = styled.section`
  width: 30%;
  height: 400px;
  backdrop-filter: blur(25px) saturate(200%);
  -webkit-backdrop-filter: blur(25px) saturate(200%);
  background-color: rgba(255, 255, 255, 0.3);

  border-radius: 4px;
`;
