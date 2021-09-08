import Image from "next/image";
import styled, { css } from "styled-components";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaTwitch,
  FaDiscord,
} from "react-icons/fa";

export default function Hero() {
  return (
    <div>
      <HeaderHero>
        <img src="/Hero2.png" alt="Image Hero" />
        <HeaderText className="container">
          <span>Lorem, ipsum dolor.</span>
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <p>
            Lorem 2ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
            cum, accusantium nobis
          </p>
          <ContainerIcons>
            <IconFacebook /> <IconYoutube /> <IconTwitter /> <IconTwitch />
            <IconDiscord />
          </ContainerIcons>
        </HeaderText>
      </HeaderHero>
    </div>
  );
}

const HeaderHero = styled.div`
  height: 100vh;
  img {
    position: absolute;
    bottom: 55px;
    right: 20px;
  }
  @media (max-width: 768px) {
    img {
      display: none;
    }
  }
`;

const HeaderText = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 3.5rem;
    font-weight: 700;
    color: black;
    line-height: 1.2;
    width: 50%;
  }
  span {
    color: black;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  p {
    color: black;
    width: 40%;
    letter-spacing: 1px;
  }
`;
const ContainerIcons = styled.div`
  position: absolute;
  bottom: 20px;
  left: 124px;
  display: flex;
`;
const Icons = css`
  color: #94a3b8;
  font-size: 1.2rem;
  margin-right: 1rem;
  &:hover {
    color: #64748b;
    cursor: pointer;
  }
`;

const IconFacebook = styled(FaFacebookF)`
  ${Icons};
`;

const IconYoutube = styled(FaYoutube)`
  ${Icons};
`;
const IconTwitter = styled(FaTwitter)`
  ${Icons};
`;
const IconTwitch = styled(FaTwitch)`
  ${Icons};
`;
const IconDiscord = styled(FaDiscord)`
  ${Icons};
`;
