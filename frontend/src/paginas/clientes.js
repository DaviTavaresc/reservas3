import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Button, Image, Table } from 'react-bootstrap';
import Cabecalho from '../componentes/cabecalho/cabecalho';
import Footer from '../componentes/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Clientes() {
  
  const [tableData, setTableData] = useState([]);
  
  useEffect(() => {
      async function fetchTableData () {
      
      try {
        
        const response = await axios.get('http://localhost:5000/apiclientes');
        setTableData(response.data);
      } catch (error) {
        console.error(error);
      }
  
      };
      fetchTableData();
    },[tableData]); 
    
    async function handleDelete(id) {
      var confirma = window.confirm("deseja apagar?")
      if (confirma){
      try {
             await axios.delete(`http://localhost:5000/apiclientes/${id}`);
            alert('deletado com sucesso!');
      } catch (error) {
        console.error(error);
      }  
    }    
    }
  
  return (    

    <Container className='fundosala' fluid>
      <Row>
        
        <Cabecalho />
        
      </Row>
     
      <Row>
        
                <div className="table-container">
                    <div className="shadow bg-light border-primary text-center">
                        <h2>Clientes</h2>
                    </div>
                    <Table variant='dark' responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>CPF</th>
                                <th>Nome</th>
                                <th>cep</th>
                                <th>telefone</th>
                                <th>email</th>
                                <th>Editar</th>
                                <th>Apagar</th>
     
                                
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => {
                                return (
                            <tr key={index} data-toggle="tooltip" title={row.cep}>
                                <td>{row.cpf}</td>
                                <td>{row.nome}</td>
                                <td>{row.cep}</td>
                                <td>{row.tel}</td>
                                <td>{row.email}</td>
                             
                                
                                
                                <td>
                                  <Link to={`/clientesmodal/${row._id}`} >
                                    <Image
                                          src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
                                          alt="editar"
                                          className="rounded-circle"
                                          width="30"
                                          height="30"
                                    />
                                  </Link>
                                </td>
                                <td>
                                    <Image 
                                      src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
                                      alt="apagar"
                                      className="rounded-circle"
                                      width="30"
                                      height="30"
                                      onClick={() =>handleDelete(row._id) } 
                                    />
                                </td>
                            </tr>
                            );
                            })}
                        </tbody>
                  

             
      
        <Row>
       
          <Link to="/clientesmodal/:id">
          <Button>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/4315/4315609.png"
              alt="Incluir"
              className="rounded-circle"
              width="30"
              height="30"
            />
          </Button>
          </Link>
        </Row> 
        </Table>
        </div>   
        </Row> 
        <Row className='slrslr'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </Row>
        <Footer/>
    </Container>
  );
}

export default Clientes;