
import './App.css';
import './css/styles.css'
import green from './assets/greencheckmark.svg';

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



const MainPage = () => {

  const [selectedEmployee, setSelectedEmployee] = useState("");


  const handleEmployeeSelect = (event) => {
    setSelectedEmployee(event.target.dataset.state);
  };

  const [selectedRecognition, setSelectedRecognition] = useState("");

  const handleRecognitionSelect = (event) => {
    setSelectedRecognition(event.target.dataset.state);
  };

  const [details, setDetails] = useState(false);

  const handleDetails = (event) => {
    setDetails(!details);
  };

    return(
    <>
    {details === true ? (
          <DetailsPage handleDetails={handleDetails} selectedEmployee={selectedEmployee} selectedRecognition={selectedRecognition}/>
          ) : (
            <div>
            <nav className="navbar bg-body-tertiary shadow-sm">
      <div className="container-fluid d-flex justify-content-between align-self-center">
      <div className="d-flex">
      <button type="button" className="btn btn-light mr-3"><i className="fa-sharp fa-solid fa-bars fa-lg mb-3 "></i></button>
      <p className="h3">Social Intranet</p>
      </div>
      <h1 className="text-left">Company X</h1>
      <p className="h4">Welcome back, Josh</p>
      </div>
    </nav>

    <div className="container p-2">

      <div className="container p-2 bg-body-tertiary shadow-sm"  style={{height: "400px",width:"100%"}}>
      <div className="row">
        <div className="col mt-2">
        <div className="card" style={{width: "400px", height:"360px"}}>
      <div className="card-body d-flex flex-column justify-content-between">
        <p className="h2">Your Activity</p>
        <p className="fs-4">You have done 4 actions this week.</p>

        <div className="d-flex gap-3">
        <Button variant="outline-dark" style={{width: "120px"}} >Personal Goals</Button>
        <Button variant="outline-dark" style={{width: "120px"}} >Enter Timesheet</Button>
        <ModalComponent handleRecognitionSelect={handleRecognitionSelect} handleEmployeeSelect={handleEmployeeSelect} selectedEmployee={selectedEmployee} selectedRecognition={selectedRecognition} handleDetails={handleDetails}/>
        </div>
      </div>
        </div>
        </div>

        <div className="col mt-2">
        <div className="card" style={{width: "400px", height:"360px"}}>
      <div className="card-body d-flex flex-column ">
        <p className="h2 mb-5">Your News Feed</p>
        <div className="d-flex flex-column gap-4">
          <div className="d-flex justify-content-between"><p className="">Debt-Limit Talks Get More Time as US Treasury Pushes Back Deadline</p><Button variant="outline-dark" style={{width: "40px"}} ><i class="fa-solid fa-arrow-right"></i></Button></div>
          <div className="d-flex justify-content-between"><p className="">Bond Traders Are Starting to Eye Potential Risks Beyond the Debt Ceiling</p><Button variant="outline-dark" style={{width: "40px"}} ><i class="fa-solid fa-arrow-right"></i></Button></div>
          <div className="d-flex justify-content-between"><p className="">Treasury Cash Pile Hits Lowest Level Since 2017 as Debt Talks Drag On</p><Button variant="outline-dark" style={{width: "40px"}} ><i class="fa-solid fa-arrow-right"></i></Button></div>
        </div>
      </div>
        </div>
        </div>

        <div className="col mt-2">
        <div className="card" style={{width: "400px", height:"360px"}}>
      <div className="card-body d-flex flex-column ">
        <p className="h2 mb-5">Add to your feed </p>
        <div className="d-flex flex-column gap-4">
          <div className="d-flex justify-content-between"><p >Investing News</p><Button variant="outline-dark" style={{width: "40px"}} >+</Button></div>
          <div className="d-flex justify-content-between"><p >Japan News</p><Button variant="outline-dark" style={{width: "40px"}} >+</Button></div>
          <div className="d-flex justify-content-between"><p >Food News</p><Button variant="outline-dark" style={{width: "40px"}} >+</Button></div>
          <div className="d-flex justify-content-between"><p>See more categories</p><Button variant="outline-dark" style={{width: "40px"}} ><i class="fa-solid fa-arrow-right"></i></Button></div>

        </div>

      </div>

        </div>
        </div>

      </div>


      </div>

      <div className="container p-2"  style={{height: "400px",width:"100%"}}>
        <div className="d-flex justify-content-between mb-2"><h1>Your Team Mates</h1><Button variant="outline-dark" style={{width: "160px"}} >Your Organisation <i class="fa-solid fa-arrow-right"></i></Button></div>
        <div class="row">
          <div class="col-sm">
          <div class="card">
              <div class="card-body">
              <img class="cardImg" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Card image cap" style={{height: "120px",width:"120px"}}/>
                <h5 class="card-title">Joe</h5>
                <h6 class="card-subtitle mb-2 text-muted">Senior analyst</h6>
                <p class="card-text">Activity this week: 1 action</p>
                <Button variant="outline-dark" style={{width: "160px"}} >More details <i class="fa-solid fa-arrow-right"></i></Button>

              </div>
            </div>
          </div>

          <div class="col-sm">
          <div class="card">
              <div class="card-body">
              <img class="cardImg" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Card image cap" style={{height: "120px",width:"120px"}}/>
                <h5 class="card-title">Jill</h5>
                <h6 class="card-subtitle mb-2 text-muted">Senior analyst</h6>
                <p class="card-text">Activity this week: 4 actions</p>
                <Button variant="outline-dark" style={{width: "160px"}} >More details <i class="fa-solid fa-arrow-right"></i></Button>

              </div>
            </div>
          </div>

          <div class="col-sm">
          <div class="card">
              <div class="card-body">
              <img class="cardImg" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="Card image cap" style={{height: "120px",width:"120px"}}/>
                <h5 class="card-title">Jackie</h5>
                <h6 class="card-subtitle mb-2 text-muted">Senior analyst</h6>
                <p class="card-text">Activity this week: 3 actions</p>
                <Button variant="outline-dark" style={{width: "160px"}} >More details <i class="fa-solid fa-arrow-right"></i></Button>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

            </div>
          )
          }


    </>
    )

}

const DetailsPage = ({handleDetails,selectedRecognition,selectedEmployee}) => {

    const [success, setSuccess] = useState(false);

    const handleSuccess = (event) => {
      setSuccess(!success);
    };

    return(
      <>
      {success === true ? (
          <SuccessPage handleDetails={handleDetails} handleSuccess={handleSuccess} />
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

const SuccessPage = ({handleSuccess,handleDetails}) => {

  const handleReturn = (event) => {
    handleSuccess();
    handleDetails();
  };

  return(
    <>
    <div className="shadow-lg  bg-body-secondary rounded successPage">

    <img src={green} alt="okmark" width="300" height="200"/>

    <p className="h3">Success! You gave a recognition!</p>
    <button type="button" class="btn btn-outline-secondary btn-lg m-3" onClick={handleReturn}>Return to main page</button>
    </div>
    </>

  )


}

function App() {
  return (
    <div className="App">
      <MainPage/>
    </div>
  );
}

export default App;
