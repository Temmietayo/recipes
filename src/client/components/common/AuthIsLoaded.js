import React from 'react';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import '../../materialize.css';

export default function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth);
  if (!isLoaded(auth))
    return (
      <div className="preloader-wrapper big active justify-content-center align-items-center">
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    );
  return children;
}
