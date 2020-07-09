import { Component, createElement } from "react";
import { hot } from "react-hot-loader/root";

import Select from 'react-select'

import "./ui/Selector.css";

class Selector extends Component {
  render() {
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
      <Select options={options} />
    );
  }
}

export default hot(Selector);
