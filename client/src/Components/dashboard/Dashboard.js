import React,{useEffect, Fragment} from 'react';
import {connect} from 'react-redux';
import {getCurrentProfile} from '../../actions/profile';
import PropTypes from 'prop-types';
import Spinner from '../Layout/Spinner';
import {Link} from 'react-router-dom';
import DashboardAction from './DashboardAction';
const Dashboard =({getCurrentProfile,auth:{user},profile:{profile,loading}})=>{
    useEffect(()=>{
       getCurrentProfile();
    },[]);

    return loading && profile=== null ? <Spinner /> : <Fragment>
         <h1 className="large text-primary">Dashboard</h1>
         <p className="lead">
<i className="fas fa-user">Welcome { user && user.name }</i>
         </p>
         {profile != null ?
            <Fragment>
                <DashboardAction />
            </Fragment> 
                : 
            <Fragment>
                <p>You Don't Have Profile Yet.</p>
                <Link to='/create-profile' className='btn btn-primary my-1'>
                    Crate Profile
                </Link>
            </Fragment>}
    </Fragment>;
};

Dashboard.propTypes={
    getCurrentProfile:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
    profile:PropTypes.object.isRequired,
}
const mapStateToProps=state=>({
    auth:state.auth,
    profile:state.profile
});
export default connect(mapStateToProps,{getCurrentProfile})(Dashboard);