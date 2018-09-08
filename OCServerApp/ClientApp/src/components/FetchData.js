import React, { Component } from 'react';
import { Property } from './Property';
import '../index.css';

export class FetchData extends Component {
    displayName = FetchData.name;
  constructor(props) {
    super(props);
      this.state = { viewPorts: undefined, currentPage: 1, totalPages: 1, loading: true };
      this.pageChangeHandler = this.pageChangeHandler.bind(this);
    //fetch('api/SampleData/GetGroups')
    //  .then(response => response.json())
    //    .then(data => {
    //    this.setState({ forecasts: data, loading: false });
    //      });

      fetch('api/SampleData/GetViewPorts')
          .then(response => response.json())
          .then(data => {
              this.setState({ viewPorts: data.viewPorts, totalPages: data.pageCount, currentPage: 1, loading: false });
          });
    }

    pageChangeHandler = (e) => this.setState({ currentPage: (e) });

    static renderViewPort(viewPorts, page) {
      return (
          <div class="container column">
              {viewPorts[page].groups.map((group) =>
                  <div class="container">
                      <h2>{group.name}</h2>
                      <div class="container column">
                      {group.properties.map((p) =>
                          <Property pName={p.name} pValue={p.value} pDisplay={p.display} />
                          )}
                          </div>
                  </div>
                  )}
          </div>
    );
  }

  render() {
    let contents = this.state.loading
        ? <p><em>Loading...</em></p>
        : FetchData.renderViewPort(this.state.viewPorts, (this.state.currentPage-1));

    return (
        <div class="container row">
            <div class="container">
                <button name="PreviousPage" onClick={e => this.pageChangeHandler(this.state.currentPage - 1)} disabled={this.state.currentPage <= 1}> Previous </button>
                <input type="number" value={this.state.currentPage} onChange={e => this.pageChangeHandler(e.target.value)} max={this.state.totalPages} min={1}/>
                <button name="NextPage" onClick={e => this.pageChangeHandler(this.state.currentPage + 1)} disabled={this.state.currentPage >= this.state.totalPages}> Next </button>
                <p>Page {this.state.currentPage} of {this.state.totalPages}</p>
            </div>
            <div>
                {contents}
            </div>
        </div>
    );
  }
}