import React, { useState, useEffect } from "react";
import { Country, State, City } from 'country-state-city';

export default function GeneralIndividual() {
  const [qualification, setQualification] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [countryRegisteredWith, setCountryRegisteredWith] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [residentialCountry, setResidentialCountry] = useState('');
  const [residentialState, setResidentialState] = useState('');
  const [residentialCity, setResidentialCity] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [sameAsCurrent, setSameAsCurrent] = useState(false);
  const handleQualificationChange = (event) => {
    setQualification(event.target.value);
  };

  const handleCountryChange = (event, setAddressCountry, setAddressState, setAddressCity) => {
    setAddressCountry(event.target.value);
    setAddressState('');
    setAddressCity('');
  };

  const handleStateChange = (event, setAddressState) => {
    setAddressState(event.target.value);
  };

  const handleCityChange = (event, setAddressCity) => {
    setAddressCity(event.target.value);
  };

  const handleCheckboxChange = () => {
    setSameAsCurrent(!sameAsCurrent);

    // If the addresses are the same, copy current address to residential address
    if (!sameAsCurrent) {
      setResidentialCountry(selectedCountry);
      setResidentialState(selectedState);
      setResidentialCity(selectedCity);
    } else {
      // Clear residential address fields if not the same
      setResidentialCountry('');
      setResidentialState('');
      setResidentialCity('');
    }
  };


  
  return (
      <div className="user-section m-3">
            <div className="row mb-3">
              <label htmlFor="Name" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" required id="Name" />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="inputPhoneNumber"
                className="col-sm-2 col-form-label"
              >
                Phone Number
              </label>
              <div className="col-sm-10">
                <input
                  type="tel"
                  className="form-control"
                  id="inputPhoneNumber" required
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3" required/>
              </div>
            </div>
            <div className="row mb-3">
        <label htmlFor="qualification" className="col-sm-2 col-form-label">
          Qualification
        </label>
        <div className="col-sm-10">
          <select
            className="form-control"
            id="qualification"
            onChange={(e) => setQualification(e.target.value)}
            value={qualification}
            required
          >
            <option value="" disabled>Select Qualification</option>
            <option value="BHMS">BHMS</option>
            <option value="MD">MD</option>
          </select>
        </div>
      </div>

      {qualification === 'MD' && (
        <div className="row mb-3">
          <label htmlFor="specialty" className="col-sm-2 col-form-label">
            Specialty
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="specialty"
              placeholder="Enter Specialty"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
            />
          </div>
        </div>
      )}
       <div className="row mb-3">
        <label htmlFor="registrationNumber" className="col-sm-2 col-form-label">
          Registration Number
        </label>
        <div className="col-sm-10">
        <input
          type="text"
          className="form-control"
          id="registrationNumber"
          placeholder="Enter Registration Number"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
          required
        />

        </div>
      </div>
       <div className="row mb-3">
        <label htmlFor="countryRegisteredWith" className="col-sm-2 col-form-label">
          Country Registered With
        </label>
        <div className="col-sm-10">
          <select
            className="form-control"
            id="countryRegisteredWith"
            onChange={(e) => setCountryRegisteredWith(e.target.value)}
            value={countryRegisteredWith}
            required
          >
            <option value="" disabled>Select Country</option>
            {Country.getAllCountries().map((country) => (
              <option key={country.isoCode} value={country.isoCode}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row mb-3">
              <label htmlFor="inputInstitution" className="col-sm-2 col-form-label">
                Institution attended for Homeopathy
              </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputInstitution" required/>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputRegisteredCouncil" className="col-sm-2 col-form-label">
              Registered Council
              </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputRegisteredCouncil" required />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputJob" className="col-sm-2 col-form-label">
                Current Job
              </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputJob" required />
              </div>
            </div>
    {/*address logic*/}
    {/*cyrr address*/}
    <div className="row mb-3">
              <label htmlFor="currentAddress" className="col-sm-2 col-form-label">
                Current Address
              </label>
              <div className="col-sm-10">
                <div className="mb-3">
                  <input type="text" className="form-control" id="inputLane1" placeholder="Lane 1" required/>
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" id="inputLane2" placeholder="Lane 2" required/>
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" id="inputPincode" placeholder="Pincode" required/>
                </div>
                <div className="row mb-3">
        <label htmlFor="selectCountry" className="col-sm-2 col-form-label">
          Country
        </label>
        <div className="col-sm-10">
          <select
            className="form-control"
            id="selectCountry"
            onChange={(e) => handleCountryChange(e, setSelectedCountry, setSelectedState, setSelectedCity)}
            value={selectedCountry}
            required
          >
            <option value="" disabled>
              Select Country
            </option>
            {Country.getAllCountries().map((country) => (
              <option key={country.isoCode} value={country.isoCode}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="selectState" className="col-sm-2 col-form-label">
          State
        </label>
        <div className="col-sm-10">
          <select
            className="form-control"
            id="selectState"
            onChange={(e) => handleStateChange(e, setSelectedState)}
            value={selectedState}
            required
          >
            <option value="" disabled>
              Select State
            </option>
            {State.getStatesOfCountry(selectedCountry).map((state) => (
              <option key={state.isoCode} value={state.isoCode}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="selectCity" className="col-sm-2 col-form-label">
          City
        </label>
        <div className="col-sm-10">
          <select
            className="form-control"
            id="selectCity"
            onChange={(e) => handleCityChange(e, setSelectedCity)}
            value={selectedCity}
            required
          >
            <option value="" disabled>
              Select City
            </option>
            {City.getCitiesOfState(selectedCountry, selectedState).map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      </div>
            <div className="row mb-3">
            <div className="col-sm-6">
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="sameAsCurrentCheckbox"
              checked={sameAsCurrent}
              onChange={handleCheckboxChange}
            />
            <label
              className="form-check-label"
              htmlFor="sameAsCurrentCheckbox"
            >
              Residential address same as current address
            </label>
          </div>
        </div>     
        </div>
        </div>
      </div>
           {!sameAsCurrent && (
        <div className="row mb-3">
        <label htmlFor="residentialAddress" className="col-sm-2 col-form-label">
          Residential Address
        </label>
        <div className="col-sm-10">
          <div className="mb-3">
            <input type="text" className="form-control" id="inputLane1" placeholder="Lane 1" required/>
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" id="inputLane2" placeholder="Lane 2" required/>
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" id="inputPincode1" placeholder="Pincode" required/>
          </div>
          {/*res country */}
          <div className="row mb-3">
            <label htmlFor="residentialCountry" className="col-sm-2 col-form-label">
              Residential Country
            </label>
            <div className="col-sm-10">
              <select
                className="form-control"
                id="residentialCountry"
                onChange={(e) => handleCountryChange(e, setResidentialCountry, setResidentialState, setResidentialCity)}
                value={residentialCountry}
                required
                disabled={sameAsCurrent}
              >
                <option value="" disabled>
                  Select Country
                </option>
                {Country.getAllCountries().map((country) => (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        {/*res dist */}
        <div className="row mb-3">
            <label htmlFor="residentialState" className="col-sm-2 col-form-label">
              Residential State
            </label>
            <div className="col-sm-10">
              <select
                className="form-control"
                id="residentialState"
                onChange={(e) => handleStateChange(e, setResidentialState)}
                value={residentialState}
                
                disabled={sameAsCurrent}
              >
                <option value="" disabled>
                  Select State
                </option>
                {State.getStatesOfCountry(residentialCountry).map((state) => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/*res city*/}
          <div className="row mb-3">
            <label htmlFor="residentialCity" className="col-sm-2 col-form-label">
              Residential City
            </label>
            <div className="col-sm-10">
              <select
                className="form-control"
                id="residentialCity"
                onChange={(e) => handleCityChange(e, setResidentialCity)}
                value={residentialCity}
                
                disabled={sameAsCurrent}
              >
                <option value="" disabled>
                  Select City
                </option>
                {City.getCitiesOfState(residentialCountry, residentialState).map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
  </div>
  </div>
)}
      

      <div className="row mb-3">
        <label
          htmlFor="optionalInputPhoneNumber"
          className="col-sm-2 col-form-label"
        >
          Alternate Phone Number
        </label>
        <div className="col-sm-10">
          <input
            type="tel"
            className="form-control"
            id="optionalInputPhoneNumber"
          />
        </div>
      </div>

      
      
          <button type="submit" className="btn btn-dark mb-2">
            Submit
          </button>
        
    </div>
  );
}
