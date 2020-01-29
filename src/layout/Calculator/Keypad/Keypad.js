import React from 'react';
import KeypadRow from './KeypadRow/KeypadRow';
import Button from '../../../components/Button/Button';

const keypad = (props) => (
  <section className="keypad">
    <KeypadRow>
      <Button typeId="clear" onButtonPress={props.onButtonPress}>C</Button>
      <Button onButtonPress={props.onButtonPress}>&larr;</Button>
      <Button onButtonPress={props.onButtonPress}>%</Button>
      <Button typeId="divide" onButtonPress={props.onButtonPress}>/</Button>
    </KeypadRow>

    <KeypadRow>
      <Button typeId="nine" onButtonPress={props.onButtonPress}>9</Button>
      <Button typeId="eight" onButtonPress={props.onButtonPress}>8</Button>
      <Button typeId="seven" onButtonPress={props.onButtonPress}>7</Button>
      <Button typeId="multiply" onButtonPress={props.onButtonPress}>*</Button>
    </KeypadRow>

    <KeypadRow>
      <Button typeId="six" onButtonPress={props.onButtonPress}>6</Button>
      <Button typeId="five" onButtonPress={props.onButtonPress}>5</Button>
      <Button typeId="four" onButtonPress={props.onButtonPress}>4</Button>
      <Button typeId="subtract" onButtonPress={props.onButtonPress}>-</Button>
    </KeypadRow>

    <KeypadRow>
      <Button typeId="three" onButtonPress={props.onButtonPress}>3</Button>
      <Button typeId="two" onButtonPress={props.onButtonPress}>2</Button>
      <Button typeId="one" onButtonPress={props.onButtonPress}>1</Button>
      <Button typeId="add" onButtonPress={props.onButtonPress}>+</Button>
    </KeypadRow>

    <KeypadRow>
      <Button typeId="zero" onButtonPress={props.onButtonPress}>0</Button>
      <Button typeId="decimal" onButtonPress={props.onButtonPress}>.</Button>
      <Button type="large" typeId="equals" onButtonPress={props.onButtonPress}>=</Button>
    </KeypadRow>
  </section>
)

export default keypad;
