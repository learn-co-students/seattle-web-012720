import React from 'react';
import Loader from '../assets/Loader'

const LoaderHOC = WrappedComponent => {

    return class LoaderHOC extends React.Component {

        isReady = () => {
            return this.props.loaded;
        }

        render() {
            return (<>{this.isReady()?<WrappedComponent {...this.props} />:<Loader />}</>)
        }

    }

}

export default LoaderHOC