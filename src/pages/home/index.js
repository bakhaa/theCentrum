import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import SectionPreview from '../../components/section-preview';
import SectionSidebarLinks from '../../components/section-sidebar';
import SectionSidebarMap from '../../components/section-sidebar/Map';

const Content = styled.div`
  background: #FFFFFF;
  border-radius: 6px;
  box-shadow: 0 0 16px rgba(0,0,0,0.1);
  padding: 60px;
`;

const items = [
  {
    link: '',
    photo: 'img/data/1.png',
    title: 'Get an Oil Change While you Work',
  },
  {
    link: '',
    photo: 'img/data/2.png',
    title: 'On Demand Laundry @ Hall St.',
  },
  {
    link: '',
    photo: 'img/data/3.png',
    title: 'Document Destruction Services - Be Secure',
  },
  {
    link: '',
    photo: 'img/data/1.png',
    title: 'Get an Oil Change While you Work',
  },
]

const itemsSidebar = [
  {
    title: 'TX Bourbon Whiskey Tasting',
    link: '/news'
  },
  {
    title: 'Free Shred Event',
    link: '/news'
  },
  {
    title: 'Coacktail & Dinner at Centrum',
    link: '/news'
  },
]

export const HomePage = () => (
  <Grid container spacing={24}>
    <Grid item xs={12} sm={8}>
      <Content>
        <SectionPreview title='last news' link='/news' items={items} />
        <SectionPreview title='perks' link='/perks' items={items} />
        <SectionPreview title='events' link='/events' items={items} />
      </Content>
    </Grid>
    <Grid item xs={12} sm={4}>
      <SectionSidebarLinks title='RSVP' link='news' items={itemsSidebar} />
      <SectionSidebarLinks title='Favorites' link='perks' items={itemsSidebar} />
      <SectionSidebarMap />
    </Grid>
  </Grid>
);
