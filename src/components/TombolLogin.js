import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

const TombolLogin = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <Button variant="danger" onClick={() => loginWithRedirect()}>
                Login
            </Button>
        )
    )
}

export default TombolLogin
