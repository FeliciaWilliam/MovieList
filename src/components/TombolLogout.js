import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

const TombolLogout = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <Button variant="danger" onClick={() => logout()}>
                Logout
            </Button>
        )
    )
}

export default TombolLogout
