import React, { useState } from 'react'
// import { useSelector } from 'react-redux';
import styles from '../styles/modules/app.module.scss';
import Button from './Button';
import SelectButton from './SelectButton';
import TodoModal from './TodoModal.jsx';



const AppHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);
  // const initialFilterStatus = useSelector((state) => state.filterStatus);
  // const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
  return (
    <div className={styles.appHeader}>
      <Button variant='primary' onClick={() => setModalOpen(true)}>
        Add Task
      </Button>
      <SelectButton
        id="status"
      // onChange={(e) => updateFilter(e)}
      // value={filterStatus}
      >
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Completed</option>
      </SelectButton>
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  )
}

export default AppHeader