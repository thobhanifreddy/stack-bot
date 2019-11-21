import React from "react";
import { List, Avatar, Modal, Typography } from "antd";
import moment from "moment";

interface QurstionPropsInterface {
  question: any;
  loading: boolean;
}

interface QurstionStateInterface {
  showModal: boolean;
}

class Question extends React.Component<
  QurstionPropsInterface,
  QurstionStateInterface
> {
  constructor(props: QurstionPropsInterface) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  render() {
    const { question } = this.props;
    return (
      <React.Fragment>
        <List.Item
          onClick={() => this.setState({ showModal: true })}
          style={{ cursor: "pointer" }}
        >
          <List.Item.Meta
            avatar={
              <Avatar
                src={question.owner.profile_image}
                style={{ margin: 10 }}
              />
            }
            title={question.title}
            description={
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginRight: 20
                }}
              >
                <p>{question.owner.display_name}</p>
                <p>{moment.unix(question.creation_date).fromNow()}</p>
              </div>
            }
          />
        </List.Item>
        <Modal
          title={
            <div
              style={{ cursor: "pointer" }}
              onClick={() => window.open(question.link)}
            >
              {" "}
              <Typography.Title level={3}>
                {question.title}
              </Typography.Title>{" "}
            </div>
          }
          visible={this.state.showModal}
          okText={"Go To Stackoverflow"}
          onOk={() => window.open(question.link)}
          onCancel={() => this.setState({ showModal: false })}
          width={700}
          bodyStyle={{ height: 400, overflowY: "scroll" }}
        >
          <div dangerouslySetInnerHTML={{ __html: question.body }}></div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Question;
