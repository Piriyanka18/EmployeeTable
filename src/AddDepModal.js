import React,{Component} from 'react';
import {Modal,Button,Row,Col,From} from 'react-bootstrap';

export class AddDepModal extends Component{
    constructor (props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'department',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                DepartmentId:null,
                DepartmentName:event.target.DepartmentName.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }
    render(){
        return(
            <div className="container">

  <Modal 
  {...this.props}
  size="lg"
  aria-labelled ="contained-modal-tittle-vcenter"
  centered
  >
    <Modal.Header clooseButton>
        <Modal.Title id ="contained-modal-title-vcenter">
            Add Department
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Row>
            <Col sm={6}>
                <From onSubmit = {this.handleSubmit}>
                    <From.Group controlId ="DepartmentName">
                        <From.Lable>Department</From.Lable>
                        <From.Control type="text" name ="DepartmentName" required
                        placeholder ="DepartmentName"/>
                    </From.Group>
                    <From.Group>
                        <Button variant="primary" type ="submit">
                            Add Department
                        </Button>
                    </From.Group>
                </From>
            </Col>
        </Row>
    </Modal.Body>
     <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
     </Modal.Footer>
    </Modal>              
            </div>
        )
    }
}