import React, { Component } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

const Section = styled.section`
  border-radius: 6px;
  width: 100%;
  height: 300px;
  margin-bottom: 30px;
  overflow: hidden;
  box-shadow: 0 0 16px rgba(0,0,0,0.1);
`;

class SectiorSidebarMap extends Component {
  static defaultProps = {
    center: {
      lat: 41.0812069,
      lng: -74.017728
    },
    zoom: 11
  };
  render() {
    return (
      <Section>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBZL8Fce5TmuzJRYy2Ho0E2uxOcdqlWVbI' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </Section>
    );
  }
}

export default SectiorSidebarMap;
