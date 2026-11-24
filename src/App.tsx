import { useEffect, useState } from 'react'
import './App.css'
import type { Konyv } from './types/Konyv';
import { KonyvRow } from './components/KonyvRow';

function App() {
  const [oldalAllapot, setOldal] = useState("Felhasználó");
  const [konyvek, setKonyvek] = useState<Konyv[]>([]);
  const [trigger, setTrigger] = useState(false);
  const [cim, setCim] = useState("");
  const [ar, setAr] = useState(0);
  const [kiadas_datuma, setKiadasDatuma] = useState<Date>();
  const [keszleten, setKeszleten] = useState<boolean>();
  const [szerzo, setSzerzo] = useState("");
  const [mufaj, setMufaj] = useState("");
  useEffect(() => {
    async function load() {
      try {
        const response = await fetch("http://localhost:3000/konyvek");
        if (!response.ok) {
          throw new Error("Hiba az adatbetöltéskor")
        }
        const data = await response.json() as Konyv[];
        setKonyvek(data)
      }
      catch (error) {
        if (error instanceof Error) {
          console.error(error.message)
        }
      }
    }
    load()
  }, [trigger])
  return (
    <>
      <div className="container">
        <header>
          <h1>Könyváruház</h1>
          <nav>
            <div className="row">
              <div className="col-sm-4">
                <button className='btn btn-primary w-100' onClick={() => setOldal("Felhasználó")}>Felhasználó oldal</button>
              </div>
              <div className="col-sm-4">
                <button className='btn btn-primary w-100' onClick={() => setOldal("Moderátor")}>Moderátor oldal</button>
              </div>
              <div className="col-sm-4">
                <button className='btn btn-primary w-100' onClick={() => setOldal("Admin")}>Admin oldal</button>
              </div>
            </div>
          </nav>
        </header>
        <main>
          {oldalAllapot == "Felhasználó" ?
            <>
              <h2>Könyveink listája</h2>
              <table className="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th>Cím</th>
                    <th>Oldalak száma</th>
                    <th>Kiadás dátuma</th>
                    <th>Készleten van</th>
                    <th>Szerző</th>
                    <th>Műfaj</th>
                  </tr>
                </thead>
                <tbody>
                  {konyvek.map(konyv => (
                    <KonyvRow key={konyv.id} konyv={konyv} oldal={oldalAllapot} setTrigger={setTrigger}/>
                  ))}
                </tbody>
              </table>
            </>
            : oldalAllapot == "Moderátor" ?
              <>
                <h2>Könyveink listája</h2>
                <table className="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th>Cím</th>
                      <th>Oldalak száma</th>
                      <th>Kiadás dátuma</th>
                      <th>Készleten van</th>
                      <th>Szerző</th>
                      <th>Műfaj</th>
                      <th>Műveletek</th>
                    </tr>
                  </thead>
                  <tbody>
                    {konyvek.map(konyv => (
                      <KonyvRow key={konyv.id} konyv={konyv} oldal={oldalAllapot} setTrigger={setTrigger}/>
                    ))}
                  </tbody>
                </table>
              </>
              : 
              <>
                <h2>Könyveink listája</h2>
                <table className="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th>Cím</th>
                      <th>Oldalak száma</th>
                      <th>Kiadás dátuma</th>
                      <th>Készleten van</th>
                      <th>Szerző</th>
                      <th>Műfaj</th>
                      <th>Műveletek</th>
                    </tr>
                  </thead>
                  <tbody>
                    {konyvek.map(konyv => (
                      <KonyvRow key={konyv.id} konyv={konyv} oldal={oldalAllapot} setTrigger={setTrigger}/>
                    ))}
                  </tbody>
                </table>
                <h2>Új könyv felvétele</h2>
                <form>
                    <label htmlFor="cim" className="form-label"></label>
                    <input type="text" name="cim" value={cim} onChange={(e) => setCim(e.target.value)}/>
                    <label htmlFor="ar" className="form-label"></label>
                    <input type="text" name="ar" value={ar} onChange={(e) => setAr(Number.isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value))}/>
                    <label htmlFor="kiadas_datuma" className="form-label"></label>
                    <input type="datetime" name="ar" value={kiadas_datuma?.toString()} onChange={(e) => setKiadasDatuma(new Date(e.target.value))}/>
                </form>
              </>}
        </main>
      </div>
    </>
  )
}

export default App
