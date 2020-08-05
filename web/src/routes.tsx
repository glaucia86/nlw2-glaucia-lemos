import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Lading';
import TeacherList from './pages/TeacherList';
import TeachForm from './pages/TeacherForm';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeachForm} />  
    </BrowserRouter>
  );
}

export default Routes;