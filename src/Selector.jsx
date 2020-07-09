import { Component, createElement } from "react";
import { hot } from "react-hot-loader/root";

import Select from 'react-select'

import "./ui/Selector.css";

class Selector extends Component {
  constructor(props) {
    super(props)
    this._getOptions = this._getOptions.bind(this);
  }
  _getOptions() {
    const { dsOptions, attText } = this.props;
    return dsOptions.status !== "available" ? null : dsOptions.items.map((i) => {
      return { value: attText(i).value, label: attText(i).displayValue }
    });
  }
  render() {
    return (
      <Select options={this._getOptions()} />
    );
  }
}

export default hot(Selector);
