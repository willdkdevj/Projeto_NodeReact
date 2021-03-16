import Menu from '../components/Menu';
import Rodape from '../components/Rodape';

import Head from 'next/head'
import React, { useState } from 'react';

import { Jumbotron, Container, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { useState } from 'react/cjs/react.production.min';
import { Alert } from 'bootstrap';

function Contato(){
    const [contato, setContato] = useState({
        txtNome: '',
        txtEmail: '',
        txtTel: '',
        txtProj: '',
    });

    const [response, setResponse] = useState({
        formSave: false,
        type: '',
        message: ''
    });
    const onChangeInput = e => setContato({...contato, [e.target.name]:e.target.value});

    const sendContato = async e => {
        e.preventDefault();
        console.log(contato);

        setResponse({formSave : true});

        try{
            const res = await fetch('http://localhost:8080/contato', {
            method: 'POST',
            body: JSON.stringify(contato),
            headers: {'Content-Type': 'application/json'}
            });

            const resEnv = await res.json();
            if(resEnv.error){
                setResponse({
                    formSave: false,
                    type: 'error',
                    message: resEnv.message
                });
            } else {
                setResponse({
                    formSave: false,
                    type: 'success',
                    message: resEnv.message
                });
            }
        }catch(err){
            setResponse({
                formSave: false,
                type: 'error',
                message: "ERRO: Não foi possível enviar o formulário!"
            });
        }
    }
    return (
        <div>
            <Menu />
                <Head>
                    <title>Contato - Supernova Tech</title>
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
                    {response.type === 'error' ? <Alert color="danger">{response.message}</Alert> : ""}
                    {response.type === 'success' ? <Alert color="success">{response.message}</Alert> : ""}

                    <Form onSubmit={sendContato}>
                        <FormGroup>
                            <Label for="nome">Nome</Label>
                            <Input type="text" name="txtNome" id="txtNome" placeholder="Digite o Nome Completo" 
                            onChange={onChangeInput} />                            
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">E-mail</Label>
                            <Input type="email" name="txtEmail" id="txtEmail" placeholder="Digite o E-mail Principal"
                            onChange={onChangeInput} />                            
                        </FormGroup>
                        <FormGroup>
                            <Label for="telefone">Telefone</Label>
                            <Input type="tel" name="txtTel" id="txtTel" placeholder="(##) 9####-####"
                            onChange={onChangeInput} />                            
                        </FormGroup>
                        <FormGroup>
                            <Label for="projeto">Projeto</Label>
                            <Input type="textarea" name="txtProj" id="txtProj" placeholder="Comente de forma sucinta sobre seu Projeto"
                            onChange={onChangeInput} />                            
                        </FormGroup>
                        <hr /><br />
                        {response.formSave ? <Button type="submit" outline color="danger" disabled >Enviando...</Button> :
                        <Button type="submit" outline color="secondary">Enviar</Button>}
                    </Form>
                </Container>
            </Jumbotron>
            <Rodape />
        </div>
    );
}

export default Contato;