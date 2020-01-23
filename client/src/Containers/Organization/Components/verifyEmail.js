import * as React from 'react';
import{Component} from 'react-simplified';
import {Spinner} from "react-bootstrap";
import {organizationService} from "../../../services/OrganizationService";
import {userService} from "../../../services/UserService";
import {Alert} from "../../../widgets";
import {sharedComponentData} from "react-simplified";
import { createHashHistory } from 'history';
import "./OrganizationProfile.css";
const history = createHashHistory();


export class verifyEmail extends Component<{ match: { params: { token: string } } }>{

    loading: boolean = false;
    render(){
        localStorage.setItem("invToken", this.props.match.params.token);
        if(this.loading){
            return <Spinner animation="border"></Spinner>

        }else{
            return (
              <div className="body">
                  <div className="mid">
                      <div id="verify" className="wrapper">
                          <button id="verfiyButton" type = "button" className="dark" onClick={()=>this.verify()}>"Verifiser min bruker og organisasjon" </button>
                      </div>
                  </div>
              </div>
            )
        }
    }

    verify(){
        this.loading = true;
        organizationService.checkVerifyToken().then(res=>{
            organizationService.addOrganization(res.org_name, res.org_phone, res.org_email)
                .then(response=>{
                    userService.register(response[0].org_id, res.user_email, 1, res.user_name, res.user_password, res.user_address, res.user_phone, "hei");
                }).then(()=>Alert.success("Du og din organisasjon '" + res.org_name + "' ble registret"))
                .then(()=>history.push("/Login"))
                .catch((error:Error)=>{
                    Alert.danger("Noe gikk feil under oppretting og verifisering, prøv igjen");
                    history.push("/RegisterOrganization");
                });
        }).catch((error:Error)=>Alert.danger(error.message));
    }
}