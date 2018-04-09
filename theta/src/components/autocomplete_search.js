import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import 'font-awesome/css/font-awesome.min.css';

const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Black',
  'White',
];

const menuProps = {
  desktop: true,
  disableAutoFocus: true,
};

const styles = {
  };

/**
 * Provide props to be passed into the Menu component.
 */
export default class AutoCompleteExampleMenuProps extends Component {
  render() {
    return (
      <div style={styles}>
        <AutoComplete
          hintText="Search"
          dataSource={colors}
          menuProps={menuProps}
        fullWidth={true}
        textFieldStyle={{fontSize: 28}}
        />
        </div>
    );
  }
}