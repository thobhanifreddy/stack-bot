import React from "react";
import { List, Avatar } from "antd";
import Question from "../question";

interface QuestionsStateInterface {
  questions: Array<any>;
  loading: boolean;
  page: number;
}

class Questions extends React.Component<any, QuestionsStateInterface> {
  constructor(props: any) {
    super(props);
    this.state = {
      questions: [],
      loading: false,
      page: 1
    };
  }

  componentDidMount = () => {
    this.fetchQuestions(this.state.page);
    window.addEventListener("scroll", () => {
      let disatanceScrolled: number = window.innerHeight + document.documentElement.scrollTop 
      let totalHeight: number = document.documentElement.scrollHeight
      if (
        (disatanceScrolled < totalHeight / 1.5  ) 
      )
        return;
      this.setState({ page: this.state.page + 1 });
      this.fetchQuestions(this.state.page);
    });
  };

  fetchQuestions = async (page: number) => {
    this.setState({ loading: true });
    try {
    const response = await fetch(
      `https://api.stackexchange.com/2.2/questions?page=${page}&pagesize=20&order=desc&sort=creation&site=stackoverflow&filter=withBody`
    );
    let fetchedQuestions = await response.json();
    fetchedQuestions = fetchedQuestions.items;
    let questions = this.state.questions.concat(fetchedQuestions);
    this.setState({ questions, loading: false });
    } catch(error) {
      alert(error)
    }
  };
  

  render() {
   
    const { questions, loading } = this.state;
    return (
      questions && (
        <List
          itemLayout="horizontal"
          dataSource={questions}
          renderItem={question => (
            <Question loading={loading} question={question} />
            
            
          )}
        />
      
      )
    );
  }
}

export default Questions;
