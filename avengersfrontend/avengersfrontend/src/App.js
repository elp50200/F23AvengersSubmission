import logo from './logo.svg';
import './App.css';
import {Container} from 'react-bootstrap';
import {Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import Header from './components/Header'
import SaveForm from './pages/user/SaveForm';
import Home from './pages/changerequest/Home';
import LoginForm from './pages/user/LoginForm';
import ChangeRequestList from './pages/changerequest/ChangeRequestList';
import CreateChangeRequest from './pages/changerequest/CreateChangeRequest';
import ReviewChangeRequest from './pages/changerequest/reviewChangeRequest';
import WebsiteHealth from './pages/WebsiteHealth';
import SingleChangeRequest from './pages/changerequest/SingleChangeRequest';
import CompletedRequestList from './pages/changerequest/CompletedRequestList';

function App() {
  return (
    <div>
      <Header/>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/changelist/:userID" element={<ChangeRequestList />} />
          <Route path="/user/:userID/singleChangeRequest/:changeNumber" element={<SingleChangeRequest />} />
          <Route path="/createChangeRequest/:userID" element={<CreateChangeRequest />} />
          <Route path="/completedRequest" element={<CompletedRequestList />} />
          <Route path="/createChangeRequest/:userID/review" element={<ReviewChangeRequest />} />
          <Route path="/health" element={<WebsiteHealth />} />
        </Routes>
      </Container>    
    </div>
  );
}


export default App;
