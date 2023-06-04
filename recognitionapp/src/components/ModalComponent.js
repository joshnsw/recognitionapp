import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ModalComponent = ({handleEmployeeSelect,handleRecognitionSelect,handleDetails,selectedRecognition,selectedEmployee}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setStep(1);
  }
  const handleShow = () => setShow(true);

  const [step, setStep] = useState(1);



  const handleBack = (event) => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleNext = (event) => {
      setStep(step + 1);
  };

  return (
    <>
      <Button variant="outline-dark" onClick={handleShow} style={{width: "120px"}}>
        Give Recognition
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Recognition</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        {step === 1 && (
            <div className="pg1">
              <p className="h4 text-center">Select employee to give recognition</p>
              <div className="dropdown d-flex justify-content-center">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                {selectedEmployee ? selectedEmployee : "Select Employee"}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={handleEmployeeSelect}
                      data-state="Joe"
                    >
                      Joe
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={handleEmployeeSelect}
                      data-state="Jackie"
                    >
                     Jackie
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={handleEmployeeSelect}
                      data-state="Jill"
                    >
                      Jill
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="pg2">
              <p className="h4 text-center">Select type of recognition to give</p>
              <div className="dropdown d-flex justify-content-center">
                <button
                  id="dropdownBtn2"
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                {selectedRecognition ? selectedRecognition: "Select Recognition"}

                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownBtn2">
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={handleRecognitionSelect}
                      data-state="Teamwork"
                    >
                      Teamwork
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={handleRecognitionSelect}
                      data-state="Collaboration"
                    >
                      Collaboration
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={handleRecognitionSelect}
                      data-state="Innovation"
                    >
                      Innovation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}


        <div className="d-flex justify-content-end">

        {step === 1 ? (
            <Button variant="secondary" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <div>
              <Button variant="secondary" style={{ marginRight: '4px' }} onClick={handleBack}>
                Back
              </Button>
              <Button variant="secondary" onClick={handleDetails}>
                Next
              </Button>
            </div>
          )}

        </div>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ModalComponent;
