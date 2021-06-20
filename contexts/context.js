<% const componentName = args.name.split("/").pop(); -%>
---
to: "src/contexts/<%=args.name %>/<%=componentName %>.js"
overwrite: true
---
import React, { Component } from "react";

const { Provider, Consumer } = React.createContext();

class <%=componentName %>Provider extends Component {
    state = {

    }

    render = () => (
        <Provider value={this.state}>
            {this.props.children}
        </Provider>
    );
}

const with<%=componentName %> = Component => {
    const hoc = (props) => (
        <Consumer>
            {value => <Component <%=componentName.toLowerCase() %>={value} {...props} />}
        </Consumer>
    )

    hoc.displayName = "with<%=componentName %>()";

    return hoc;
}

export { <%=componentName %>Provider, with<%=componentName %> };
export const <%=componentName %>Consumer = Consumer;