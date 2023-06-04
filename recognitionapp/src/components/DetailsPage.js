import { useState } from 'react';

import SuccessPage from './SuccessPage';


const DetailsPage = ({handleDetails,selectedRecognition,selectedEmployee,handleReset}) => {

  const [success, setSuccess] = useState(false);

  const handleSuccess = (event) => {
    setSuccess(!success);

  };

  return(
    <>
    {success === true ? (
        <SuccessPage handleDetails={handleDetails} handleSuccess={handleSuccess} handleReset={handleReset} />
        ):(
          <>

          <div className=" detailsPage shadow-lg p-3 mb-5 bg-body-secondary rounded">
          <h1>Recognition Details</h1>

          <p className="shadow-sm p-3  bg-body-tertiary rounded d-flex h4">Employee to give recognition: {selectedEmployee}</p>
          <p className="shadow-sm p-3  bg-body-tertiary rounded d-flex h4">Recognition type: {selectedRecognition}</p>
          <p className="h4 d-flex">Additional Details:</p>
          <div class="form-group mb-3">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
          </div>
          <div>

          <button type="button" class="btn btn-outline-secondary btn-lg m-3" onClick={handleDetails}>Back</button>
          <button type="button" class="btn btn-outline-secondary btn-lg" onClick={handleSuccess}>Submit</button>
          </div>

          </div>

          </>
        )}

    </>

  )


}


export default DetailsPage;
