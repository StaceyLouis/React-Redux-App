import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getList } from '../action/action' 
import "../styles.css";

function List(props) {
  useEffect(() => {
    props.getList();
  }, []);

  return (
    <div>
      <h1>Random Picture Generator </h1>
   <div>
   
        {props.list.length > 0 ? (
          <div>
            {props.list.map((item) => (
              <Fragment key={item.id}>
                <img  className="pic-div" src={item.download_url} width="300" height="300" />
                
               </Fragment>
              
            ))}
              {
       props.list.map((item) => (
         <Fragment key={item.id}>
             <div className='img_description'> {item.author} </div>
           </Fragment>
       ))
     }

          </div>
          
        ) : null}
        
      </div>
      
    </div>
    
  );
}
const mapStateToProps = (state) => {
  return {
    list: state.list,
    isLoading: state.isLoading,
    error: state.error,
   
  };
};

export default connect(mapStateToProps, { getList })(List);
