import React, { Component } from 'react'
import Axios from 'axios';
import SkeletonCard from './SkeletonCard';
import './skeleton.css';
import FilterSearch from './FilterSearch';

class VideoDisplay extends Component {

    constructor(props) {
        super(props)

        this.state = {
            videoData: [],
            loading: false,
            namesearch: '',
            selectsearch: '',
            videoFilter: [],
            noresult:'',
            show: false
        }
    }



    componentDidMount() {
        this.setState({
            loading: true
        })
        const timer = setTimeout(() => {
            Axios.get('http://localhost:5000/api/allvideo')
                .then((res) => {
                    this.setState({
                        videoData: res.data,
                        loading: false
                    })
                })
        }, 3000)
        return () => clearTimeout(timer);
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSearch = (e) => {
        e.preventDefault();
        const { loading, videoData, namesearch, selectsearch, videoFilter } = this.state;
        let finalFilter = videoData;
        if (namesearch) {
            finalFilter = finalFilter.filter((searchadata) => {
                return searchadata.title.toLowerCase().includes(namesearch.toLowerCase())
            })
        }
        if (selectsearch) {
            finalFilter = finalFilter.filter((searchadata) => {
                return searchadata.videoType.toLowerCase().includes(selectsearch.toLowerCase())
            })
        }
        this.setState({
            videoFilter: finalFilter,
            show:true
        })
        if(videoFilter.length === 0){
            this.setState({
                noresult:`We couldn't find  "${namesearch}" result you looking for. please try another search `
            })
        }
    }

    handleClear = () =>{
        const { namesearch, selectsearch, show } = this.state;
        this.setState({
            namesearch:'',
            selectsearch:'',
            show:false
        })
    }

    render() {
        const { loading, videoData, videoFilter, show, noresult } = this.state;
        return (
            <div>
                {loading && <SkeletonCard />}
                
                {!loading &&
                    <div style={{marginTop:"10px"}}>
                        <FilterSearch handlechange={this.handleChange} handlesearch={this.handleSearch} handleclear={this.handleClear} />
                        {show ?
                            <div className="loader">
                                {videoFilter.reverse().map((item, i) => {
                                    return (
                                        <div className="loader_main" key={i}>
                                            <div className="loader_video">
                                                <iframe width="400" height="230" src={item.videoUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </div>
                                            <div className="loader_title">
                                                {item.title.length > 80 ? <p>{item.title.slice(0, 75)}...</p> : <p>{item.title}</p>}
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                            :
                            <div className="loader">
                                {videoData.reverse().map((item, i) => {
                                    return (
                                        <div className="loader_main" key={i}>
                                            <div className="loader_video">
                                                <iframe width="400" height="230" src={item.videoUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </div>
                                            <div className="loader_title">
                                                {item.title.length > 80 ? <p>{item.title.slice(0, 75)}...</p> : <p>{item.title}</p>}
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        }
                    </div>
                }
                {videoFilter.length === 0 ? <h3 style={{textAlign:"center"}}>{noresult}</h3>:''}
            </div>
        )
    }
}

export default VideoDisplay;
