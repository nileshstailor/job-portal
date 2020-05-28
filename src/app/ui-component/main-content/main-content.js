import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {}
}

function MainContent(props) {
    debugger
    // var [categories, setCategories] = useState(props.categories);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
    });

    return (<div>

        MainContent
        
    </div>)
}



export default connect(mapStateToProps, mapDispatchToProps)(MainContent);