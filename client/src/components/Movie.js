import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MoviePlayer from './Movie/MoviePlayer';
import LeftPanel from './Movie/LeftPanel';
import RightPanel from './Movie/RightPanel';
import * as reducerDownload from '../reducers/reducer_download';
import slug from 'slug';

class Curtain extends Component {    
    state = {
        open: false,
        stream_link: "",
        quality: ""
    }

    componentDidMount() {
        if (!this.props.selectedMovie || this.props.selectedMovie === undefined)
            this.props.history.push("/")
        if (this.props.movies) {
            let titles = [];
            for (var i = 0; i < this.props.movies.length; i++) {
                titles.push(slug(this.props.movies[i]._source.title));
            }
        }
    }
    
    handleDownload = async (url = "", magnet = "", quality = "") => {
        this.setState({open: true})
    }

    handleChange() {
        // OK
    }

    render() {
        if (this.props.selectedMovie) {
            return (
 
                <div className="curtain" onClick={() => this.handleDownload()}>  
                    <input type="checkbox" checked={this.state.open} onChange={this.handleChange} id={this.state.open ? "toggle-2b" : "toggle-2"}/>  
                    <LeftPanel />
                    <RightPanel />
                    <div className="prize">
                        {this.state.open && <MoviePlayer poster={this.props.selectedMovie._source.image} history={this.props.history} stream_link={this.state.stream_link} movie={this.props.selectedMovie} quality={this.state.quality} handleDownload={this.handleDownload} />}
                    </div>
                 </div>
                 
            ); 
        } else {
            return <div>    </div>
        }
       
    }
 }

 function mapStateToProps(state) {
    return {
        movies: state.search.results,
        selectedMovie: state.movies.selectedMovie
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onStartStreaming: ({stream_link}, history) => dispatch(reducerDownload.startStreaming({stream_link}, history))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Curtain));
