import Menu from '../components/Menu';
import Rodape from '../components/Rodape';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Head from 'next/head'
import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

library.add(fas)

function Home({ data }){
    return (
        <div>
        <Head>
            <title>Home - Supernova Tech</title>
            <meta name="description" content="Site sobre desenvolvimento de sistemas, sites, aplicativos e outras tecnologias" />
        </Head>    
            <Menu/>    
            <Jumbotron fluid className="descr-top">
                <style>
                    {`.descr-top{
                        background-color: #030E14;
                        color: #D3D3D3;
                        margin-bottom: 0rem !important;
                    }`}
                </style>
                <Container className="text-center">
                    <h1 className="display-4">{data.home.topTitulo}</h1>
                    <p className="lead">{data.home.topSubTitulo}</p>
                    <p className="lead">
                        <a href={data.home.topLnkBtn} className="btn btn-outline-secondary btn-lg mt-4">{data.home.topTxtBtn}</a>
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
                    <h2 className="display-3">{data.home.ptfTitulo}</h2>
                    <p className="lead pb-4">
                        {data.home.ptfSubTitulo}
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="rounded-circle circulo centralizar">
                            <FontAwesomeIcon icon={data.home.ptfIcnServUm} />
                        </div>
                        <h2 className="mt-4 mb-4">{data.home.ptfServUmTitulo}</h2>
                        <p className="lead pb-4">
                            {data.home.ptfServUmSubTitulo} 
                        </p>
                    </div>
                    <div className="col-md-4">
                        <div className="rounded-circle circulo centralizar">
                            <FontAwesomeIcon icon={data.home.ptfIcnServDois}/>
                        </div>
                        <h2 className="mt-4 mb-4">{data.home.ptfServDoisTitulo}</h2>
                        <p className="lead pb-4">
                            {data.home.ptfServDoisSubTitulo}
                        </p>
                    </div>
                    <div className="col-md-4">
                        <div className="rounded-circle circulo centralizar">
                            <FontAwesomeIcon icon={data.home.ptfIcnServTres} />
                        </div>
                        <h2 className="mt-4 mb-4">{data.home.ptfServTresTitulo}</h2>
                        <p className="lead pb-4">{data.home.ptfServTresSubTitulo} </p>
                    </div>
                </div>
            </Container>
        </Jumbotron>
        <Rodape />
        </div>
    );
}

export async function getServerSideProps(){
    const res = await fetch(`http://localhost:8080/home`);
    const data = await res.json();

    console.log(data);

    return { props : { data }};
}
export default Home