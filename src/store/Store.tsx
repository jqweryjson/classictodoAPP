import { Reducer, createStore, bindActionCreators } from "redux";


interface IEvents {
    id: number,
    name: string,
    date: Date,
    place: string
}

const EVENTS = [
  {
    id: 0,
    name: "The first event",
    date: new Date(),
    place: "Industrial Area"
  },
  {
    id: 1,
    name: "The second event",
    date: new Date(),
    place: "Village-city"
  },
];

const initialState = {
  events: EVENTS,
  searchText: "",
  newName: "",
  newDate: new Date(),
  newCity: "",
  choosenEvents: [],
  isModalShow: false
};


const reducer:Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_INPUT_TEXT":
      return { ...state, searchText: action.payload.value };
    case "CHANGE_NEW_NAME":
      return { ...state, newName: action.payload.value };
    case "CHANGE_NEW_DATE":
      return { ...state, newDate: action.payload.value };
    case "CHANGE_NEW_CITY":
      return { ...state, newCity: action.payload.value };
    case "TOGGLE_MODAL":
      return { ...state, isModalShow: !state.isModalShow };
    case "CHOOSE_EVENT":
      let newArr = [...state.choosenEvents];
      let currentPos = newArr.indexOf(action.payload.id);
      if (currentPos > -1) {
        newArr.splice(currentPos, 1);
      } else {
        newArr.push(action.payload.id);
      }
      return {
        ...state,
        choosenEvents: newArr,
        // Array.from(
        //   new Set()
        // )
      };
    case "DELETE_EVENT":
      return {
        ...state,
        events: state.events.filter(
          (item:any) => state.choosenEvents.indexOf(item.id) === -1
        ),
        choosenEvents: []
      };
    case "NEW_EVENT":
      return {
        ...state,
        events: [...state.events, action.payload.newItem],
        newName: "",
        newDate: "",
        newCity: "",
        isModalShow: false
      };
    default:
      return state;
  }
};
const ChangeInputText = (e:any) => {
  e.persist();
  return {
    type: "CHANGE_INPUT_TEXT",
    payload: {
      value: e.target.value
    }
  };
};
const ChangeNewName = (e:any) => {
  e.persist();
  return {
    type: "CHANGE_NEW_NAME",
    payload: {
      value: e.target.value
    }
  };
};
const ChangeNewDate = (e:any) => {
  e.persist();
  return {
    type: "CHANGE_NEW_DATE",
    payload: {
      value: e.target.value
    }
  };
};
const ChangeNewCity = (e:any) => {
  e.persist();
  return {
    type: "CHANGE_NEW_CITY",
    payload: {
      value: e.target.value
    }
  };
};
const ToggleModal = () => {
  return {
    type: "TOGGLE_MODAL"
  };
};
const AddNewevent = () => {
  const state = Store.getState();
  return {
    type: "NEW_EVENT",
    payload: {
      newItem: {
        id: state.events.length,
        name: state.newName,
        date: state.newDate,
        place: state.newCity
      }
    }
  };
};
const DeleteEvent = () => {
  return {
    type: "DELETE_EVENT"
  };
};
const ChooseEvent = (id:number) => {
  return {
    type: "CHOOSE_EVENT",
    payload: {
      id: id
    }
  };
};
const Store = createStore(reducer);

const mapStateToProps = (state:any) => {
  return {
    events: state.events,
    searchText: state.searchText,
    newName: state.newName,
    newDate: state.newDate,
    isModalShow: state.isModalShow,
    choosenEvents: state.choosenEvents
  };
};
const mapDispatchToProps = (dispatch:any) => {
  return {
    ChangeInputText: bindActionCreators(ChangeInputText, dispatch),
    ChangeNewName: bindActionCreators(ChangeNewName, dispatch),
    ChangeNewDate: bindActionCreators(ChangeNewDate, dispatch),
    ChangeNewCity: bindActionCreators(ChangeNewCity, dispatch),
    AddNewevent: bindActionCreators(AddNewevent, dispatch),
    ToggleModal: bindActionCreators(ToggleModal, dispatch),
    ChooseEvent: bindActionCreators(ChooseEvent, dispatch),
    DeleteEvent: bindActionCreators(DeleteEvent, dispatch)
  };
};

export { Store, mapStateToProps, mapDispatchToProps };
