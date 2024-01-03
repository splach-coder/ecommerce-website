import { useTranslation } from 'react-i18next';
import Header from './components/Header/Header'

function App() {
  const { t } = useTranslation();
  

  return (
    <>
    <Header />
    <h1>{t('helloWorld')}</h1>
    </>
  )
}

export default App
