import React, { Component } from 'react';
import { Cards, Charts, CountryPicker, Header , Footer } from './components';
import { fetchData } from './api'
class App extends Component {

  state = {

    data: {},
    country: '',
  }

  async componentDidMount() {

    const data = await fetchData();

    this.setState({ data: data });
  }


  handleCountryChange = async (country) => {

    const data = await fetchData(country);
    this.setState({ data: data, country: country });

  }

  render() {
    const { data, country } = this.state
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Charts data={data} country={country} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;