import * as React from 'react';

interface IButton {
    btnClass?: string,
    text: string,
    onClick(e: React.SyntheticEvent): void,
}

const Button: React.FC<IButton> = ({ onClick, text, btnClass }) => {
    return (
        <button className={btnClass} onClick={onClick}>
            {text}
        </button>
    );
};

interface IInput {
    value: string,
    placeHolder: string,
    onChange(e: React.SyntheticEvent): void,
}

const Input:React.FC<IInput> = ({ onChange, placeHolder, value }) => {
  return (
    <input
      type="text"
      onChange={onChange}
      placeholder={placeHolder}
      value={value}
    />
  );
};

// const Select = ({ items }) => {
//   return (
//     <select>
//       {items.map(item => {
//         return <option key={item.id}> {item.place} </option>;
//       })}
//     </select>
//   );
// };
interface ICheckBox {
    id: string,
    onChange(e: React.SyntheticEvent): void,
}
const CheckBox:React.FC<ICheckBox> = ({ onChange, id }) => {
  return <input id={id} onChange={onChange} type="checkbox" />;
};

interface ITable {
    rows:React.ReactNode[];
}
const Table:React.FC<ITable> = ({ rows }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td />
          <td>Название:</td>
          <td>Дата:</td>
          <td>Место проведения</td>
        </tr>
        {rows}
      </tbody>
    </table>
  );
};

export { Button, Input, CheckBox, Table };
