import React, { Component } from 'react';
import { Property } from './Property';

export class FetchData extends Component {
  displayName = FetchData.name

  constructor(props) {
    super(props);
    this.state = { forecasts: undefined, loading: true };

    fetch('api/SampleData/GetGroups')
      .then(response => response.json())
        .then(data => {
        this.setState({ forecasts: data, loading: false });
          });
    }



  static renderForecastsTable(forecasts) {
      return (
          <div>
              <h2>{forecasts.name}</h2>
              <div>
                  {forecasts.properties.map((p) =>
                      <Property pName = { p.name } pValue = { p.value } pDisplay = { p.display }/>
                  )}
              </div>
          </div>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
        : FetchData.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        {contents}
      </div>
    );
  }
}