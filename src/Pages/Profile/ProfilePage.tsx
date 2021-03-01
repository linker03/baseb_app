import React from 'react';
import styled from 'styled-components';
import { Layout } from '../../components/Layout';
import { Pencil } from '../../assets/svg/Pencil';
import { Age } from '../../assets/svg/Age';
import avatar from '../../assets/images/avatar.png';
import { Height } from '../../assets/svg/Height';
import { Weight } from '../../assets/svg/Weight';
import { Throws } from '../../assets/svg/Throws';
import { Bats } from '../../assets/svg/Bats';
import { ProgressBar } from './ProgressBar';

const FlexContainer = styled.div`
  display: flex;
`;

const ProfileContainer = styled.div`
  padding: 0;
  overflow: auto;
  width: 100%;
  display: flex;
`;

const Sidebar = styled.aside`
  background: #fff;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  width: 200px;
  overflow: auto;
  padding: 16px;
  transition: all 0.1s;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
  height: auto;
  z-index: 1;
  display: block;
  flex: 0 0 298px;
  opacity: 1;
  position: relative;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  overflow: auto;
`;

const UserInfo = styled.div`
  position: relative;
`;

const EditButton = styled.button`
  position: absolute;
  top: 12px;
  right: 13px;
  padding: 0;
  display: block;
  border-radius: 4px;
  box-shadow: none;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
`;

const IconContainer = styled.span`
  display: flex;
`;

const UserAvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 6px;
`;

const UserAvatar = styled.div`
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 50%;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NameFirstLine = styled.div`
  font-size: 20px;
  line-height: 24px;
  color: #414f5a;
  word-wrap: break-word;
  word-break: break-all;
  text-align: center;
`;

const NameSecondLine = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: #788b99;
`;

const NameThirdLine = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: #788b99;
  border-top: 1px solid #cbcccd;
`;

const PersonalInfo = styled.div`
  display: flex;
  flex-flow: column;
`;

const PersonalInfoItem = styled.div`
  display: flex;
  padding: 16px 0;
  justify-content: space-between;

  span:nth-child(n) {
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }
  span:nth-child(2n) {
    width: auto;
    margin-right: auto;
  }
  span:nth-child(3n) {
    width: auto;
    margin: 0;
  }
`;

const SchoolInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SchoolItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const SchoolItemFirst = styled.div`
  font-size: 14px;
  line-height: 17px;
  font-weight: 300;
  color: #667784;
  margin-bottom: 3px;
  text-align: left;
`;

const SchoolItemSecond = styled.div`
  font-size: 16px;
  color: #667784;
  word-wrap: break-word;
  margin-bottom: 11px;
`;

const SchoolAbout = styled.div`
  display: flex;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 11px;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #e7ebef;
    z-index: 0;
  }
`;

const AboutTitle = styled.div`
  text-align: left;
  display: inline-block;
  position: relative;
  z-index: 1;
  background-color: #ffffff;
  padding-right: 12px;
  font-size: 18px;
  font-weight: 900;
  color: #414f5a;
  line-height: 1.25;
`;

const AboutText = styled.div`
  font-size: 16px;
  color: #788b99;
  line-height: 1.75;
  word-wrap: break-word;
`;

const Main = styled.main`
  background: #788b99;
  flex: 2;
  overflow: auto;
  width: calc(100vw - 220px);

  .card {
    background: #fff;
    margin: 16px;
    padding: 16px;
    border-radius: 8px;
    box-sizing: border-box;
    flex-grow: 1;
  }
`;

const SummaryEventsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PitcherSummary = styled.div`
  display: flex;
  max-width: 100%;
  min-width: 0;
  flex-direction: column;
`;

const PitcherTitle = styled.div`
  font-size: 18px;
  font-weight: 900;
  color: #414f5a;
  text-align: center;
  line-height: 1.25;
`;

const ProgressContainer = styled.div`
  overflow: hidden;
  height: 100%;
  display: flex;
`;

const ProgressItem = styled.div`
  padding: 16px 24px 0 0;
  display: flex;
  flex-direction: column;
`;

const ProgressItemTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const ProgressItemText = styled.div`
  font-size: 16px;
  color: #667784;
`;

const ProgressItemValue = styled.div`
  font-size: 16px;
  color: #667784;
  font-weight: 700;
`;

const ProgressBarContainer = styled.div`
  max-width: 100%;
  height: 4px;
  svg {
    width: 100%;
    height: 100%;
    vertical-align: top;
  }
`;

