import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const handleLogin = event => {
        event.preventDefault();
        toast.warning('Sorry this service is unavailable now. Please try google log in');
    }
    return (
        <div className='container'>
            <div className="d-lg-flex justify-content-lg-center mt-4 w-75 mx-auto">
                <div className='border border-2 rounded-3 p-4'>
                    <Form onSubmit={handleLogin} className='mt-3 w-100 '>
                        <h3 className="text-center">Please Login</h3>
                        <Form.Group className="my-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                    <div className='d-flex align-items-center mt-4'>
                        <p className='border w-50'></p>
                        <p className='mx-2'>or</p>
                        <p className='border w-50'></p>
                    </div>
                    {error && <p className='text-danger'>{error.message}</p>}
                    <div className="d-flex justify-content-center">
                        <button onClick={handleGoogleSignIn} className="btn btn-outline-danger d-block">Google Sign In</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Login;