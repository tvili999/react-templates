<% const componentName = args.name.split("/").pop(); -%>
---
to: "src/components/<%=args.name %>/<%=componentName %>.js"
overwrite: true
---
import React, { Component } from "react";

import "./<%=componentName %>.styl";

class <%=componentName %> extends Component {
    <%_ if(args.fetchFn) { -%>
    componentDidMount() {
        this.fetch();
    }

    componentDidUpdate(prevProps) {
        if(this.props !== prevProps)
            this.fetch();
    }

    fetch = () => {

    }

    <%_ } -%>
    render() {
        return (
            null
        );
    }
}

export default <%=componentName %>;