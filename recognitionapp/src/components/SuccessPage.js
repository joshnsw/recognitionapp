import green from '../assets/greencheckmark.svg';


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

export default SuccessPage;
