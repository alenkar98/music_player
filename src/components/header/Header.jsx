import AddAllButton from '../addAllButton/AddAllButton';
import Filter from '../filter/Filter';
import PlayAllButton from '../playAllButton/PlayAllButton';
import './header.css';
import Sort from '../sort/Sort';

export default function Header() {
  return (
    <header>
      <div className="playerLeft">
        <PlayAllButton />
        <AddAllButton />
      </div>
      <div className="playerRight">
        <Sort />
        <Filter />
      </div>
    </header>
  );
}
