import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// styled
const Section = styled.section`
  padding: 30px;
  color: #F27B28;
  background: #FFFFFF;
  border-radius: 6px;
  margin-bottom: 20px;
  font-family: "Roboto", "Helvetica";
  box-shadow: 0 0 16px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
  color: #000000;
  font-size: 24px;
  font-family: "Roboto", "Helvetica";
  font-weight: 200;
  text-transform: uppercase;
  padding-bottom: 25px;
  border-bottom: 1px solid #EFEFF4;
`;

const Items = styled.ul`
  margin-top: 30px;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  padding-bottom: 10px;
`;

const ItemLink = styled(Link)`
  color: #F27B28;
  text-decoration: none;
`;

const More = styled(Link)`
  color: #8F8E94;
  text-decoration: none;
`;

class SectiorSidebarLinks extends Component {
  render() {
    const { title, items, link } = this.props;
    return (
      <Section>
        <Title>{title}</Title>
        <Items>
          {items.map((item, idx) => (
            <Item key={idx} >
              <ItemLink to={item.link}>{item.title}</ItemLink>
            </Item>
          ))}
        </Items>
        <More to={link}>Show more…</More>
      </Section >
    );
  }
};

export default SectiorSidebarLinks;
