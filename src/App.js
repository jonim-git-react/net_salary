import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; // {usestate} täytyy importata, jos sitä haluaa käyttää
import FillOptions from './FillOptions';
//tässä tehtävässä käytetty bootstrappia
function App() {
  const [salary, setSalary] = useState(0)
  const [taxPercent, setTax] = useState(0);
  const [pension, setPension] = useState(0);
  const [insurance, setInsurance] = useState(0);
  const [salaryAfter, setResult] = useState(0);
  const [tax, setTaxes] = useState(0);
  const [pen, setPen] = useState(0);
  const [ins, setIns] = useState(0);


  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setTaxes(salary * taxPercent * 0.01)
  //   setPen(salary * pension * 0.01)
  //   setIns(salary * insurance * 0.01)
  //   // setPension(pensions)
  //   // setInsurance(insurances)
  //   setResult(salary - (tax + pen + ins))

  // }

  function handleSubmit(e) {
    e.preventDefault();
    setTaxes(salary * taxPercent * 0.01)
    setPen(salary * pension * 0.01)
    setIns(salary * insurance * 0.01)
    setResult(salary - (salary * taxPercent * 0.01
      + salary * pension * 0.01
      + salary * insurance * 0.01))

  }
  return (
    <div id="container">
      <h3>Loan calculator</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 col-6">
          <label for="salary" className="form-label">Salary</label>
          <input type="number" value={salary} onChange={e => setSalary(e.target.value)} className="form-control" id="salary" />
        </div>
        <div className="mb-3 col-6">
          <label for="taxPercent" className="form-label">Tax (%)</label> <output className="ms-3">{tax} €</output>
          <input type="number" value={taxPercent} onChange={e => setTax(e.target.value)} className="form-control" id="taxPercent" />
        </div>
        <div className="mb-3 col-6">
          <label for="pension" className="form-label">Pension (%)</label> <output className="ms-3">{pen} €</output>
          <select className="form-select" aria-label="insert pension" value={pension} onChange={e => setPension(e.target.value)} className="form-control" id="pension" >
            {/* <option value="0.25">0.25 %</option>
            <option value="0.5">0.5 %</option>
            <option value="0.75">0.75 %</option>
            <option value="1.0">1.0 %</option>
            <option value="1.25">1.25 %</option>
            <option value="1.50">1.50 %</option>
            <option value="1.75">1.75 %</option>
            <option value="2.0">2.0 %</option>
            <option value="2.25">2.25 %</option>
            <option value="2.50">2.5 %</option>
            <option value="2.75">2.75 %</option>
            <option value="3.00">3.0 %</option>
            <option value="3.25">3.25 %</option>
            <option value="3.50">3.50 %</option>
            <option value="3.75">3.75 %</option>
            <option value="4.00">4 %</option>
            <option value="4.25">4.25 %</option>
            <option value="4.50">4.50 %</option>
            <option value="4.75">4.75 %</option>
            <option value="5.00">5.0 %</option> */}
            <FillOptions />
          </select>
        </div>
        <div className="mb-3 col-6">
          <label for="insurance" className="form-label">Insurance (%) </label> <output className="ms-3">{ins} € </output>
          <select className="form-select" aria-label="insert insurance" value={insurance} onChange={e => setInsurance(e.target.value)} className="form-control" id="insurance" >
            {/* <option value="0.25">0.25 %</option>
            <option value="0.5">0.5 %</option>
            <option value="0.75">0.75 %</option>
            <option value="1.0">1.0 %</option>
            <option value="1.25">1.25 %</option>
            <option value="1.50">1.50 %</option>
            <option value="1.75">1.75 %</option>
            <option value="2.0">2.0 %</option>
            <option value="2.25">2.25 %</option>
            <option value="2.50">2.5 %</option>
            <option value="2.75">2.75 %</option>
            <option value="3.0">3.0 %</option>
            <option value="3.25">3.25 %</option>
            <option value="3.50">3.50 %</option>
            <option value="3.75">3.75 %</option>
            <option value="4.00">4 %</option>
            <option value="4.25">4.25 %</option>
            <option value="4.50">4.50 %</option>
            <option value="4.75">4.75 %</option>
            <option value="5.00">5.0 %</option> */}
            <FillOptions />
          </select>
        </div>
        <div className="mb-3 col-6">
          <label for="salaryAfter" className="form-label">Your salary after payments</label>
          <output type="number" className="form-control" id="salaryAfter">{salaryAfter}</output>
        </div>
        <button type="submit" className="btn btn-primary">Calculate</button>
      </form>
    </div>
  );
}

export default App;
