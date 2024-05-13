import React, { Component } from 'react';
import '@fontsource/poppins';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import './styles/GlobalStyles.css';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.scss';
import { Toaster, toast } from 'react-hot-toast';
import Button from './components/Button';
// import TodoList from './components/TodoList';

export class TodoApp extends Component {
  render() {
    return (
      <>
        <div className="container">

          <PageTitle>TODO List</PageTitle>

          <div className={styles.app_wrapper}>
            <h1>temp</h1>


          </div>


          {/* <Button variant = 'primary' onClick={() => {toast.error('Please enter a title');}}> */}
          <Button onClick={() => {toast.success('Please enter a title');}}>
            Show Toast
          </Button>
          <Button variant='secondary' onClick={() => {toast.error('Please enter a title');}}>
            Show Toast
          </Button>
          
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                fontSize: '1.4rem',
              },
            }}
          />


        </div>


      </>
    )
  }
}

export default TodoApp