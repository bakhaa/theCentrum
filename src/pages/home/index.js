import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import SectorPreview from '../../components/sector-preview';

const Content = styled.div`
  background: #FFFFFF;
  border-radius: 6px;
  padding: 60px;
`;

const items = [
  {
    link: '',
    photo: '/img/data/1.png',
    title: 'Get an Oil Change While you Work',
  },
  {
    link: '',
    photo: '/img/data/2.png',
    title: 'On Demand Laundry @ Hall St.',
  },
  {
    link: '',
    photo: '/img/data/3.png',
    title: 'Document Destruction Services - Be Secure',
  },
  {
    link: '',
    photo: '/img/data/1.png',
    title: 'Get an Oil Change While you Work',
  },
]

export const HomePage = () => (
  <Grid container spacing={24}>
    <Grid item xs={12} sm={8}>
      <Content>
        <SectorPreview title='last news' link='/news' items={items} />
        <SectorPreview title='perks' link='/perks' items={items} />
        <SectorPreview title='events' link='/events' items={items} />
      </Content>
    </Grid>
    <Grid item xs={12} sm={4}>
      <div>sidebar</div>
    </Grid>
  </Grid>
);
