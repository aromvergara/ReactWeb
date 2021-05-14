import React from "react";
// import ClassNamesComp from "../components/ClassNamesComp";

const DevProj = () => {
  
  return (
    <div className="App">
      <div className="wrapper">
          <main>
            <section>
              <h2>Web Projects</h2>
              <article className="projects">
                <div className="projects-item projects-item-01">
                  {/*img src="images/UXUIdesign.jpg" alt="UX/UI Design"*/}
                  <a onClick={()=> window.open("https://aromvergara.github.io/Netflix-Clone", "_blank")} href="/DevProj" data-title="Website Clone"><img src="images/webclone.jpeg" alt="Website Clone" /></a>
                </div>
                <div className="projects-item projects-item-02">
                  {/*img src="images/webdevelopment.png" alt="Web Development"*/}
                  <a onClick={()=> window.open("https://crud-notess.herokuapp.com", "_blank")} href="/DevProj" data-title="CRUD App"><img src="images/crudapp.jpeg" alt="CRUD App" /></a>
                </div>
                <div className="projects-item projects-item-03">
                  {/*img src="images/projectmanagement.jpg" alt="Project Management"*/}
                  <a onClick={()=> window.open("https://cors-anywhere.herokuapp.com/", "_blank")} onClick={()=> window.open("https://weather-app-ciccc.herokuapp.com", "_blank")} href="/DevProj" data-title="Weather App"><img src="images/weatherapp.png" alt="Weather App" /></a>
                </div>
              </article>
            </section>
            <section>
              <article className="projects">
                <div className="projects-item projects-item-03">
                  {/*img src="images/projectmanagement.jpg" alt="Project Management"*/}
                  <a onClick={()=> window.open("https://dan-vergara.webflow.io/", "_blank")} href="/DevProj" data-title="High performance website"><img src="images/highperformance.png" alt="High performance website" /></a>
                </div>
              </article>
            </section>
          </main>
          
        </div>
    </div>
  );
};

export default DevProj;
