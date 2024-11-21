import React, { useState } from "react";
import * as I from "../Concept/IndustryStyle";
import styled from "styled-components";


const TopBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #141a1f;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const TopBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;


const TopBarItem = styled.button`
  background-color: ${({ $isActive }) => ($isActive ? "#60E6F2" : "transparent")};
  color: ${({ $isActive }) => ($isActive ? "#000" : "#fff")};
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

const MenuToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #141a1f;
  border-radius: 10px;
  margin-bottom: 20px; /* Title 위에 적절한 간격 */
  cursor: pointer;

  .menu-icon {
    width: 30px;
    height: auto;
  }

  &:hover {
    background-color: #333;
  }
`;

const sections = [
  {
    id: "quantum-technology",
    title: "양자 기술 동향",
    content: "양자 기술 동향의 개요입니다.",
    subsections: [
      {
        id: "global-market",
        title: "글로벌 시장 동향",
        content: "글로벌 양자 기술 시장은 연평균 25% 이상의 성장률을 기록 중입니다.",
        content2: "2023년 기준, 시장 규모는 약 30조 원으로 추산됩니다.",
      },
      {
        id: "policies",
        title: "국내외 정책 동향",
        content: "미국, 유럽, 중국 등 주요 국가들은 양자 기술 연구개발에 대규모 투자를 진행 중입니다.",
        content2: "한국 정부는 2030년까지 3조 원 규모의 양자 기술 투자를 계획하고 있습니다.",
        content3: "정책 로드맵의 주요 내용은 양자 통신 인프라 확충과 전문 인력 양성입니다.",
      },
    ],
  },
  {
    id: "quantum-rnd",
    title: "양자 기술 R&D 동향",
    content: "양자 기술 R&D의 개요입니다.",
    subsections: [
      {
        id: "quantum-communication",
        title: "양자 통신 연구",
        content: "양자 통신은 양자 상태를 활용한 정보 전달 기술로, 보안성을 강화하는 데 사용됩니다.",
        content2: "중국은 양자 암호 네트워크를 세계 최초로 구현하였습니다.",
      },
      {
        id: "quantum-sensing",
        title: "양자 센싱 연구",
        content: "양자 센싱 기술은 고감도 센서 개발에 활용되며, 의료와 국방에서 두각을 나타냅니다.",
        content2: "대표적인 응용 사례는 양자 기반 MRI와 중력 측정 센서입니다.",
      },
    ],
  },
  {
    id: "quantum-ecosystem",
    title: "양자 기술 산업 생태계",
    content: "양자 기술 생태계의 개요입니다.",
    subsections: [
      {
        id: "components",
        title: "양자 컴퓨팅 주요 구성 요소",
        content: "큐비트는 양자 컴퓨팅의 기본 연산 단위로, 초전도체와 이온 트랩 방식으로 구현됩니다.",
        content2: "양자컴퓨터는 클라우드 서비스를 통해 상용화를 앞두고 있습니다.",
      },
      {
        id: "applications",
        title: "양자 기술 응용 사례",
        content: "금융, 의료, 국방 등 다양한 산업 분야에서 양자 기술이 사용되고 있습니다.",
        content2: "특히, 금융 리스크 관리와 약물 개발에서 두드러진 성과를 보이고 있습니다.",
      },
    ],
  },
];

const Example = () => {
    const [activeSection, setActiveSection] = useState(sections[0].id);
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const currentSection = sections.find((section) => section.id === activeSection);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
        <>
          <I.Container>
            <I.Content>
              <MenuToggle onClick={toggleMenu}></MenuToggle>
      
              {/* TopBar 메뉴 */}
              {isMenuOpen && (
                <TopBarContainer>
                  {sections.map((section) => (
                    <TopBarItem
                      key={section.id}
                      $isActive={activeSection === section.id}
                      onClick={() => setActiveSection(section.id)}
                    >
                      {section.title}
                    </TopBarItem>
                  ))}
                </TopBarContainer>
              )}
      
              {/* Section Title and Content */}
              <I.Title>{currentSection.title}</I.Title>
              <I.Description>{currentSection.content}</I.Description>
      
              {currentSection.subsections && (
                <I.SubsectionContainer>
                  {currentSection.subsections.map((subsection) => (
                    <div key={subsection.id}>
                      <I.SubsectionTitle>{subsection.title}</I.SubsectionTitle>
                      <I.SubsectionContent>{subsection.content}</I.SubsectionContent>
                      {subsection.content2 && <I.SubsectionContent>{subsection.content2}</I.SubsectionContent>}
                    </div>
                  ))}
                </I.SubsectionContainer>
              )}
            </I.Content>
          </I.Container>
        </>
      );
    }
    
  
  export default Example;
