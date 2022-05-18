import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
    }
    if (loading) {
        return <Loading />
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'>MY FUN TODO</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to='/addTodo'>Add Task</Nav.Link>
                        <Nav.Link as={Link} to='/mytodo'>My Todo List</Nav.Link>
                        {
                            user ?
                                <button className='btn btn-link' onClick={logOut}>Sign Out</button>
                                :
                                <Nav.Link as={Link} to='/login' className='ms-3 btn btn-primary text-white px-2'>Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;