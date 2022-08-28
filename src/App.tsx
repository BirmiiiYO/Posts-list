import CreatePostBlock from './components/CreatePostBlock/CreatePostBlock';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Pagin from './components/Pagination/Pagination';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <>
      <CreatePostBlock />
      <div className="app">
        <div className="container">
          <div className="content">
            <Header />
            <Input />
            <main>
              <Posts />
            </main>
            <Pagin />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
