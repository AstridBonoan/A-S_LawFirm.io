import { Compliance } from './components/Compliance'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { PracticeAreas } from './components/PracticeAreas'
import { Transactions } from './components/Transactions'
import { WhyUs } from './components/WhyUs'

function App() {
  return (
    <div className="min-h-svh flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <PracticeAreas />
        <Compliance />
        <Transactions />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
