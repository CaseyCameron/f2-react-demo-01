import { Component } from 'react';
import './CreatureSearch.css';

export default class CreatureSearch extends Component {
  state = {
    nameFilter: '',
    sortField: ''
  }

  handleNameChange = ({ target }) => {
    this.setState({ nameFilter: target.value });
  }

  handleSearchChange = ({ target }) => {
    this.setState({ sortField: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //this.props.onSearch(this.state);
    console.log('hello');
  }

  render() {
    const { nameFilter, sortField } = this.state;

    return (
      <form className="CreatureSearch" onSubmit={this.handleSubmit}>

        <input name="nameFilter" value={nameFilter} onChange={this.handleNameChange} />

        <select name="sortField" value={sortField} onChange={this.handleSearchChange}>
          <option value="">all</option>
          <option value="name">by name</option>
          <option value="horns">by horns</option>
        </select>

        <button>Submit</button>

      </form>

    );
  }
}