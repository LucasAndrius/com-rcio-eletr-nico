import React from 'react';
import {Link} from 'react-router-dom';

const Page = () => {
    return (
        <div>
            <h1>pagina inicial</h1>

            <Link to="/about">Sobre</Link>
        </div>
    );
}

export default Page;