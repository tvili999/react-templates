<% const componentName = args.name.split("/").pop(); -%>
---
to: "src/components/<%=args.name %>/<%=componentName %>.js"
overwrite: true
---
import React from "react";

import "./<%=componentName %>.styl";

const <%=componentName %> = () => (
    null
)

export default <%=componentName %>;
