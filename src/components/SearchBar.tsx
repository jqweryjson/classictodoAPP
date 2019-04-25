import * as React from 'react';
import { Button, Input } from './Pure';

const SearchBar: React.FC = () => {
  return (
    <div className="event__search">
      <Button onClick={()=>{}} text="+" />
      <Button onClick={()=>{}} text="	−" />
      <Input value={''} placeHolder={''} onChange={()=>{}} />
    </div>
  );
}

export default SearchBar; 