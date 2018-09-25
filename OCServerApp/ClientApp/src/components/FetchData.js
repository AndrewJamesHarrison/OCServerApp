import React, { Component } from 'react';
import { Property } from './Property';
import '../index.css';

export class FetchData extends Component {
    displayName = FetchData.name;
  constructor(props) {
    super(props);
      this.state = { viewPorts: undefined, currentPage: 1, totalPages: 1, loading: true };
      this.buttonPageChangeHandler = this.buttonPageChangeHandler.bind(this);
      this.inputPageChangeHandler = this.inputPageChangeHandler.bind(this);
      this.simpleChangeHandler = this.simpleChangeHandler.bind(this);
      fetch('api/SampleData/GetViewPorts')
          .then(response => response.json())
          .then(data => {
              this.setState({ viewPorts: data.viewPorts, totalPages: data.pageCount, currentPage: 1, loading: false });
          });
    }

    simpleChangeHandler(e) {
        //let viewPorts = [...this.state.viewPorts];
        //viewPorts[e.target.viewPortIndex].groups[e.target.groupIndex].properties[e.target.propertyIndex] = e.target.value;
        //this.setState({ viewPorts: viewPorts });
    };

    buttonPageChangeHandler = (e) => this.setState({ currentPage: (e) });

    inputPageChangeHandler = (e) => {
        var i = parseInt(e.target.value);
        if (!isNaN(i)) {
            this.setState({ currentPage: (i) })
        }
    };

    static renderViewPort(viewPorts, page) {
      return (
          <div class="container column">
              {
                  viewPorts[page].groups.map((group, groupIndex) => 
                  <div class="container">
                      <h2>{group.name}</h2>
                      <div class="container column">
                          {
                              group.properties.map((p, propertyIndex) =>
                                  <Property pName={p.name} pValue={p.value} pDisplay={p.display}/>
                              )
                          }
                      </div>
                  </div>
                )
              }
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
                <button name="PreviousPage" onClick={e => this.buttonPageChangeHandler(this.state.currentPage - 1)} disabled={this.state.currentPage <= 1}> Previous </button>
                <input type="number" value={this.state.currentPage} onChange={e => this.inputPageChangeHandler(e)} max={this.state.totalPages} min={1}/>
                <button name="NextPage" onClick={e => this.buttonPageChangeHandler(this.state.currentPage + 1)} disabled={this.state.currentPage >= this.state.totalPages}> Next </button>
                <p>Page {this.state.currentPage} of {this.state.totalPages}</p>
            </div>
            <div>
                {contents}
            </div>
        </div>
    );
  }
}