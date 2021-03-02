import Menu from '../components/Menu';
import Rodape from '../components/Rodape';
import React from 'react';
import { Jumbotron, Container } from 'reactstrap';


function Home(){
    return (
        <div><Menu/>
            <Jumbotron fluid className="descr-top">
                <style>
                    {`.descr-top{
                        background-color: #030E14;
                        color: #D3D3D3;
                        margin-bottom: 0rem !important;
                    }`}
                </style>
                <Container className="text-center">
                    <h1 className="display-4">Supernova Tecnology</h1>
                    <p className="lead">Est recusandae internos qui molestiae nobis ad aliquam consequuntur aut alias corrupti quo veritatis voluptatum et quibusdam recusandae! Ut voluptatem facere ex enim nemo nam deleniti dolor quo recusandae eveniet et voluptatum quis.</p>
                    <p className="lead">
                        <a href="/" className="btn btn-outline-secondary btn-lg mt-4">Conheça</a>
                    </p>
                </Container>
        </Jumbotron>

        <Jumbotron fluid className="servicos">
            <style>
                {`.servicos{
                    color: #000000;
                }.circulo{
                    width: 140px;
                    height: 140px;
                    background-color: #030E14;
                    color: #ffffff;
                    font-size: 53px;
                    padding-top: 24px;
                }.centralizar {
                    margin: 0 auto !important;
                    float: none !important;
                }`}
            </style>
            <Container className="text-center">
                <div>
                    <h2 className="display-3">Portfólio</h2>
                    <p className="lead pb-4">
                        Lorem ipsum dolor sit amet. Et dolor quasi et quia praesentium qui quidem dolores qui sunt quidem aut beatae quia aut voluptas quia ut repudiandae voluptatem.
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="rounded-circle circulo centralizar">
                            a
                        </div>
                        <h2 className="mt-4 mb-4">Front-End</h2>
                        <p className="lead pb-4">
                            Ab quasi reprehenderit ut saepe pariatur et voluptatem temporibus ut temporibus vero. 
                        </p>
                    </div>
                    <div className="col-md-4">
                        <div className="rounded-circle circulo centralizar">
                            b
                        </div>
                        <h2 className="mt-4 mb-4">Back-End</h2>
                        <p className="lead pb-4">
                            Quo placeat impedit sed impedit officia vel iusto quidem. Id provident architecto ad illum iste eos aliquam voluptatibus qui quis nisi est corrupti placeat.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <div className="rounded-circle circulo centralizar">
                            c
                        </div>
                        <h2 className="mt-4 mb-4">Full Stack</h2>
                        <p className="lead pb-4">Ut numquam ipsam et voluptatem dignissimos et similique molestiae ut dolorem enim. </p>
                    </div>
                </div>
            </Container>
        </Jumbotron>
        <Rodape />
        </div>
    );
}

export default Home