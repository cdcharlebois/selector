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
    // return dsOptions.status !== "available" ? null : dsOptions.items.map((i) => {
    //   return { value: attText(i).value, label: attText(i).displayValue }
    // });
    return dsOptions.status !== "available" ? null : dsOptions.items;
  }
  render() {
    const { widOption, dsOptions } = this.props;
    const CustomOption = (innerProps) => widOption(innerProps.data)
    return (
      <Select
        components={{ Option: CustomOption }}
        options={this._getOptions()}
      />
    );
  }
}

export default hot(Selector);
