import * as React from 'react'; 
import SearchBar from './components/SearchBar';
import Events, {IEvents} from './components/Events';
import { mapStateToProps, mapDispatchToProps } from "./store/Store";
import { connect } from 'react-redux';
import './App.scss';

const App:React.FC<IEvents> = props => {
  return (
    <div className="event">
      <div className="event__header"> Мероприятия </div>
      <SearchBar {...props} />
      <Events {...props} />
    </div>
  );
}
const WrappedMainComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


export default WrappedMainComponent;
