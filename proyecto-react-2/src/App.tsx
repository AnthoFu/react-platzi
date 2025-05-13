import './App.css'
import RenderProductos from './components/staticComponent/staticComponent'
import UserListWithLoading from './components/userListWithLoading/userListWithLoading'
import SearchPosts from './components/searchPosts/searchPosts'

function App() {
  return (
  <div>
    <RenderProductos/>
    <hr />
    <UserListWithLoading/>
    <hr />
    <SearchPosts/>
  </div>
  )
  
}

export default App
