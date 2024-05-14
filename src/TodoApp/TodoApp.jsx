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
import SelectButton from './components/SelectButton';
import AppHeader from './components/AppHeader';
export class TodoApp extends Component {
  render() {
    return (
      <>
        <div className="container">
          <PageTitle>TODO List</PageTitle>
          <div className={styles.app__wrapper}>
            <AppHeader />


          </div>
          {/* <BuildingComponents /> */}
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

const BuildingComponents = () => {
  return (
    <div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><hr />
      <Button onClick={() => { toast.success('Please enter a title'); }}>
        Show Toast
      </Button>
      <Button variant='secondary' onClick={() => { toast.error('Please enter a title'); }}>
        Show Toast
      </Button>

      <br />
      <br />
      <br />

      <SelectButton
        id="status"
      // onChange={(e) => updateFilter(e)}
      // value={filterStatus}
      >
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Completed</option>
      </SelectButton>

    </div>
  )
}

export default TodoApp