import React from "react";
import { PageHeader } from 'antd';
import './App.css';

import Questions from "./components/questions";



const App: React.FC = () => {
  return (
    <div>
        <PageHeader 
            ghost={false}
            title="Stack Bot" />
        <Questions />
    </div>
  );
};

export default App;
