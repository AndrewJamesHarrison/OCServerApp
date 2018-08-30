import React, { Component } from 'react';

export class FetchData extends Component {
  displayName = FetchData.name

  constructor(props) {
    super(props);
    this.state = { forecasts: undefined, loading: true };

    fetch('api/SampleData/GetGroups')
      .then(response => response.json())
        .then(data => {
            console.log(data.properties);
        this.setState({ forecasts: data, loading: false });
          });

      //this.simpleInputHandler = this.simpleInputHandler.bind(this);
    }

    simpleInputHandler(e, i) {
        this.setState({
            [this.forecasts.properties[i].value]: e.target.value
        });
    }

  static renderForecastsTable(forecasts, inputHandler) {
      return (
          <div>
              <h2>{forecasts.name}</h2>
              <div>
                  {forecasts.properties.map((p, i) =>
                      <div class="form">
                          <p>{p.name}</p>
                          <input type={p.display} value={p.value} onChange={e => inputHandler(e, i)}/>
                      </div>
                  )}
              </div>
          </div>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
        : FetchData.renderForecastsTable(this.state.forecasts, this.simpleInputHandler);

    return (
      <div>
        {contents}
      </div>
    );
  }
}