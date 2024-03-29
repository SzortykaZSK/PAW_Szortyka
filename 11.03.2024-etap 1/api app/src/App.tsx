import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import TablePage from './components/TablePage/TablePage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/user" element={<TablePage tableName='user'/>}/>
        <Route path="/profile" element={<TablePage tableName='profile'/>}/>
        <Route path="/post" element={<TablePage tableName='post'/>}/>
        <Route path="/comment" element={<TablePage tableName='comment'/>}/>
        <Route path="/tag" element={<TablePage tableName='tag'/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
