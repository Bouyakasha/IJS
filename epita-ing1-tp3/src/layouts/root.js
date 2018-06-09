import React from "react";
import { Provider } from "react-redux";
import MessageLayout from "./Messages";
import "antd/dist/antd.css";

export default function Root(props) {
  return (
    <Provider store={props.store}>
      <MessageLayout />
    </Provider>
  );
}
