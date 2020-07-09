import { Component, createElement } from "react";
import { hot } from "react-hot-loader/root";

import Select from 'react-select'

import "./ui/Selector.css";
class Selector extends Component {
  constructor(props) {
    super(props)
    this._getOptions = this._getOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  _getOptions() {
    const { dsOptions, attText } = this.props;
    // return dsOptions.status !== "available" ? null : dsOptions.items.map((i) => {
    //   return { value: attText(i).value, label: attText(i).displayValue }
    // });
    return dsOptions.status !== "available" ? null : dsOptions.items;
  }
  handleChange(option, actionType) {
    const { actSetter } = this.props;
    if (option != "" && actSetter(option) && actSetter(option).canExecute) {
      actSetter(option).execute();
    }
  }
  render() {
    const { widOption } = this.props;
    const formatOptionLabel = (item) => widOption(item);

    return (
      <Select
        options={this._getOptions()}
        formatOptionLabel={formatOptionLabel}
        onChange={this.handleChange}
      />
    );
  }
}

export default hot(Selector);
