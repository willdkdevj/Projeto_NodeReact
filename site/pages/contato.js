import Menu from '../components/Menu';
import Rodape from '../components/Rodape';
import Head from 'next/head'
import React from 'react';
import { Jumbotron, Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

function Contato(){
    return (
        <div>
            <Menu />
                <Head>
                    <title>Supernova Tech</title>
                    <meta name="description" content="Site sobre desenvolvimento de sistemas, sites, aplicativos e outras tecnologias" />
                </Head>
            <Jumbotron fluid className="descr-form">
                <style>
                    {`.descr-form{
                        background-color: #030E14;
                        color: #D3D3D3;
                        padding-top: 40px;
                        padding-bottom: 40px;
                        margin-bottom: 0rem !important;
                    }`}                
                </style>
                <Container className="text-center">
                    <h1 className="display-4">Contate-Nos</h1>
                </Container>
            </Jumbotron>
            
            <Jumbotron fluid className="form-contato">
                <style>
                    {`.form-contato{
                        padding-top: 80px;
                        padding-bottom: 80px;
                    }`}
                </style>
                <Container>
                    <Form>
                        <FormGroup>
                            <Label for="nome">Nome</Label>
                            <Input type="text" name="txtNome" id="txtNome" placeholder="Digite o Nome Completo" />                            
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">E-mail</Label>
                            <Input type="email" name="txtEmail" id="txtEmail" placeholder="Digite o E-mail Principal" />                            
                        </FormGroup>
                        <FormGroup>
                            <Label for="telefone">Telefone</Label>
                            <Input type="tel" name="txtTel" id="txtTel" placeholder="(##) 9####-####" />                            
                        </FormGroup>
                        <FormGroup>
                            <Label for="projeto">Projeto</Label>
                            <Input type="textarea" name="txtProj" id="txtProj" placeholder="Comente de forma sucinta sobre seu Projeto" />                            
                        </FormGroup>
                        <hr /><br />
                        <Button type="submit" outline color="secondary">Enviar</Button>
                    </Form>
                </Container>
            </Jumbotron>
            <Rodape />
        </div>
    );
}

export default Contato;