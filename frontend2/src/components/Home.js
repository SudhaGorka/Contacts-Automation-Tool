import React from 'react'

export const Home = () => {
  return (
   
   <section><div>

   <div className="row g-0  position-relative">
    <div className="col hover-zoom col-md-6 p-md-4 py-3 ">
      <img
        src="https://img.freepik.com/free-vector/stressed-workflow-woman-with-laptop-sitting-hourglass-cartoon-character-lack-time-programmers-team-teamwork-process-coworking-project-vector-isolated-concept-metaphor-illustration_335657-2724.jpg?w=740&t=st=1669823689~exp=1669824289~hmac=afb094d4cef05a022803309c3bd6d7269ee8d5ed2d5c4e07a719169899132a6a"
        
        className="d-block ps-5 p-3 mb-5 " alt="img"  style={{backgroundSize:"cover" , height: 600 , width: 700}} 
        
      />
    </div>
    <div className="col-md-6 p-4 ps-md-0 d-flex flex-column justify-content-center ">
      <h1 className="mt-0 fs-1 lh-sm " style={{ color: '#020100' , fontFamily: 'Merriweather', fontSize: 600}}>Save Contacts - just in few clicks</h1>
      <p className="fs-5">
      All the tools you’ll need to be more productive and work smarter with your data.
      </p>
      <button type ="button" className= "btn btn-outline-primary btn-rounded w-25" data-mdb-ripple-color="dark"> Get Started</button>
    </div>
  </div>


     
    
    { /* 2nd div content */ }
    <div className = "container-fluid py-5 text-center" style={{backgroundColor:'#EDEEC0'}}>
      <p className = ' animate__heartBeat fs-2'  style={{ color: '#020100' , fontFamily: 'Merriweather' }}> Keep Your Simple Tasks Simple.</p>
      <p className = 'lh-sm ' style={{ color: '#020100' , textAlign:'center' , fontFamily: 'Lato' }}>  We want to deliver a solution for our users to make their assignments uncomplicated. Also, We believe to prioritize our user's expectations, and how those expectations get fulfilled.
      Our team and their set of actions will surely provide a worthy product to our audience. </p>
   {/* <a href="#" className="stretched-link">Read More <i class="fa-solid fa-arrow-right"></i></a> */}
    
    </div>

    
    {/* 3rd div content */}
    
    <div className="row g-0  position-relative">
    <div className="col-md-6 p-4 ps-md-0 d-flex flex-column justify-content-center ">
      <h3 className="ps-4 lh-sm " style={{color: '#020100' , fontFamily: 'Merriweather'}}>Work Directly on Your Files</h3>
      
      
      <p className="ps-4 " style={{color:'#020100'}}>
      Quicker directly access your files  and convert them into saved contacts to your google account. Do just a few steps to accomplish your goal for free.
      </p>
      <a href="#" className="stretched-link ms-4"><u>Start Now.. </u> <i class="fa-solid fa-arrow-right"></i></a>
    
      
    </div>
    <div className="col col-md-6 p-md-4 py-3 ">
      <img
        src="https://img.freepik.com/free-vector/office-workers-organizing-data-storage-file-archive-server-computer-cartoon-illustration_74855-14465.jpg?w=1060&t=st=1670263696~exp=1670264296~hmac=c3cda81b63e21c576f7fd7ef100b7e048103714e3481e881eb3083448b8f5e53"
        
        className="d-block ps-5 p-3 mb-5 " alt="img"  style={{backgroundSize:"cover" , height: 500 , width: 700}} 
        
      />
    </div>
  </div>

{/*  4th div content*/}

<div className="container-fluid py-5" style={{backgroundColor: '#E3E4DB'}}>
<div className="heading container pb-5">
        
        <h3 className=" text-center"  style={{color: '#020100' , fontFamily: 'Merriweather'}}>Steps To Follow:</h3>
      </div>
  <div className="row">
    <div className="col-md">
      
    <div className="card">
  <div className="card-body">
    <img className="rounded mx-auto d-block w-50" src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=740&t=st=1670415523~exp=1670416123~hmac=efdab9088eefd5d69565c3d3e4125c7c8fb220453db1ed07599b928d5be2f254" />
    <p className="card-text text-center">
    Login first or Sign up if you're a new user.
    </p>
    
  </div>
</div>

    </div>
    <div className="col-md"><div className="card">
  <div className="card-body">
    <img className="rounded mx-auto d-block w-50" src="https://img.freepik.com/free-vector/uploading-concept-illustration_114360-6011.jpg?w=740&t=st=1670416347~exp=1670416947~hmac=f3eb6de537bb27124fff084df7088a1511d002895db6d7ec223eaf44345fbf7c" />
    <p className="card-text text-center">
      Choose your Excel file and upload it. 
    </p>
    
  </div>
</div></div>
    <div className="col-md"><div className="card">
  <div className="card-body">
    <img className="rounded mx-auto d-block w-50" src ="https://img.freepik.com/free-vector/done-concept-illustration_114360-4161.jpg?w=740&t=st=1670416539~exp=1670417139~hmac=7f1f01533c885ad3dcf1181bbec37ea04ce22c5196c500e4216697e121397b8b" />
    <p className="card-text text-center">
      Follow some steps more to get it Done!
    </p>
    
  </div>
</div></div>
  </div>
</div>

{/* 5th div content */}

       


  


  </div> </section>

  )}
  export default Home;