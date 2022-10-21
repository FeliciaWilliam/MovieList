import { useAuth0 } from '@auth0/auth0-react';

const Profil = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <article className='column'>
                {user?.picture && <img src={user.picture} alt={user?.name} />}
                <p>Welcome, {user?.name}!</p>
            </article>
        )
    )
}

export default Profil
