import Home from './pages/Home';
import GlobalStyle from './styles/global';
import DataProvider from './contexts/datas';
function App() {
  return (
      <DataProvider>
        <GlobalStyle/>
        <Home/>
      </DataProvider>
    );
}

export default App;
