import React, { forwardRef } from 'react';
import styled from 'styled-components';
import FujiRockIMG from '../assets/images/maxresdefault.jpg'
import '../../App.scss';

const SecondContent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  overflow: hidden;
`;

const SecondSection = styled.article `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const SecondTitle = styled.h4 `
    width: 60%;
    color:#000;
    font-size: 3rem;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    text-align: left;
    letter-spacing: 4px;
    flex-direction: column;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0 3rem;
    margin: 4rem 0 0 2rem;

`;

const SecondSubTitle = styled.p `
    width: 100%;
    color:#000;
    font-size: 0.8rem;
    font-family: 'Pretendard-Medium';
    text-align: left;
    padding: 3rem 3rem;
    margin: 4rem 0 0 2rem;
    margin-top: 0;
    
`;

const SecondImg = styled.img `
    width: 100%;
    height: 100%;
    background-image: url(${FujiRockIMG});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

`;

const Information = [
  {

    rockTitle: (
        'SEIMIN MUSIC FESTIVAL'
    ),

    rockInformation: (
      <p>
          SEIMIN FESTIVAL 은 본인이 좋아하는 밴드만을 골라서 만든 토이프로젝트로써 모일수가 없는 라인업이기<br />때문에 모인다면 좋겠다는 바램으로써 제작을 하였다.<br /><br />
          컨셉은 락페스티벌이기 때문에 색상의 단조로움을 통해 아티스트들의 MV를 소개함으로써 아티스트들의 영상과 <br />장점을 부각하여 제작하게 되었다.<br /><br />
          본인은 일본문화에 관심이 많고 어릴적 부터 밴드음악을 많이 듣고 자라다보니 현재도 밴드음악에 아이덴티티가 있다.<br />
          일본밴드 및 일본재즈, 시부야케이를 많이 듣는편 이여서 대중적이지 않은 밴드들이 많이 알고 있는데
          <br />이들을 알리고 싶다는 생각을 종종 하곤 했었다.<br /><br />
          트렌디한 아티스트들 보다는 개성적인 아티스트를 많이 좋아하다보니 자료를 모아놓고도 <br />사람들은 이해를 못하긴 하겠다라는 생각을 했었다.<br /><br />
          하지만 어쩔 수 없다.<br /><br />이번에 만든 토이 프로젝트는 내가 좋아하는 거 만들어 보고싶어서 만든거라서 누구에게 이해시키기 보다는<br />
          본인이 즐겁기 위해서 만든 프로젝트이다.<br /><br />
          더군다나 2006년 펜타포트 이후로 락페스티벌을 간적이 없어서 시간이 나고 여유가 되면 락페스티벌을 가서 <br />이 한몸 불사르겠다는 다짐으로 제작한 것도 있다.
      </p>
    ),


  },
];
const SecondPage = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <SecondContent ref={ref}>
      <SecondSection>
        {Information.map((item, index) => (
        <SecondTitle>
          {item.rockTitle}
        </SecondTitle>
        ))}
        {Information.map((item, index) => (
        <SecondSubTitle>
          {item.rockInformation}
        </SecondSubTitle>
        ))};
      </SecondSection>
        <SecondImg />
    </SecondContent>
  );
});

export default SecondPage;

