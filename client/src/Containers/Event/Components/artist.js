//@flow
import * as React from 'react';
import { Component } from "react-simplified";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Artist} from "../../../services/ArtistService";
import Accordion from "react-bootstrap/Accordion";
import {Alert} from "../../../widgets";

export class ArtistDropdown extends Component<{buttonName: string, artist: Artist}> {
    state: Object={raider: null, hraider: null,contract: null};
    artist: Artist[] = [];

    artist_name: string = this.props.artist.artist_name;
    riders: File = this.props.artist.riders;
    hospitality_riders: File = this.props.artist.hospitality_riders;
    artist_contract: File = this.props.artist.artist_contract;
    email: string = this.props.artist.email;
    phone: number = this.props.artist.phone;
    //image: string = this.props.image;

    render() {
        return (
            <Accordion>
                <Card style={{border: "none"}}>
                    <Card.Header style={{border: "none"}}>
                        <Accordion.Toggle as={Button} variant="success" eventKey="0" style = {{float: "left"}}>
                            {this.props.buttonName}
                        </Accordion.Toggle>
                        <button type="button" className="btn btn-danger" onClick={() => this.delete(this.props.artist)} style={{marginLeft: 10+"px", float: "left"}}>Slett</button>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0" style={{border: "none"}}>
                        <Card.Body>
                            <form style={{padding: 20 + 'px', width: "100%" , position: "sticky", overflow: "visible"}}>
                            <div className="form-group">
                                <row>
                                    <h4>Kontakt info: </h4><br/>
                                    <div className="form-group">
                                        <label>Fullt navn:</label>
                                        <input type="text" className="form-control" placeholder="Ola Nordmann" value={this.artist_name}
                                               onChange={(event: SyntheticInputEvent<HTMLInputElement>) => (this.artist_name = event.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <label>E-post: </label>
                                        <input type="epost" className="form-control" placeholder="olanordmann@gmail.com" value={this.email}
                                               onChange={(event: SyntheticInputEvent<HTMLInputElement>) => (this.email = event.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Mobilnummer: </label>
                                        <input type="number" className="form-control" placeholder="+47 00000000" value={this.phone}
                                               onChange={(event: SyntheticInputEvent<HTMLInputElement>) => (this.phone = event.target.value)}/>
                                    </div>
                                    <label>Rider:</label><br/>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        </div>
                                        <div className="custom-file">
                                            <input type="file" className="file-path validate" id="raider" accept='.pdf'
                                                   onChange={this.onChanger}/>
                                        </div>
                                    </div><br/>
                                    <label>Hospitality rider:</label><br/>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        </div>
                                        <div className="custom-file">
                                            <input type="file" className="file-path validate" id="hospitality-raider" accept='.pdf'
                                                   onChange={this.onChangeh}/>
                                        </div>
                                    </div>
                                    <br/>
                                    <label>Artist contract:</label><br/>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        </div>
                                        <div className="custom-file">
                                            <input type="file" className="file-path validate" id="contract" accept='.pdf'
                                                   onChange={this.onChangec}/>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="form-group" align="center">
                                        <Accordion.Toggle type="button"  as={Button} variant="success" eventKey="0" onClick={() => {this.add()}}>
                                            Lagre
                                        </Accordion.Toggle>
                                    </div>
                                </row>
                            </div>
                        </form>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        );
    }

    add(){
        if(this.pris < 0){
            this.pris = 0;
            Alert.danger("Pris kan ikke være en negativ verdi");
            return;
        }

        console.log(this.state);

        const index = this.artist.indexOf(this.props.artist);
        this.artist[index] = new Artist(this.props.artist.artist_id,this.props.artist.event_id,this.artist_name, this.state.raider, this.state.hraider,this.state.contract,this.email, this.phone,this.image);

        //let s: any = ArtistDetails.instance();
        //s.mounted();

    }

    mounted() {

        let s: any = ArtistDetails.instance();
        this.artist = s.artist;

    }
    onChanger(event:SyntheticInputEvent<HTMLInputElement>) {
        this.state.raider=event.target.files[0];
    }
    onChangeh(event:SyntheticInputEvent<HTMLInputElement>) {
        this.state.hraider=event.target.files[0];
    }
    onChangec(event:SyntheticInputEvent<HTMLInputElement>){
        this.state.contract=event.target.files[0];
    }

    delete(a: Artist){
        const index = this.artist.indexOf(a);
        if (index > -1) {
            this.artist[index] = null;
        }
    }
}

export class ArtistDetails extends Component {

    artist: Artist[] = [];
    render(){
        return (
            <div className="card">
                <div className="card-header">
                    <h3>Artister:</h3>
                </div>
                <div className="card-body">
                    {this.artist.map(a => {if (a) { return(
                    <div className="card-header">
                        <div className="row">
                            <div className="col"><label>Artist: {a.artist_name} </label></div>
                            <div className="col"><label>Email: {a.email}</label></div>
                            <div className="col"><label>Tlf: {a.phone}</label></div>
                            <div className="col"><label>Dokumenter:
                                <label>{a.riders ? a.riders.name : 'Ingen rider valgt.'}</label>
                                <label>{a.hospitality_riders ? a.hospitality_riders.name : 'Ingen hospitality rider valgt.'}</label>
                                <label>{a.artist_contract ? a.artist_contract.name: 'Ingen kontrakt valgt.'}</label></label></div>
                        </div>
                        <div className={"row"}>
                            <div className={"col"}>
                                <ArtistDropdown buttonName={"Rediger"} artist={a}/>
                            </div>
                        </div>
                    </div>
                    )}})}
                    <button type="button" className="btn btn-secondary" onClick={() => this.addNewArtist()}>Legg til artist</button>
                </div>
            </div>
        )
    }

    addNewArtist(){
        let a: Artist = new Artist(null, null, "", "", "", "", "", null, "");
        a.is_new = true;
        this.artist.push(a);
    }
}