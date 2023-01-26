import React from 'react';
import { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  let[number, shownumber]=useState("");
  // let outerdiv={height:"300px",width:"100%"}
  // let innerdiv={width:"220px",height:"380px",marginLeft:"500px",marginTop:"50px",fontSize:"35px",paddingLeft:"20px"}
  let click=(e)=>{
      shownumber(number+e.target.value);
      console.log(number);
  }
  return (
    <>
    <div className="container-fluid bg-dark">
        <div className="row mt-sm-3">
            <div className="col-sm-12 text-center fw-bolder fs-4 text-danger">Calculator by React.JS</div>
        </div>
        <div className="row mt-sm-4">
            <div className="col-sm-5"></div>
            <div className="col-sm-2 shadow-lg">
                <input type="text" value={number} readOnly className="text-danger form-control mb-sm-2 border-danger text-sm-center fw-bolder fs-2"/>
                <table className="table shadow-lg table-responsive-sm table-dark border-danger table-bordered text-center">
                    <thead>
                        <tr>
                            <td><button value="+" onClick={click} className="btn btn-warning fs-5 fw-bolder">+</button></td>
                            <td><button value="-" onClick={click} className="btn btn-warning fs-5 fw-bolder">−</button></td>
                            <td><button value="/" onClick={click} className="btn btn-warning fs-5 fw-bolder">÷</button></td>
                        </tr>
                        <tr>
                            <td><button value="**" onClick={click} className="btn btn-warning fs-5 fw-bolder">x<sup>2</sup></button></td>
                            <td><button value="-" onClick={click} className="btn btn-warning fs-5 fw-bolder">−</button></td>
                            <td><button value="%" onClick={click} className="btn btn-warning fs-5 fw-bolder">%</button></td>
                        </tr>
                      </thead>
                      <tbody>
                            <tr>
                                <td><button value="1" onClick={click} className="btn btn-outline-primary fw-bolder fs-3">1</button></td>
                                <td><button value="2" onClick={click} className="btn btn-outline-primary fw-bolder fs-3">2</button></td>
                                <td><button value="3" onClick={click} className="btn btn-outline-primary fw-bolder fs-3">3</button></td>
                            </tr>
                            <tr>
                                <td><button value="4" onClick={click} className="btn btn-outline-primary fw-bolder fs-3">4</button></td>
                                <td><button value="5" onClick={click} className="btn btn-outline-primary fw-bolder fs-3">5</button></td>
                                <td><button value="6" onClick={click} className="btn btn-outline-primary fw-bolder fs-3">6</button></td>
                            </tr>
                            <tr>
                                <td><button value="7" onClick={click} className="btn btn-outline-primary fw-bolder fs-3">7</button></td>
                                <td><button value="8" onClick={click} className="btn btn-outline-primary fw-bolder fs-3">8</button></td>
                                <td><button value="9" onClick={click} className="btn btn-outline-primary fw-bolder fs-3">9</button></td>
                            </tr>
                            <tr>
                                <td><button onClick={()=>{
                                  shownumber(number.substring(0,number.length-1));
                                }} className="btn btn-danger mb-sm-3 text-center fw-bolder fs-3">C</button></td>
                                <td><button onClick={()=>{
                                  shownumber("");
                                }} className="btn btn-info mb-sm-3 text-center fw-bolder fs-4">AC</button></td>
                                <td><button onClick={()=>{
                                  shownumber(eval(number))
                                }} className="btn btn-success mb-sm-3 text-center fw-bolder fs-3">=</button></td>
                            </tr>
                        </tbody>
                </table>
                <div className="text-center text-danger fw-bolder">
                    Developed By Hemant Gupta
                </div>
            </div>
            <div className="col-sm-5">
            </div>
        </div>
    </div>
      {/* <div style={outerdiv}>
        <div style={innerdiv} className='bg-light shadow-lg p-3'>
          <h2 className='text-light shadow-lg text-center bg-dark'>Calculator</h2>
          <input  type="text" className='form-control' value={number} readOnly/>
          <table>
            <tr>
              <td><button value="1" onClick={click} className='btn btn-primary fw-bolder'>1</button></td>
              <td><button value="2" onClick={click} className='btn btn-primary fw-bolder'>2</button></td>
              <td><button value="3" onClick={click} className='btn btn-primary fw-bolder'>3</button></td>
              <td><button value="+" onClick={click} className='btn btn-warning fw-bolder'>+</button></td>
            </tr>
            <tr>
              <td><button value="4" onClick={click} className='btn btn-primary fw-bolder'>4</button></td>
              <td><button value="5" onClick={click} className='btn btn-primary fw-bolder'>5</button></td>
              <td><button value="6" onClick={click} className='btn btn-primary fw-bolder'>6</button></td>
              <td><button value="-" onClick={click} className='btn btn-warning fw-bolder'>-</button></td>
            </tr>
            <tr>
              <td><button value="7" onClick={click} className='btn btn-primary fw-bolder'>7</button></td>
              <td><button value="8" onClick={click} className='btn btn-primary fw-bolder'>8</button></td>
              <td><button value="9" onClick={click} className='btn btn-primary fw-bolder'>9</button></td>
              <td><button value="0" onClick={click} className='btn btn-primary fw-bolder'>0</button></td>
            </tr>
            <tr>
              <td><button value="*" onClick={click} className='btn btn-warning fw-bolder'>×</button></td>
              <td><button value="/" onClick={click} className='btn btn-warning fw-bolder'>÷</button></td>
              <td><button value="**" onClick={click} className='btn btn-warning fw-bolder'>×<sup>2</sup></button></td>
              <td><button onClick={()=>{
                shownumber(eval(number))
                  }} className='btn btn-warning fw-bolder'>=</button></td>
            </tr>
            <tr>
              <td><button onClick={()=>{
                shownumber("");
              }} className='btn btn-danger fw-bolder'>AC</button></td>
              <td><button onClick={()=>{
                shownumber(number.substring(0,number.length-1));
              }} className='btn btn-danger fw-bolder'>C</button></td>
            </tr>
          </table>
        </div>
      </div> */}
    </>
  )
}

export default App;