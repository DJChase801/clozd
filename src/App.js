import './App.css';
import axios from 'axios';
import Header from './components/Header';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails'
import {useState, useEffect} from 'react'; 

const App = () => {
  const [users, setUsers] = useState([]); 
  const [user, setUser] = useState(''); 
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {

    const fetchItems = async () => {
      //perfomr two fetches because api only can get 5000 at a time.
      const result = await axios('https://randomuser.me/api/?results=5000');
      const moreResult = await axios('https://randomuser.me/api/?results=2000');
      setUsers(result.data.results.concat(moreResult.data.results)); 
      setIsLoading(false); 
      //make sure it's not fetching when changing between details page. 
      console.log('fetch occured');
    }

    fetchItems(); 
  }, [])

  const loadUser = (loginUuid) => {
    //set user to the matching login id 
    const user = users.find(x => x.login.uuid === loginUuid);
    console.log(user);
    setUser(user)
  }

  return user === '' ? (
    <div className="container">
      <Header />
      <UserList isLoading={isLoading} users={users} userClick={loadUser} />
    </div>
  ) : (
    <div>
      <UserDetails user={user} setUser={setUser} />
    </div>
  );
}

export default App;
