import React from "react";
import { connect } from "react-redux";
import { add as addMessage } from "../actions/messages";
import { Layout } from "antd";
import MessageList from "../components/MessageList";

const mapStateToProps = ({ messages }, ownProps) => ({
  messages,
  ...ownProps
});

class MessageLayout extends React.Component {
  handleSubmitMessage(message) {
    this.props.dispatch(addMessage(message));
  }

  render() {
    return (
      <Layout style={{ height: "calc(100%)" }}>
        <Layout.Content style={{ padding: "0 50px", height: "calc(80%)" }}>
          <Layout
            style={{
              padding: "24px 0",
              background: "#fff",
              height: "calc(100%)"
            }}
          >
            <Layout.Content style={{ padding: "0 24px", height: "calc(80%)" }}>
              <MessageList />
            </Layout.Content>
          </Layout>
        </Layout.Content>
        <Layout.Footer
          style={{
            padding: "0 50px",
            textAlign: "center",
            height: "calc(20%)"
          }}
        >
          Write Message
        </Layout.Footer>
      </Layout>
    );
  }
}

export default connect(mapStateToProps)(MessageLayout);
