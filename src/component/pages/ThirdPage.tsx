import React, { useState, useEffect, forwardRef } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import ModalInformation from 'component/block/Modal/ModalInfmation';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import RedHotIMG from '../assets/images/redhot.png';
import AskingIMG from '../assets/images/asking.png';
import CrossFaithIMG from '../assets/images/cross.png';
import FearAndIMG from '../assets/images/fear.png';
import MaximumIMG from '../assets/images/maximum.png';
import RingoIMG from '../assets/images/ringgo.png';
import SoilPimpIMG from '../assets/images/soil.png';
import RedHotInfoIMG from '../assets/images/redhot-info.webp';
import AskingInfoIMG from '../assets/images/asking-Info.webp';
import CrossInfoIMG from '../assets/images/corss-Info.webp';
import FearInfoIMG from '../assets/images/fear-Info.webp';
import MaximumInfoIMG from '../assets/images/maximum-Info.webp';
import ShiinaInfoIMG from '../assets/images/shiina-Info.webp';
import SoilInfoIMG from '../assets/images/soil-Info.webp';
import '../../slick-theme.css';
import '../../slick.css';
import '../../App.scss';

const ThirdContent = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  overflow: hidden;
  background-color: #000;

  @media screen and (max-width: 768px) {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  flex-direction: column;
  }
`;

const ThirdSection = styled(motion.article)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 5rem;

  @media screen and (max-width: 768px) {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  flex-direction: column;
  }

`;

const ThirdTitle = styled(motion.h4)`
  width: 50%;
  height: 6rem;
  color: #fff;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 3rem;
  letter-spacing: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 2rem;
    margin: 0 0 0 2rem;
}
`;

const ThirdSliderContainer = styled(motion.div)`
  width: 80%;

`;

const ThirdImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease-out;

  @media screen and (max-width: 768px) {
    height: 40vh;
}

  &:hover {
    transform: scale(1.1);
    opacity: 1;
    z-index: 999;
    
    @media screen and (max-width: 768px) {
      transform: none;
}
  }
  
`;

const ThirdImageText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  padding: 1rem;
  letter-spacing: 0.05rem;
  text-align: center;
  opacity: 0.2;
  transition: opacity 0.3s ease-in-out;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 2rem;
    opacity: 1;
    margin-bottom: -2rem;

}

  ${ThirdImageWrapper}:hover & {
    opacity: 1;
  }


`;

const ThirdSliderItem = styled(motion.div)<{ Images: string }>`
  height: 20rem;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.Images});
  position: relative;
  margin: 0 0.3rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 30vh;
    margin: 0 auto;
    padding: 0 auto;
    background-size: contain;
}
`;

const ThirdCustomArrow = styled.div`
  width: 4rem;
  height: 3rem;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  transition: 0.21s ease-in-out;
  position: absolute;
  top: 0;
  transform: translateY(-150%);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  &:hover {
    opacity: 1;
    color: #ccc;
  }
`;

const images = [
  { img: RedHotIMG, text: 'RED HOT CHILI PEPPERS', imgInfo: RedHotInfoIMG },
  { img: AskingIMG, text: 'ASKING ALEXANDRIA', imgInfo: AskingInfoIMG  },
  { img: CrossFaithIMG, text: 'CROSS FAITH', imgInfo: CrossInfoIMG  },
  { img: FearAndIMG, text: 'FEAR AND LOATHING IN LASVEGAS', imgInfo: FearInfoIMG  },
  { img: MaximumIMG, text: 'MAXIMUM THE HORMONE', imgInfo: MaximumInfoIMG  },
  { img: RingoIMG, text: 'SHIINA RINGO', imgInfo: ShiinaInfoIMG  },
  { img: SoilPimpIMG, text: 'SOIL & PIMP SESSIONS', imgInfo: SoilInfoIMG  },

];

