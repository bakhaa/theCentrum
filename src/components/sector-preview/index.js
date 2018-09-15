import React, { Component } from 'react';
import styled from 'styled-components';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom';

// styled
const Section = styled.section`
  height: 290px;
  margin-bottom: 50px;
`;

const HeaderSection = styled.div`
  display: flex;
  height: 35px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  color: #000000;
  font-size: 24px;
  font-family: "Roboto", "Helvetica";
  font-weight: 200;
  text-transform: uppercase;
`;

const More = styled(Link)`
  color: #F27B28;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
`;

const Items = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
`;

const Item = styled.div`
  margin-right: 20px;
`;

const ItemImg = styled.img`
  margin-bottom: 15px;
`;

const ItemTitle = styled.div`
  color: #8F8E94;
  font-size: 16px;
  font-family: "Roboto", "Helvetica";
`;

class SectiorPreview extends Component {
  render() {
    const { title, items, link } = this.props;
    return (
      <Section>
        <HeaderSection >
          <Title>{title}</Title>
          <More to={link}>View More <ChevronRightIcon /></More>
        </HeaderSection>
        <Items>
          {items.map((item, idx) => (
            <Item key={idx}>
              <ItemImg src={item.photo} alt={item.title} />
              <ItemTitle>{item.title}</ItemTitle>
            </Item>
          ))}
        </Items>
      </Section >
    );
  }
};

export default SectiorPreview;
