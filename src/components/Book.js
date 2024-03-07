import Carousel from "./Carousel"
import "../Book.css"
export default function Book(){
    return(
        <>
        <div className="container">
            <div className="row">
                <Carousel/>
            </div>
            <div className="row" id="summary" >
            <div className="shadow p-3 mt-5 bg-body rounded text-center">
                <h2 className="display-4">Summary</h2>
                <p className="lead text-italic p-3" >Java is a widely-used programming language for coding web applications.<br/> It has been a popular choice among developers for over two decades, with millions of Java applications in use today.
                <br/> Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself.<br/>
                While most modern Java applications combine the Java runtime and application together,<br/> there are still many applications and even some websites that will not function unless you have a desktop Java installed.<br/> 
                Java.com, this website, is intended for consumers who may still require Java for their desktop applications <br/> specifically applications targeting Java 8.
                </p>
            </div>

            </div>
            <div className="row" id="info" >
            <div className="shadow p-3 mt-5 bg-body rounded text-center">
                <h2 className="display-4">Book Content</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                    Chapter 1: The Mental Landscape
                    </li>
                    <li className="list-group-item">
                    Chapter 2: Programming in the Small I: Names and Things
                    </li>
                    <li className="list-group-item">
                    Chapter 3: Programming in the Small II: Control
                    </li>
                    <li className="list-group-item">
                    Chapter 4: Programming in the Large I: Subroutines
                    </li>
                    <li className="list-group-item">
                    Chapter 5: Programming in the Large II: Objects and Classes
                    </li>
                    <li className="list-group-item">Chapter 6: Applets, HTML, and GUI's</li>
                    <li className="list-group-item">Chapter 7: Advanced GUI Programming</li>
                    <li className="list-group-item">Chapter 8: Arrays</li>
                    <li className="list-group-item">Chapter 9: Correctness and Robustness</li>
                    <li className="list-group-item">Chapter 10: Advanced Input/Output</li>
                    <li className="list-group-item">
                    Chapter 11: Linked Data Structures and Recursion
                    </li>
                </ul>
            </div>
            
                
            </div>
            
            <div className="row" id="author" >
  <div className="shadow p-3 mt-5 bg-body rounded text-center">
    <div className="row">
    <h2 className="display-4 p-2">Author</h2>
      <div className="col-md-4">
        <img
          src="https://media.gettyimages.com/id/1235861009/photo/cheltenham-england-tim-marshall-writer-of-the-best-selling-prisoners-of-geography-at-the.jpg?s=612x612&w=0&k=20&c=K17tbynaorQUvZTd8OedQSQaFwdoxjib57YXFYNe9SI="
          className="rounded img-fluid w-75"
          alt="Author"
        />
      </div>

      <div className="col-md-8 col-sm-12 text-md-start text-lg-start text-sm-center p-3" >
  <p>
    <b>Name:</b> John Doe
  </p>
  <p>
    <b>DOB:</b> January 15, 1980
  </p>
  <p>
    <b>Alma mater:</b> University of XYZ
  </p>
  <p>
    <b>Awards:</b> Nobel Prize in Literature
  </p>
  <p>
    <b>Description:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
  <p>
    <b>Notable Works:</b> "The Great Novel," "Epic Journey," "Poems of the Heart"
  </p>
</div>

    
  


    </div>
  </div>
</div>      
        </div>
         

        </>
    )
}