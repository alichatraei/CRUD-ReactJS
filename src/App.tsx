import { useState } from 'react';
import { Header, TableSection } from './components/AllComponents'
import './App.styles.css';
interface IDataState {
  name: string;
  lastName: string;
  username: string
}

function App() {
  const [data, setData] = useState<IDataState[] | []>([])
  return (
    <div className="App">
      <Header inputText="Search here" data={data} setData={setData} />
      <TableSection data={data} setData={setData} />
    </div>
  );
}

export default App;
