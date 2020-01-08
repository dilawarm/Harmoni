//@flow

import * as React from 'react';
import { Component } from "react-simplified";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

export class Artist extends Component {
    render(){
        return(
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                   Legg til en artist
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <form style={{padding: 20 + 'px', width: "100%", borderStyle: "outset"}}>
                        <div className="form-group">
                            <row>
                                <h4>Kontakt info: </h4><br/>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Fullt navn:</label>
                                    <input type="text" className="form-control" placeholder="Ola Nordmann"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput2">E-post: </label>
                                    <input type="epost" className="form-control" placeholder="olanordmann@gmail.com"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput3">Mobilnummer: </label>
                                    <input type="tlf" className="form-control" placeholder="+47 00000000"></input>
                                </div>
                                <label htmlFor="exampleFormControlInput3">Rider:</label><br/>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupFileAddon01">Last opp</span>
                                    </div>
                                    <div className="custom-file">
                                        <input type="file"  class="file-path validate" id="inputGroupFile01"
                                               aria-describedby="inputGroupFileAddon01"/>
                                               <label className="custom-file-label" htmlFor="inputGroupFile01">Velg fil</label>
                                    </div>
                                </div><br/>
                                <label htmlFor="exampleFormControlInput3">Hospitality rider:</label><br/>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupFileAddon01">Last opp</span>
                                    </div>
                                    <div className="custom-file">
                                        <input type="file" className="file-path validate" id="inputGroupFile01"
                                               aria-describedby="inputGroupFileAddon01"/>
                                        <label className="custom-file-label" htmlFor="inputGroupFile01">Velg fil</label>
                                    </div>
                                </div>
                                <br/>
                                <label htmlFor="exampleFormControlInput3">Artist contract:</label><br/>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupFileAddon01">Last opp</span>
                                    </div>
                                    <div className="custom-file">
                                        <input type="file" className="file-path validate" id="inputGroupFile01"
                                               aria-describedby="inputGroupFileAddon01"/>
                                        <label className="custom-file-label" htmlFor="inputGroupFile01">Velg fil</label>
                                    </div>
                                </div>
                                <br/>
                                <div className="form-group" align="center">
                                    <Button type="submit" className="btn btn-primary" onClick={this.submit}>Legg til</Button>
                                </div>
                            </row>
                        </div>
                    </form>
                </Dropdown.Menu>
            </Dropdown>
        )
    }

}