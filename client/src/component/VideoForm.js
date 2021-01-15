import React, { Component } from 'react'
import Axios from 'axios';

class VideoForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:'',
             videoUrl:'',
             videoType:''
        }
    }

    handleChange = (e) =>{
        const { name, value } = e.target;
        this.setState({
            [name]:value
        })
    }

    handleUpload = (e) =>{
        // e.preventDefault();
        const { title, videoUrl, videoType } = this.state; 
        const videoPayload = {
            title:title,
            videoUrl:videoUrl,
            videoType:videoType
        }
        Axios.post('http://localhost:5000/api/video', videoPayload)
        .then((res)=> {
            console.log(res)
        })
        
    }
    


    render() {
        const { title, videoUrl, videoType } = this.state; 
        return (
            <div>
                <div className="container">
                    <form>
                        <div class="mb-3">
                            <label className="form-label">Video Title</label>
                            <input type="text" className="form-control" name="title" value={title} onChange={(e)=> this.handleChange(e)} />
                        </div>
                        <div class="mb-3">
                            <label className="form-label">Video URL</label>
                            <input type="text" className="form-control" name="videoUrl" value={videoUrl} onChange={(e)=> this.handleChange(e)} />
                        </div>
                        <div class="mb-3">
                            <label className="form-label">Video Type</label>
                            <input type="text" className="form-control" name="videoType" value={videoType} onChange={(e)=> this.handleChange(e)} />
                        </div>
                        <div className="mb-3">
                            <button onClick={(e)=> this.handleUpload(e)} className="btn btn-primary">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default VideoForm
