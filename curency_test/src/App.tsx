import './App.css'
import Convert from './components/convert/Convert'
import { StoreProvider, createStore } from './store/utils'

function App() {
  const store = createStore();

  return (
    <>
      <StoreProvider value={store}>
        <Convert />
      </StoreProvider>
    </>
  )
}

export default App
