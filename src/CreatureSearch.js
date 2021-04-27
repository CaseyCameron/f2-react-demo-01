import { Component } from 'react';
import './CreatureSearch.css';

export default class CreatureSearch extends Component {
  render() {
    return (
      <form className="CreatureSearch">
        <input/>
        <select>
          <option value="">all</option>
          <option value="name">by name</option>
          <option value="by lives">by horns</option>
        </select>

        <button>Submit</button>

      </form>

    );
  }
}