const ThirdPage = forwardRef<HTMLDivElement>((props, ref) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState<{ img: string; text: string, imgInfo:string; } | null>(null);

  const animationLeft = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };

  const animationRight = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0 },
  };

  const transition = {
    duration: 1,
    delay: 0.2,
  };

  const transitionSlide = {
    duration: 1,
    delay: 0.5,
  };

  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <ThirdCustomArrow className="slick-prev" onClick={onClick}>
      <FaChevronLeft />
    </ThirdCustomArrow>
  );

  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <ThirdCustomArrow className="slick-next" onClick={onClick}>
      <FaChevronRight />
    </ThirdCustomArrow>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3, // 웹에서는 3개씩 보여주기
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // 모바일에서는 1개씩 보여주기
          dots: false,

        },
      },
    ],
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (window.innerWidth >= 768) {
      // 웹페이지 스크롤
      if (scrollPosition > 1300 && scrollPosition < 2000) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    } else {
      // 모바일 스크롤
      if (scrollPosition > 1000 && scrollPosition < 2500) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    handleScroll();
  }, []);

  const handleImageClick = (artist: { img: string; text: string; imgInfo: string }) => {
    setSelectedArtist(artist);
    setModalOpen(true);
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [modalOpen]);

const ArtistDescription = (artistName: string) => {
  switch (artistName) {
    case 'RED HOT CHILI PEPPERS':
      return `
        미국 최고의 펑크 락 (Funk Rock) 밴드로 꼽힌다.

        기본적인 스타일은 펑크에 기반한 얼터너티브 록이다. 
        80년대에는 순수 펑크 록만 했으나 90년대부터 얼터너티브 록의 요소를 대폭 받아들였다. 
        80년대부터 2020년대까지 존속한 장수 밴드이다.

        멤버들의 평균 연주 실력이 빼어나기로 정평이 나 있다. 
        존 프루시안테의 경우, BBC에서 지난 30년간의 최고의 기타리스트로 선정되었을 정도이고, 플리는 락 베이시스트 중에서 손에 꼽히는 실력자이다. 

        락 베이스를 하는 사람이라면 플리를 모를 수가 없고, 
        특히 공격적이면서 그루브한 슬랩으로 유명하다. 
        채드 스미스도 펑크 락 드러머 중에서 탑에 꼽히는 실력자이다.
        이제는 전 멤버가 된 조쉬 클링호퍼 역시 훌륭한 기타리스트이나, 
        아무래도 존 프루시안테 쪽이 더 선호된다. 

        존의 인상적인 기타 리프들, 거기에 걸맞는 소울 충만한 연주모습이 
        기타키드들에게는 선망의 대상으로 여겨질 법도 하다.
        이들이 음악계에 미친 영향은 지대한데, 수많은 밴드들이 직ㆍ간접적으로 스타일이나 
        가사에서 언급할 정도다. 
        레드 핫 칠리 페퍼스는 흑인 음악 외에도 갱 오브 포나 미니트맨 같은 
        밴드들에게도 영향을 많이 받았다. 

        플리가 가지고 있는 펜더의 60년대 재즈 베이스에도 미니트맨의 보컬 얼굴이 붙어 있다.
        이들의 곡들 상당수의 가사는 멤버 본인들의 이야기들이다. 
        자신의 과거 이야기(아무래도 작사를 담당하는 보컬 앤서니의 이야기가 많다) 혹은, 지인에 관한 이야기를 가사로 사용하는데, 미국인들도 가사의 의미를 제대로 이해하지 못하는 경우가 많다. 
        따라서 대부분의 곡은 자서전이나 잡지 인터뷰를 통해서 의미를 설명해주고, 
        따로 가사집을 발매하기도 한다.

        1999년 이후로 뮤직비디오에 여러가지 재미있는 요소들을 집어넣기도 했다. 
        Californication에서는 영상 구성을 비디오게임과 같이 그려냈고, 
        Dani California에서는 멤버 전원이 직접 락의 역사를 수놓은 굵직한 밴드들로 분장했으며 
        Cant stop에서는 Erwin Wurm의 One Minute Sculptures를 흉내내는 등이다. 
        물론 Californicaiton 이전에도 그들의 똘기 넘치는 뮤직비디오는 많이 있다.
      `;
    case 'ASKING ALEXANDRIA':
      return `
              Asking Alexandria는 2006년 두바이에서 결성된 영국의 메탈코어 밴드이다. 

              메탈코어에 일렉트로닉 코어, 하드록적인 색채를 더 한 음악, 
              1990년대 헤비메탈 밴드를 연상케 하는 이미지와 라이브 퍼포먼스로도 잘 알려져 있다. 

              메탈코어 씬을 대표하는 인기 밴드를 거론할 때 빠지지 않고 언급되는 밴드.
              밴드의 모든 멤버들이 1980년대 록 음악의 팬이라고 한다. 

              2010년에는 Skid Row의 곡을 커버한 Life Gone Wild EP을 낸 적이 있고 
              Journey ,Motley Crue, Def Leppard, Whitesnake의 히트곡을 커버한 
              Under the Influence : The Legends of Hard Rock EP를 발매하기도 하였다. 

              특히 2, 3집 당시에는 80년대 록 밴드들의 영향이 느껴지는 선정적이고 
              도발적인 뮤직비디오와 앨범 자켓을 보여주고 있다.
              
              또한, 밴드의 모든 멤버들이 1990년대 록·메탈 음악들의 팬이기도 하다.
              2020년대에 들어서 그나마 음악시장들에서 버텨주고 있는 오리지널 록 밴드들 중 한 밴드이다.

              이때의 멤버는 2008년 이후 지속된 라인업과는 다른 멤버로 구성되었으며 이때 
              자체 제작으로 밴드의 첫 앨범인 "The Irony of Your Perfection"을 발매한다. 

              그러나 두바이를 거점으로 활동하면 국제적으로 성공하기 힘들다는 점을 깨닫고 
              2008년 영국 노팅엄으로 돌아온 벤은 인터넷으로 새로운 멤버를 모집하던 중 
              현재의 보컬 대니 워스놉과 그 지역 출신의 새로운 멤버들을 만나며 밴드를 재정비하였다.

              그러던 중 2015년 보컬 대니 워스놉이 자신의 새로운 밴드 We Are Harlot의 활동에 집중하고자 밴드를 탈퇴하게 된다. 
              벤 브루스와의 인터뷰에 따르면 대니는 2집 이후 스크리밍과 헤비한 음악에 대한 흥미를 
              잃어가고 있었고 밴드의 멤버로 계속 활동할 수 있을지에 대해 알수 없었다고 하는 등 이전부터 탈퇴를 고민했던 것으로 보인다.

              이 당시는 Killswitch Engage, Lamb of God, As I Lay Dying 등의 밴드들이 빌보드 차트 TOP 10에 오르는 등 메탈코어가 메인스트림 중 하나로 떠오르던 시기로 
              
              Asking Alexandria 역시 메탈코어 붐에 힘입어 미국 시장에서도 주목받았다. 
              
              2011년 발매된 2집 "Reckless & Relentless"는 빌보드 차트 9위에 오르는 성공을 거두었다. 
              
              "Breathless", "To The Stage" 등의 곡이 싱글컷 되었으며, 앨범의 성공 이후 밴드는 Avenged Sevenfold의 서포트 밴드로써 함께 투어를 하고 
              
              Of Mice & Men, Crown the Empire와 같은 메탈코어 씬의 인기 밴드들을 서포트로 한 북미 헤드라이닝 투어를 진행하였으며, 
              
              Vans Warped Tour 2011에서 헤드라이너로 출연하였다. 
              
              또한 2012년 인디펜던트 뮤직 어워드에서 베스트 메탈/하드코어 상을 수상하는 등 메탈코어의 붐을 이끄는 밴드로 떠오르게 되었다. 
              
              그리고 2013년 3집 "From Death to Destiny"가 발매되었다. 기존의 메탈코어 사운드에 80년대 하드록의 영향을 받았다고 하는 이 앨범은 빌보드 차트 5위에 오르는 성공을 거두었다. 
              
              이 성적은 현재까지 밴드의 가장 높은 앨범 차트 기록이며 Sumerian Records에서 발매한 앨범 중 첫 주에 가장 높은 세일즈를 기록한 앨범이 되었다. 
              
              앨범에서는 "Run Free", "The Death of Me", "Killing You", "Moving On" 등의 곡이 히트하였다. 
              
              밴드는 얼터너티브 프레스의 베스트 라이브 밴드와 베스트 인터내셔널 밴드 후보에 올랐으며 런던 브릭스톤 아카데미에서의 공연을 매진시키는 등 승승장구하였다. 
              
              이 공연은 "Live from Brixton and Beyond"라는 타이틀로 DVD로도 발매되었다.
              `;
    case 'CROSS FAITH':
      return `
              오사카 출신의 메탈코어 & 트랜스코어 밴드이다. 
              
              2006년도에 크로스페이스의 전신이 되었던 밴드를 첫 결성한 이래 몇번의 멤버 교체를 통해 
              현재는 다섯명의 편성으로 최종적으로 확립이 되었다. 
              강렬한 메탈 사운드에 스크리밍, 휘황찬란한 신디사이저 사운드를 뒤섞은 참신하고 
              일렉트로니컬한 사운드를 자랑하는 밴드이기도 하다. 
              
              Crossfaith 라는 밴드명은 멤버 각자의 신념(faith)이 교차(Cross)하는 곳이라는 
              뜻을 담았다고 한다. 
              보컬인 코이에는 2010년 MANAFEST의 새 앨범인 THE CHASE의 
              일본 라이선스반의 보너스 트랙인 
              『no plan b feat.Koie(Crossfaith)』에 피처링으로 참가함과 동시에 
              PV에 MANAFEST와 같이 출연하기도 하였다. 
              
              최근 들어서 악곡에 클린 보컬 멜로디가 개입되고 코드 스트로킹 연주가 많아지는등 
              메탈릭한 요소를 많이 잃고 과도하게 대중지향적으로 변질되었다는 점에서 
              많은 리스너들에게 비판을 받고있다.
  
              2011년에 출시된 정규 2집인 The Dream, The Space의 일본 국내반 보너스 트랙으로 
              프로디지의 악곡인 OMEN을 커버링하였다.
              2011년에 그들의 두번째 풀 앨범인 The Dream, The Space, 2012년 8월에 
              ZION EP가 국내에 정식으로 음원이 공개되었다.
  
              2013년에는 그들의 통산 3번째 앨범인 Apocalyze가 발매되었다. 
              9월 4일에 일본 자국내 앨범이, 9월 23일에 한국 정식발매반이 발매되었다.
              영국 밴드 Bring Me The Horizon과의 호주, 뉴질랜드 투어. Skindred와의 
              유럽 투어, 림프 비즈킷과의 영국 투어 등에 참전하게 된다.(영국에서 2만명 동원.)
  
              2012/2013년의 주요 참가 페스티벌: Vans Warped Tour (미국), Reading & Leeds Festival (영국), Rock AM Ring 페스티벌(독일), Loud Park & Summer Sonic(일본), Soundwave Festival (호주)
              2022년 9월 활동 중단을 선언했다.
              2023년 3월 31일에 9월 14일 부터하는 원맨 투어로 시작해 활동을 재개한다고 한다. 
              단, 베이스 맴버인 베이스 맴버 Hiro는 건강상태 문제로 인해 활동 중단하고, 
              서포트 맴버 대리고 공연한다고 한다.
              `;    
      case 'FEAR AND LOATHING IN LASVEGAS':
      return `
              2008년 여름에 멤버들의 고향인 고베시에서 결성되고, 헤비메탈과 키보드 전자음의 독특한 융합은 많은 관객을 매료했으나 
              클린 보컬은 듣는 사람들을 만족시킬 만큼 성공하지 못하였다.
              적절한 사람을 찾아다니는 데 긴 시간을 보내다 2009년에 So를 영입 후, 6인 체제를 갖추고서 본격적인 활동을 시작하였다.
              
              주 장르는 트랜스코어. 일본 내에서는 카이지의 오프닝 곡이나 기생수의 오프닝 곡 등을 통해 메탈코어씬을 통틀어서는 
              대중적인 밴드로, 트랜스코어 밴드 중에서는 가장 대중적인 밴드로 인식된다. 
              
              두 번의 내한으로 한국에 있는 락 팬들에게도 어느정도 이름을 알렸으며, 상기했듯이 기생수나 카이지, 헌터×헌터 등으로 이름을 알렸다.
              밴드 음악의 특징은 헤비메탈 장르 특유의 스크리밍과 그로울링을 사용하면서도, 
              전형적인 메탈 사운드와는 달리 브루털 창법에 전자음악과 오토튠을 사용해 변조한 클린 보컬을 혼합해 
              그들만의 음악을 만들어 나간다는 것에 있다. 밴드 자체가 항상 "새로운 것"을 지향하고 정해진 틀을 깨려는 시도를 하며 
              이는 그들이 내놓는 음악을 통해 확실하게 알 수 있다. 실제로 정규 3집 앨범인 PHASE 2에서 나온 노래에서만 따져봐도 
              믹스쳐 록, 랩, 어쿠스틱 발라드 등 이게 정말 한개의 밴드가 부른 것이 맞나 싶을 정도로 다양한 장르를 오간다. 
              
              특유의 경쾌함과 이질적인 특성들이 장르 자체의 파워풀함도 잃지 않은 채 잘 조율되어 
              마니아들과 대중들 전부를 폭넓게 잡은 독특한 밴드. 다만 전반적으로 폐쇄성이 강하고 
              가끔 이상한 자부심도 있는 장르 팬층의 특성상 오히려 골수 익스트림 메탈 팬들에게는 호불호가 꽤 갈린다. 
              그리고 스크리밍이나 그로울링의 특성상 음악이 시끄럽고 정신없어 일반인 중에서도 취향에 맞지 않는 사람들도 많다.

              이 밴드로 트랜스코어나 메탈코어를 처음 접하고 다른 트랜스코어 밴드들을 찾으면 분위기가 많이 다르기 때문에 실망할 확률이 많다. 
              괜히 얘들이 그나마 대중적이겠어 그래도 일본의 밴드들이 그나마 색이 비슷하다. 
              이제 서양의 트랜스코어와 일본의 트랜스코어는 거의 다른 장르가 되어가고 있다고 해도 과언이 아닌 수준.
              
              `;
    case 'MAXIMUM THE HORMONE':
      return `
              1998년 결성된 일본 록 밴드이다. 
              
              초기에는 펑크였으나, 점점 성향이 변해 하드코어, 뉴메탈, 스래쉬 메탈, 일본식 락 등 
              여러가지 음악적 요소를 한꺼번에 아우르는 난장형 카타르시스를 추구하는 격렬한 밴드.
              이 독자적인 성격 탓에 해외에도 이름이 알려지게 된다. 

              밴드 이름의 뜻은 뇌내 분비물(호르몬)이 최대급(맥시멈)으로 분비될 음악을 날려주겠다라고 하지만 이것은 후에 지어낸 것이다. 
              유래는 멤버들이 고기를 좋아하여 호루몬 야키(일본식 곱창요리)를 따서 호르몬 이라 했다가 
              너무 짧고 멋없어서 더와 맥시멈을 붙여서 맥시멈 더 호르몬이 되었다고 한다. 

              일부에선 마키호루, 쿠자호루, 마키시마무 등의 약칭으로도 불리우지만, 
              공식적인 약칭은 호르몬(ホルモン)이며, 외국용으로 각 단어의 이니셜을 딴 MTH를 쓰기도 한다. 멤버인 맥시멈 더 료쿤은 "호르몬 이외는 잘못된 호칭"이라고 발언하였다.
              2007년 2월부터 6월까지 방영된 데스노트 2기의 주제가를 담당하게 되면서 국내에까지 널리 알려지게 된다. 
              
              2008년 여름에는 잠실 야구장에서 열린 ETPFEST에 참가했고, 공연 분위기는 상당히 좋았다. 그리고 2011년에 펜타포트에도 왔었다.
              하드코어적인 사운드를 기초로 다양한 실험적인 시도를 담은 음악을 하는데, 그 완성도가 매우 높다. 

              멤버중 베이스를 제외한 MC, 기타, 드럼 세명이 돌아가면서 노래를 하여 다채로운 사운드를 들려주고 있다.

              정신나간 듯 하면서 영어처럼 들리는 가사가 특징으로, 실제로 작사작곡을 담당하는 료쿤은 특유의 발음의 느낌을 신경쓰며 작사하는 것으로 보인다. 
              참고로 가사가 특이한 이유는 료쿤이 직접적으로 표현하는 게 서툴어서.

              기타프릭스&드럼매니아에 ROLLING1000tOON[7]과 절망 빌리가 수록되어 있다. 그리고 유비트 코피어스에 그 유명한 낚시곡인 maximum the hormone이 수록되었다.

              애니메이션 투패전설 아카기의 엔딩을 부르기도 했다. 곡 제목은 아카기. 2005년 11월 16일 발매된 맥시멈 더 호르몬의 앨범 자와...자와...자..자와......자와에 2번트랙으로 수록되어 있다.
              
              그리고 드디어 오랜시간의 공백기(?) 를 거쳐 6년만에 풀 앨범 출시를 발표하였다! 타이틀명은 예습복수(予襲復讐). 발매일은 2013년 7월 31일이다.
              
              참고로 앨범명 예습복수는 우리가 잘 아는 예습복습과 일어 발음이 동일하다. 그리고 30만장이 넘게 팔리는 대히트를 기록하면 그야말로 승승장구 중!
              
              2014년 4월 20일 서울 UNIQLO AX 에서 Perfume과 합동 내한 콘서트가 열릴 예정이었다. 아뮤즈코리아에 따르면 일본에서도 보기 드문 두 팀의 콜라보 공연이므로 현지에서도 관심이 높았으나, 
              
              청해진해운 세월호 침몰 사고로 인해 취소가 결정되었다. 
              
              아뮤즈 코리아 글 이 후 멤버와 스태프 일동이 재검토 한 결과 2014년 10월 12일 다시 개최를 결정하였다.
              
              슈퍼소니코와 유루메루모의 아노가 좋아하는 아티스트 중 하나이기도 하다.
              
              드래곤볼의 프리저를 소재로 한 'F'란 곡으로도 유명한데, 원작자가 이 곡을 듣고 프리저를 부활시켰다! 여러모로 엉뚱한 의미에서 프리저 부활의 일등공신.
              
              나오의 임신 준비로 인해 투어 "봉인"을 마지막으로 활동을 잠시 쉬었다가 2017년 5월부터 다시 활동을 시작한다.
              
              2018년 9월 17일, OSAKA HAZIKETEMAZARE FESTIVAL 2018 공연을 마지막으로 예정된 라이브를 모두 취소하고 활동을 쉬기로 했는데, 다이스케항이 추간판 탈출증으로 급히 수술을 해야했기 때문이다. 
              
              본인은 라이브 마치고 하려 했는데, 무리를 해서 긴급 수술이 필요한 상태였다고. 때문에 이후 목에 깁스한 모습을 보였다. 
              
              2019년 6월 1일부터 다시 라이브 투어를 시작한다.
                    `;
    case 'SHIINA RINGO':
       
    return   `일본을 대표하는 싱어송라이터 중 한 명이자 밴드 도쿄지헨의 창설자, 
              연예 기획사 黒猫堂의 대표 이사다.
              1998년 싱글 <행복론>으로 데뷔하여 2003년까지 솔로로 활동하며, 90년대 후반부터 
              2000년 초반에 하마사키 아유미, 우타다 히카루 등과 더불어 일본 여성가수의 붐을 일으킨 주역 중 하나다. 
              
              솔로활동 당시 90년대를 풍미한 시부야계를 모방하여 스스로를 신주쿠계라고 소개했다. 
              2004년부터 밴드 도쿄지헨을 만들고 보컬로 활동 하다가 2012년 해체한 뒤, 
              2013년부터 솔로 활동을 재개 하였다. 뛰어난 음악적 역량과 다방면의 재능으로 무대 연출, 퍼포먼스 등 
              많은 성과를 남겼으나 욱일기 논란 등의 구설수로 한국에서는 제법 알려져있고 친숙한 일본 가수 중 한 명.

              앞서 언급한 것처럼 1990년대 후반부터 2000년 초반에 일본 여성 가수의 붐을 일으킨 주역 중 하나다. 
              2000년대에는 패션 아이콘 중 하나로 시이나 링고의 옷차림을 따라하는 여자 아이들을 "링고 걸"이라고 불렀다. 
              또 그녀가 사용하고 있는 듀젠버그 스타플레이어 기타는 2000년 일본에서 1000세트나 팔릴 정도로 역사적인 매출을 기록했다.

              HMV에서 선정한 일본 최고 100명의 뮤지션리스트에서 36위를 차지하기도 했다.
              강렬한 비주얼적 퍼포먼스 등 때문인지 그녀를 모델로 한 캐릭터도 많다. 
              만화 나나의 오사키 나나, 게임 길티기어 시리즈의 I-No. 오쿠다 히데오의 이라부 시리즈에 나오는 간호사 마유미 등.
              세 번째 앨범 "시멘트 정액 밤꽃"은 2009년 12월 22일, CNN 인터내셔널 아시아에서 지난 10년간 가장 저평가 받은 일본 음악에서 2위를 차지했다.
              국내 인디씬에도 지대한 영향을 끼친 아티스트 중에 하나. 일본 음악이 개방되기 전이었던 시절부터 알음알음 듣던 매니아들이 있었으며, 
              그녀의 스타일이나 보컬을 벤치마킹한 가수들도 많았다. 
              
              특히 김윤아, 오지은은 당시 한참 링고를 표절한게 아니냐는 의혹을 꾸준히 받은 바 있다. 
              실제로 오지은은 과거 가부키쵸의 여왕을 커버한 영상을 직접 올린적도 있다. 
              주로 한자로만 이뤄진 독특한 노래 제목이나 특유의 재지하고 멜랑콜리한 느낌이 강한 보컬 등에서 공통점을 많이 찾는다.
              윤하, 아이유, 백예린, 주니엘, 김사월, 안예은, 류정운도 링고에 대한 존경을 표하거나 그녀의 음악을 즐겨듣는다고 언급한 바 있다.
              최근엔, SHINee KEY가 본능을 따라 부르기도 했다.
      `;
     case 'SOIL & PIMP SESSIONS':
      return `
              소일 앤 펌프 세션즈(Soil and Pimp Sessions)는 일본의 재즈 밴드로, 2001년에 결성되었다. 
              이들은 현대적이고 에너제틱한 재즈 음악으로 유명하며, 그들의 곡은 강렬하고 다채로운 브라스 섹션과 함께 유쾌하면서도 독창적인 스타일로 알려져 있습니다. 
              소일 앤 펌프 세션즈는 전 세계적으로 인정받아 많은 국내외 음악 팬들에게 사랑을 받고 있습니다.

              그들의 음악은 재즈뿐만 아니라 퓨전 장르에도 영향을 미치고 있으며, 그들이 발표한 앨범들은 현대적이고 실험적인 음악의 흐름을 탐험하고 있다. 
              소일 앤 펌프 세션즈의 대표작으로는 "Pimpin'" (2007), "Planet Pimp" (2009), "Circumstances" (2015) 등이 있다.
              이 밴드는 활발한 공연 활동과 함께 국제 재즈 페스티벌 및 이벤트에 참여하여 글로벌 오디언스와 소통하고 있다.

              밴드는 Shacho와 Tabu Zombie가 DJ 세트에서 라이브 잼 세션을 시작하면서 도쿄의 클럽 현장에서 탄생했다. 
              점차적으로 다른 멤버들이 초대되었고 밴드의 라인업이 확정되었으며 DJ 세트가 삭제되었다.

              밴드의 라이브 세트는 도쿄 라이브 현장에서 화제를 불러일으키기 시작했고, 
              2003년에는 일본 후지 록 페스티벌에서 공연한 최초의 무명 밴드가 되었습니다. 
              그들은 그곳에서 호평을 받았으며 다음 달에 음반 회사는 계약을 제안하기 위해 안간힘을 썼다. 
              JVC Victor가 이 싸움에서 승리했고 2004년 여름에는 미니 앨범 Pimpin'이 출시되었다.

              소일 앤 펌프 세션즈(Soil and Pimp Sessions)는 일본의 재즈 밴드로, 그들은 뉴 브리티시 재즈(British New Jazz) 운동에 속하는 그룹 중 하나이다. 
              이들은 특히 활기찬 라이브 공연과 파워풀한 재즈 음악으로 유명하며, 일본 내외에서 폭넓게 인정받고 있다. 
              이들은 전통적인 재즈 요소와 현대적인 트렌드를 조합하여 독특하고 감각적인 음악을 만들어내고 있다. 
              소일 앤 펌프 세션즈의 음악은 재즈뿐만 아니라 펑크, 힙합, 일렉트로닉 등 다양한 장르의 영향을 받고 있다.
      `;

    default:
      return '';
  }
};
  
  return (
    <ThirdContent ref={ref}>
      <ThirdSection>
        <ThirdTitle
          variants={animationLeft}
          initial="hidden"
          animate={animate ? 'visible' : 'hidden'}
          transition={transition}
        >
          ARTIST
        </ThirdTitle>
        <ThirdSliderContainer
          ref={ref}
          variants={animationRight}
          initial="hidden"
          animate={animate ? 'visible' : 'hidden'}
          transition={transitionSlide}
        >
        <Slider {...settings}>
          {images.map((item, index) => (
            <ThirdImageWrapper key={index} onClick={() => handleImageClick(item)}>
              <ThirdSliderItem Images={item.img}>
                <ThirdImageText>{item.text}</ThirdImageText>
              </ThirdSliderItem>
            </ThirdImageWrapper>
          ))}
        </Slider>
        </ThirdSliderContainer>
      </ThirdSection>

      <ModalInformation
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        artistName={selectedArtist ? selectedArtist.text : ''}
        artistDescription={selectedArtist ? ArtistDescription(selectedArtist.text) : ''}
        artistImg={selectedArtist ? selectedArtist.imgInfo : ''}
      />
    </ThirdContent>
  );
});

export default ThirdPage;