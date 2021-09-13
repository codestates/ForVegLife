import React from "react";
import styled from "styled-components";

export default function UserSideBar() {

 return(
     <Sidebar>
        <Container>
            <Top>
                <UserBox>
                    <Pic></Pic>
                </UserBox>
                <TextBox>
                   <UserName>
                       {`Kimusername`}
                   </UserName>
                   <UserEmail>
                       {`hahihuhe3@gmail.com`}
                   </UserEmail>
               </TextBox>
            </Top>
            <Bottom>
                <BottomBox>
                    <Title>
                        My Place
                        <Content>
                          나의 즐겨찾기
                        </Content>
                        <Content>
                           내가 준 별점
                        </Content>
                    </Title>
                </BottomBox>
                <BottomBox> 
                <Title>
                        My Info
                        <Content>
                           나의 정보 수정
                        </Content>
                        <Content>
                            탈퇴하기
                        </Content>
                    </Title>
                </BottomBox>
            </Bottom>
        </Container>
     </Sidebar>
 
 )

}    

const Sidebar = styled.div`
 width:19.125rem;
 height:auto;
 min-height: 100vh;
 display: flex;
 flex-direction: column;
 margin: 4.188rem 0 4.188rem  2.375rem;
 background-color: var(--color-mypagecard);
 border: 2.5px solid var(--color-lightgreen);
 border-radius: 0.6rem;
 align-items: center;
`;

const Container =styled.div`
 width: 11rem;
 padding-top: 1rem;
 height: 30.938rem;
 display: flex;
 flex-direction: column;
`;
const Top =styled.div`
  height: 15rem;
  border-bottom: 2px solid var(--color-grey);
  display: flex;
  flex-direction: column;
  align-items: center;

`;
const UserBox = styled.div`
   width: 7.063rem;
   height: 7.063rem;
   border-radius: 100%;
   display: flex;
   overflow: hidden;
`;
const Pic = styled.img`
   width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: white;
`;

const TextBox = styled.div`
    width: 100%;
    height: 5.2rem;
    padding-top: 1.625rem; // 나중에 수정- 원의 크기 변하지 않는방향으로.
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: var(--color-darkgrey);
    font-style: var(--font-mypage);
`;

const UserName = styled.p`
    width: inherit;
    height: 100%;
    word-break:break-all;
    font-size: var(--font-size-lg);
    font-weight: 500;
`;
const UserEmail = styled.p`
    width: inherit;
    height: 100%;
    word-break:break-all;
`;

const Bottom = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 1.625rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
     padding: 0 2.3rem 0 2.3rem;
   
`;
const BottomBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.ul`
     width: 100%;
     height: 100%;
     font-size: var(--font-size-lg);
     font-weight: var(--font-weight-bold);
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     color: #5B220A;
     letter-spacing: 1px;
`;
const Content = styled.li`
     width: 100%;
     font-size: var(--font-size-base);
     font-weight: var(--font-weight-normal);
     color: var(--color-brown);
     letter-spacing: 0;
`;