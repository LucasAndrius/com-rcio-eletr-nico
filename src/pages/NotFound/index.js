import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styled';


const Page = () => {
    return (
        
        <Container>
        <Link to="/" className="link">Votar a Home
            <div>
                NotFound<span>404</span>
            </div>
        </Link>
        </Container>
    );
}

export default Page;