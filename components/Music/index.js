import styled from "styled-components";
import {
  IoMusicalNotesOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";

import HeaderMusics from "./HeaderMusic";
export default function Index() {
  return (
    <div>
      <HeaderMusics />
      <HeaderMusic>
        <section className="container flex flex-col flex-wrap gap-8 py-4 sm:flex-row">
          <ContentImages className="relative w-full md:w-1/5">
            <img
              className="rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgH9QJreKFyQUPieWE5k8j4L92ckXUwDR9w&usqp=CAU"
              alt="Image Music"
            />
            <DatosImg>
              <ContentText>
                <ConteSubText>
                  <IconMusic />
                  <ContentFlexCol>
                    <Author>Arcangel </Author>
                    <TextMusic>Lorem, ipsum dolor.</TextMusic>
                  </ContentFlexCol>
                </ConteSubText>

                <IconSmallSee />
              </ContentText>
            </DatosImg>
          </ContentImages>
          <ContentImages className="relative w-full md:w-1/5">
            <img
              className="rounded-lg"
              src="https://s.yimg.com/ny/api/res/1.2/n8EkdF7YAS32w1ho7s3mXg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY0MA--/https://s.yimg.com/uu/api/res/1.2/S4Ow8xpedcgFGrtp1HeJkw--~B/aD02NTA7dz02NTA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/es/bangshowbiz/6b67bf04bc1adb4e165964b7735ec7b6"
              alt="Image Music"
            />
            <DatosImg>
              <ContentText>
                <ConteSubText>
                  <IconMusic />
                  <ContentFlexCol>
                    <Author>Anuel Aa</Author>
                    <TextMusic>Lorem, ipsum dolor.</TextMusic>
                  </ContentFlexCol>
                </ConteSubText>

                <IconSmallSee />
              </ContentText>
            </DatosImg>
          </ContentImages>
          <ContentImages className="relative w-full md:w-1/5">
            <img
              className="rounded-lg"
              src="https://cloudfront-us-east-1.images.arcpublishing.com/elcomercio/AYOW4S2UQVEYBHH2KTIJJVFALU.jpg"
              alt="Image Music"
            />
            <DatosImg>
              <ContentText>
                <ConteSubText>
                  <IconMusic />
                  <ContentFlexCol>
                    <Author>Bad Bunny</Author>
                    <TextMusic>Lorem, ipsum dolor.</TextMusic>
                  </ContentFlexCol>
                </ConteSubText>

                <IconSmallSee />
              </ContentText>
            </DatosImg>
          </ContentImages>
          <ContentImages className="relative w-full md:w-1/5">
            <img
              className="rounded-lg"
              src="https://elintranews.com/wp-content/uploads/2021/05/%C2%A1Sorprendente-Karol-G-es-premiada-como-la-Artista-Latina-del-Ano-en-los-Billboard-2021.jpg"
              alt="Image Music"
            />
            <DatosImg>
              <ContentText>
                <ConteSubText>
                  <IconMusic />
                  <ContentFlexCol>
                    <Author>Karol G</Author>
                    <TextMusic>Lorem, ipsum dolor.</TextMusic>
                  </ContentFlexCol>
                </ConteSubText>

                <IconSmallSee />
              </ContentText>
            </DatosImg>
          </ContentImages>
          <ContentImages className="relative w-full md:w-1/5">
            <img
              className="rounded-lg"
              src="https://elintranews.com/wp-content/uploads/2021/05/%C2%A1Sorprendente-Karol-G-es-premiada-como-la-Artista-Latina-del-Ano-en-los-Billboard-2021.jpg"
              alt="Image Music"
            />
            <DatosImg>
              <ContentText>
                <ConteSubText>
                  <IconMusic />
                  <ContentFlexCol>
                    <Author>Karol G</Author>
                    <TextMusic>Lorem, ipsum dolor.</TextMusic>
                  </ContentFlexCol>
                </ConteSubText>

                <IconSmallSee />
              </ContentText>
            </DatosImg>
          </ContentImages>
          <ContentImages className="relative w-full md:w-1/5">
            <img
              className="rounded-lg"
              src="https://s.yimg.com/ny/api/res/1.2/n8EkdF7YAS32w1ho7s3mXg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY0MA--/https://s.yimg.com/uu/api/res/1.2/S4Ow8xpedcgFGrtp1HeJkw--~B/aD02NTA7dz02NTA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/es/bangshowbiz/6b67bf04bc1adb4e165964b7735ec7b6"
              alt="Image Music"
            />
            <DatosImg>
              <ContentText>
                <ConteSubText>
                  <IconMusic />
                  <ContentFlexCol>
                    <Author>Anuel Aa</Author>
                    <TextMusic>Lorem, ipsum dolor.</TextMusic>
                  </ContentFlexCol>
                </ConteSubText>

                <IconSmallSee />
              </ContentText>
            </DatosImg>
          </ContentImages>
        </section>
      </HeaderMusic>
    </div>
  );
}

const ContentImages = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;
const HeaderMusic = styled.section`
  background-color: #030303;
`;

const DatosImg = styled.div`
  position: absolute;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    184deg,
    rgba(0, 0, 0, 0.15) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  transition: all 0.9s ease;
  &:hover {
    background: rgb(0, 0, 0);
    background: linear-gradient(
      184deg,
      rgba(0, 0, 0, 0.4) 10%,
      rgba(0, 0, 0, 1) 100%
    );
  }
  height: 3rem;
  bottom: 0px;
  width: 100%;
  color: white;
`;

const ContentText = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px;
`;
const IconMusic = styled(IoMusicalNotesOutline)`
  color: white;
  font-size: 1.4rem;
  margin-right: 0.5rem;
`;
const ConteSubText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 0.5rem;
`;
const Author = styled.span`
  color: white;
  font-weight: 700;
  font-size: 1rem;
`;
const TextMusic = styled.span`
  color: white;
  font-size: 0.8rem;
`;

const ContentFlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;
const IconSmallSee = styled(IoArrowForwardCircleOutline)`
  font-size: 1.5rem;
  color: white;
  align-self: flex-end;
  margin-right: 0.4rem;
  cursor: pointer;
`;
