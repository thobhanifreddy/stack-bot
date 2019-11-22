import React from "react";
import { List, Avatar } from "antd";
import Question from "../question";
import { timeout } from "q";

interface QuestionsStateInterface {
  questions: Array<any>;
  loading: boolean;
  outOfQuota: boolean;
  page: number;
  fetched: boolean
}

class Questions extends React.Component<any, QuestionsStateInterface> {
  constructor(props: any) {
    super(props);
    this.state = {
      questions: [],
      loading: false,
      page: 1,
      outOfQuota: false,
      fetched: false
    };
  }

  componentDidMount = () => {
    this.fetchQuestions(this.state.page);

    window.addEventListener("scroll", async () => {

      let disatanceScrolled: number = window.innerHeight + document.documentElement.scrollTop 
      let totalHeight: number = document.documentElement.offsetHeight
      if (disatanceScrolled <= totalHeight / 2 || this.state.fetched )
      {
        return;
      }
        
      this.setState({ page: this.state.page + 1, fetched:true });
      await this.fetchQuestions(this.state.page);
      this.setState({fetched: false})
     
    });

    
  };

  fetchQuestions = async (page: number) => {
    this.setState({ loading: true });
    try {
    const response = await fetch(
      `https://api.stackexchange.com/2.2/questions?page=${page}&pagesize=20&order=desc&sort=creation&site=stackoverflow&filter=withBody`
    );
    let fetchedQuestions = await response.json();
    if (fetchedQuestions.items) {
      fetchedQuestions = fetchedQuestions.items;
    let questions = this.state.questions.concat(fetchedQuestions);
    this.setState({ questions, loading: false });
    } else {
      this.setState({outOfQuota: true, loading: false})
    }
    } catch(error) {
      console.log(error.message)
      this.setState({outOfQuota: true, loading: false})
    }
  };
  

  render() {
    const { questions, loading, outOfQuota } = this.state;

    if (loading && questions.length === 0 ) return <></>
    if(outOfQuota) return <h3>Sorry, You have corssed the quota</h3>
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
