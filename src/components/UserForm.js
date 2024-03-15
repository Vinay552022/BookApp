import React, { useState } from 'react';
import BHMSStudent from './BMSSStudent';
import HomeopathicDoctor from './HomeopathicDoctor';
import GeneralIndividual from './GeneralIndividual';

const RegistrationForm = () => {
  const [userType, setUserType] = useState('');
  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };
 
  return (
    
    <div className="container mt-3 rounded shadow">
      <form>
        <div className="form-group p-3">
          <label htmlFor="userType" className="m-2">
            Select User Type:
          </label>
          <select
            className="form-control mb-"
            id="userType"
            onChange={handleUserTypeChange}
            required
          >
            <option value="" disabled selected>
              Select User Type
            </option>
            <option value="BHMSStudent">BHMS Student</option>
            <option value="HomeopathicDoctor">Homeopathic Doctor</option>
            <option value="Practitioner with Non-Indian/International Degrees">Practitioner with Non-Indian/International Degrees</option>
          </select>
        </div>

        {/* BHMS Student Section */}
        {userType === 'BHMSStudent' && (
          <BHMSStudent/>
        )}

        {/* Homeopathic Doctor Section */}
        {userType === 'HomeopathicDoctor' && (
          <HomeopathicDoctor/>
        )}

        {/* General Individual Section */}
        {userType === 'Practitioner with Non-Indian/International Degrees' && (
          <div className="user-section">
            {/* Add General Individual fields here */}
            <GeneralIndividual/>
          </div>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;
