import * as React from "react";
import { Table, CheckBox } from "./Pure";

interface IEvent {
    name: string;
    id: string;
    date: string;
    place: string;
    ChooseEvent:() => void;
    
}
const Event:React.FC<IEvent> = ({ name, id, date, place }) => {
  return (
    <tr>
      <td>
        <CheckBox id={id} onChange={()=>{}} />
      </td>
      <td> {name} </td>
      <td> {date} </td>
      <td> {place} </td>
    </tr>
  );
};
export interface IEvents {
    searchText: string;
    events
}
const Events:React.FC<IEvents> = props => {
    //const { events, searchText, ChooseEvent } = props;
    const { searchText } = props;
    const rows:Array<any> = [];
    events.forEach((item, index) => {
      if (item.name.indexOf(searchText) === -1) {
        return;
      }
      rows.push(
        <Event
          key={item.id}
          id={item.id}
          //ChooseEvent={ChooseEvent}
          date={item.date}
          place={item.place}
          name={item.name}
        />
      );
    });
    return (
      <div className="event__table">
        <Table rows={rows} />
      </div>
    );
}
// const Events:React.FC = (props) => {
//     console.log(props);
//     return (
//         <span>dfbvf</span>
//     )
// }
export default Events;

