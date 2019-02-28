import React from "react";
import { storiesOf } from "@storybook/react";
import { Button, ButtonAction, ButtonActionInput } from "../src";

storiesOf("Button", module).add(
  "Button - regular",
  () => (
    <React.Fragment>
      <Button
        label={"Button Regular"}
        buttonType="regular"
        color="orange"
        onClick={() => {
          alert("Button clicked");
        }}
      />
      <Button
        label={"Button Regular"}
        buttonType="regular"
        color="blue"
        onClick={() => {
          alert("Button clicked");
        }}
      />
      <Button
        label={"Button Regular"}
        buttonType="regular"
        color="green"
        onClick={() => {
          alert("Button clicked");
        }}
      />
      <Button
        label={"Button Regular"}
        buttonType="regular"
        color="red"
        onClick={() => {
          alert("Button clicked");
        }}
      />
      <Button
        label={"Button Regular"}
        buttonType="regular"
        color="gray"
        onClick={() => {
          alert("Button clicked");
        }}
      />
    </React.Fragment>
  ),
  { notes: "A very simple component" }
);

storiesOf("Button", module).add("Button - bordered", () => (
  <React.Fragment>
    <Button
      label="Button Bordered"
      buttonType="bordered"
      color="orange"
      onClick={() => {
        alert("Button clicked");
      }}
    />
    <Button
      label="Button Bordered"
      buttonType="bordered"
      color="blue"
      onClick={() => {
        alert("Button clicked");
      }}
    />
    <Button
      label="Button Bordered"
      buttonType="bordered"
      color="green"
      onClick={() => {
        alert("Button clicked");
      }}
    />
    <Button
      label="Button Bordered"
      buttonType="bordered"
      color="red"
      onClick={() => {
        alert("Button clicked");
      }}
    />
    <Button
      label="Button Bordered"
      buttonType="bordered"
      color="gray"
      onClick={() => {
        alert("Button clicked");
      }}
    />
    <Button
      label="Button Bordered"
      buttonType="bordered"
      color="black"
      onClick={() => {
        alert("Button clicked");
      }}
    />
  </React.Fragment>
));

storiesOf("Button", module).add("Button - validate", () => (
  <React.Fragment>
    <Button
      label="Button Validate"
      buttonType="validate"
      color="blue normal mr-2"
    />
    <Button
      label="Button Validate"
      buttonType="validate"
      color="red normal"
    />
  </React.Fragment>
));

storiesOf("Button", module).add("Button - with icon", () => (
  <React.Fragment>
    <Button
      label="Button with icon"
      buttonType="regular"
      color="orange"
      iconActionType="update"
      iconColor="white"
      onClick={() => {
        alert("Button clicked");
      }}
    />
    <Button
      label="Button with icon"
      buttonType="regular"
      color="green"
      iconActionType="update"
      iconColor="white"
      onClick={() => {
        alert("Button clicked");
      }}
    />
  </React.Fragment>
));

storiesOf("Button", module).add("Button - with icon left", () => (
  <Button
    label="Button with icon"
    buttonType="bordered"
    color="orange"
    iconActionType="clock icon-left"
    iconColor="orange"
    onClick={() => {
      alert("Button clicked");
    }}
  />
));

storiesOf("Button", module).add("Button - action", () => (
  <React.Fragment>
    <ButtonAction
      iconColor="gray"
      buttonActionType="delete"
      buttonIconType="delete"
      onClick={() => {
        alert("Trash button clicked");
      }}
    />
    <br />
    <ButtonAction
      iconColor="gray"
      buttonActionType="clock"
      buttonIconType="clock"
      onClick={() => {
        alert("Clock button clicked");
      }}
    />
    <br />
    <ButtonAction
      iconColor="green"
      buttonActionType="check"
      buttonIconType="check"
      onClick={() => {
        alert("Check button clicked");
      }}
    />
    <br />
    <ButtonAction
      iconColor="red"
      buttonActionType="warning"
      buttonIconType="warning"
      onClick={() => {
        alert("Warning button clicked");
      }}
    />
  </React.Fragment>
));

storiesOf("Button", module).add("Button - action with title", () => (
  <React.Fragment>
    <ButtonAction
      iconColor="gray"
      buttonActionType="clock custom"
      buttonIconType="clock"
      title="runing"
      onClick={() => {
        alert("Clock button clicked");
      }}
    />
    <ButtonAction
      iconColor="red"
      buttonActionType="warning custom"
      buttonIconType="warning"
      title="failed"
      onClick={() => {
        alert("Warning button clicked");
      }}
    />
    <ButtonAction
      iconColor="green"
      buttonActionType="check custom"
      buttonIconType="check"
      title="finished"
      onClick={() => {
        alert("Check button clicked");
      }}
    />
  </React.Fragment>
));

storiesOf("Button", module).add("Button - action input", () => (
  <ButtonActionInput
    buttonColor="green"
    iconColor="white"
    buttonActionType="delete"
    buttonIconType="arrow-right"
  />
));
