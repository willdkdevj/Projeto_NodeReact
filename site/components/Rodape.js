import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Rodape = () => {
    return (
        <Jumbotron fluid className="rodape">
            <style>
                {`.rodape{
                    background-color: #C0C0C0;
                    color: #000000;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    margin-bottom: 0rem !important;
                }.estilo{
                    padding-top: 30px;
                    padding-bottom: 30px;
                    margin-bottom: 0rem !important;
                }`}
            </style>
            <Container className="estilo">
                <div className="row">
                    <div className="col-md-8 text-left">
                        <p className="lead pb-1">1600 Pennsylvania Avenue NW<br />
                        Washington, DC 20500</p>
                    </div>
                    <div className="col-md-4 text-right">
                        <p className="lead pb-1">Todos os Direitos Reservados Supernova Tech® 2021</p>
                    </div>
                </div>
            </Container>
        </Jumbotron>
    );
}

export default Rodape;