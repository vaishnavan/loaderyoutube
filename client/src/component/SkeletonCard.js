import React, { Component } from 'react'
import Skeleton from 'react-loading-skeleton';
import './skeleton.css';

class SkeletonCard extends Component {
    render() {
        return (
            <div>
                <div className="loader_search">
                    <Skeleton width={800} height={40} />
                </div>
                <div className="loader_select">
                    <Skeleton width={200} height={40} />
                </div>
                <div className="loader">

                    {Array(30)
                        .fill().map((data, i) => {
                            return (
                                <div className="loader_main" key={i}>

                                    <div className="loader_video">
                                        <Skeleton duration={1} width={400} height={230} />
                                    </div>
                                    <div className="loader_title">
                                        <Skeleton height={20} width={200} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SkeletonCard
