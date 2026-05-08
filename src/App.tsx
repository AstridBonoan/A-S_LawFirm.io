import { Compliance } from './components/Compliance'
import { Contact } from './components/Contact'
import { CorporateSecurities } from './components/CorporateSecurities'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { KeyTakeaways } from './components/KeyTakeaways'
import { PracticeAreas } from './components/PracticeAreas'
import { Transactions } from './components/Transactions'
import { WhyUs } from './components/WhyUs'

function App() {
  return (
    <div className="flex flex-col">
      {/* Exactly one viewport: header + hero fill the screen; no peek of next section */}
      <div className="flex h-svh max-h-svh min-h-0 flex-col overflow-hidden">
        <Header />
        <Hero />
      </div>
      <main>
        <PracticeAreas />
        <CorporateSecurities />
        <Compliance />
        <Transactions />
        <KeyTakeaways />
        <WhyUs />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
