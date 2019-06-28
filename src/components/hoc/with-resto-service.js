import React from 'react';
import RestoServiceContext from '../resto-service-context';

const WithRestoService = () => (Wrapped) => {
    return (props) => {
        return (
            <RestoServiceContext.Consumer>
                {
                    (Service) => {
                        return <Wrapped {...props} restoService={Service} />
                    }
                }
            </RestoServiceContext.Consumer>
        )
    }
};

export default WithRestoService;