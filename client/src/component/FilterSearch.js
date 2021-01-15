import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import './filtersearch.css';

class FilterSearch extends Component {
    render() {
        const { handlechange, handlesearch, handleclear } = this.props;
        return (
            <div>
                <button onClick={handleclear} >Clear</button>
                <div className="container main">
                    <form>
                        <div className="search_control">
                            <div className="search_bar">
                                <input type="text" placeholder="Search"  name="namesearch" onChange={handlechange} />
                            </div>
                            <button title="search" onClick={handlesearch}><Icon name="search"/></button>
                        </div>
                        <div className="select_bar">
                            <select className="form-control" onChange={handlechange} name="selectsearch" >
                                <option selected disabled>Select by Type</option>
                                <option value="songs">Songs</option>
                                <option value="trailer">Trailer</option>
                                <option value="comedy">Comedy</option>
                                <option value="sport">Sport</option>
                                <option value="Tv">TV</option>
                            </select>
                        </div><br/>
                        

                    </form>
                </div>
            </div>
        )
    }
}

export default FilterSearch
