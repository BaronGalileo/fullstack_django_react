import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"


function Swagger() {
  
  




    return (
      <div className="Swagger">
        <SwaggerUI url="http://127.0.0.1:8000/openapi" />           
      </div>
    );
  }
  
  export default Swagger;
