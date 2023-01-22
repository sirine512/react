import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Form.css';

function Formexp() {
  return (
    <Form>
      <div className="mb-3" controlId="formBasicEmail" id="formL">
        <Form.Label>E-mail</Form.Label><br/>
        <Form.Control type="email" placeholder="Enter your email..." id="info"/><br/>
        <Form.Text className="text-muted" id="text">
          We'll never share your email with anyone else.
        </Form.Text>
      </div>
      <div className="mb-3" controlId="formBasicPassword" id="formL">
        <Form.Label>Password</Form.Label><br/>
        <Form.Control type="password" placeholder="Password"  id="info" />
      </div>
      <div className="mb-3" controlId="formBasicCheckbox" id="check">
        <Form.Check type="checkbox" label="Check me out" id="checkF"/>
      </div>
      
      <Button variant="primary" type="submit" id="Button">
        Submit
      </Button>
    </Form>
  );
}

export default Formexp;