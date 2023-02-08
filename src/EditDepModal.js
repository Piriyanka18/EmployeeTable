import React,{Component} from 'react';
import {Modal,Button,Row,Col,From} from 'react-bootstrap';

export class EditDepModal extends Component{
    constructor (props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'department',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                DepartmentId:event.target.DepartmentId.value,
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
            Edit Department
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Row>
            <Col sm={6}>
                <From onSubmit = {this.handleSubmit}>
                   <From.Group controlId ="DepartmentId">
                        <From.Lable>DepartmentId</From.Lable>
                        <From.Control type="text" name ="DepartmentId" required
                        disabled
                        defultValue={this.props.depid}
                        placeholder ="DepartmentId"/>
                    </From.Group>

                    <From.Group controlId ="DepartmentName">
                        <From.Lable>Department</From.Lable>
                        <From.Control type="text" name ="DepartmentName" required
                        defultValue={this.props.depname}
                        placeholder ="DepartmentName"/>
                    </From.Group>
                    <From.Group>
                        <Button variant="primary" type ="submit">
                            Update Department
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