const RecentEvents = styled.div`
  display: flex;
  overflow: hidden;
  max-width: 100%;
  min-width: 0;
  flex-direction: column;
`;

const RecentEventsTitle = styled.div`
  line-height: 1.25;
  font-size: 18px;
  font-weight: 900;
  color: #414f5a;
  width: 100%;
  text-align: left;
`;
const EmptyMessage = styled.div`
  display: flex;
  color: #667784;
  font-size: 16px;
`;

export const ProfilePage = () => {
  return (
    <Layout>
      <ProfileContainer>
        <Sidebar>
          <UserInfo>
            <EditButton>
              <IconContainer>
                <Pencil />
              </IconContainer>
            </EditButton>
            <UserAvatarContainer>
              <UserAvatar style={{ backgroundImage: `url(${avatar})` }} />
            </UserAvatarContainer>
          </UserInfo>
          <NameContainer>
            <NameFirstLine>fasdfas sdafasdf</NameFirstLine>
            <NameSecondLine>Catcher</NameSecondLine>
            <NameThirdLine>First Base</NameThirdLine>
          </NameContainer>
          <PersonalInfo>
            <PersonalInfoItem>
              <span>
                <Age />
              </span>
              <span>Age</span>
              <span>2</span>
            </PersonalInfoItem>
            <PersonalInfoItem>
              <span>
                <Height />
              </span>
              Height<span></span>
              <span>6 ft 6 in</span>
            </PersonalInfoItem>
            <PersonalInfoItem>
              <span>
                <Weight />
              </span>
              <span>Weight</span>
              <span>234 lbs</span>
            </PersonalInfoItem>
            <PersonalInfoItem>
              <span>
                <Throws />
              </span>
              <span>Throws</span>
              <span>R</span>
            </PersonalInfoItem>
            <PersonalInfoItem>
              <span>
                <Bats />
              </span>
              <span>Bats</span>
              <span>R</span>
            </PersonalInfoItem>
          </PersonalInfo>
          <SchoolInfoContainer>
            <SchoolItem>
              <SchoolItemFirst>School</SchoolItemFirst>
              <SchoolItemSecond>Rockledge</SchoolItemSecond>
            </SchoolItem>
            <SchoolItem>
              <SchoolItemFirst>School Year</SchoolItemFirst>
              <SchoolItemSecond>Sophomore</SchoolItemSecond>
            </SchoolItem>
            <SchoolItem>
              <SchoolItemFirst>Team</SchoolItemFirst>
              <SchoolItemSecond>FTB</SchoolItemSecond>
            </SchoolItem>
            <SchoolAbout>
              <AboutTitle>About</AboutTitle>
            </SchoolAbout>
            <AboutText>sadfwef</AboutText>
          </SchoolInfoContainer>
        </Sidebar>
        <Main>
          <SummaryEventsContainer>
            <PitcherSummary className="card">
              <FlexContainer>
                <PitcherTitle>Top Batting Values</PitcherTitle>
              </FlexContainer>
              <ProgressContainer>
                <ProgressItem>
                  <ProgressItemTitle>
                    <ProgressItemText>Exit Velocity</ProgressItemText>
                    <ProgressItemValue>N/A</ProgressItemValue>
                  </ProgressItemTitle>
                  <ProgressBarContainer>
                    <ProgressBar progress={15}></ProgressBar>
                  </ProgressBarContainer>
                </ProgressItem>
                <ProgressItem>
                  <ProgressItemTitle>
                    <ProgressItemText>Carry Distance</ProgressItemText>
                    <ProgressItemValue>N/A</ProgressItemValue>
                  </ProgressItemTitle>
                  <ProgressBarContainer>
                    <ProgressBar progress={15}></ProgressBar>
                  </ProgressBarContainer>
                </ProgressItem>
                <ProgressItem>
                  <ProgressItemTitle>
                    <ProgressItemText>Launch Angle</ProgressItemText>
                    <ProgressItemValue>N/A</ProgressItemValue>
                  </ProgressItemTitle>
                  <ProgressBarContainer>
                    <ProgressBar progress={15}></ProgressBar>
                  </ProgressBarContainer>
                </ProgressItem>
              </ProgressContainer>
            </PitcherSummary>
            <RecentEvents className="card">
              <RecentEventsTitle>Recent Session Reports</RecentEventsTitle>
              <EmptyMessage>
                No data currently linked to this profile
              </EmptyMessage>
            </RecentEvents>
          </SummaryEventsContainer>
          <FlexContainer className="card"></FlexContainer>
        </Main>
      </ProfileContainer>
    </Layout>
  );
};
