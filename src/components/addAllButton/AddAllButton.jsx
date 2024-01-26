import { IoAdd } from 'react-icons/io5';
import './addAllButton.css';
import { useDispatch, useSelector } from 'react-redux';
import { addAllSongsToQueue, clearQueue } from '../../redux/action/songAction';

export default function AddAllButton() {
  const dispatch = useDispatch();
  const queue = useSelector((state) => state.song.queue);
  const handleAddAllButton = () => {
    if (queue.length > 1) {
      dispatch(clearQueue());
      console.log('All songs cleared from queue');
    } else {
      console.log('All songs added to queue');
      dispatch(addAllSongsToQueue());
    }
  };

  return (
    <button className="addAll" onClick={handleAddAllButton}>
      <IoAdd style={{ display: queue.length > 1 ? 'none' : 'inline-block' }} />
      <span>{queue.length > 1 ? 'Clear All' : 'Add All'}</span>
    </button>
  );
}
