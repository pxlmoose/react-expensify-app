// HOC HIGHER ORDER COMPONENT - component that renders anotehr component
//reuse code
//render highjacking
//prop manipulation
// abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is provate info, don' share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

//Retrun of this function is Higher Order Component
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <p>This is info for authenticated user</p> : <p>You're not authenticated</p>}
            <WrappedComponent {...props}/>
        </div>
    );
}
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="some info passed as props" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="some info passed as props" />, document.getElementById('app'));