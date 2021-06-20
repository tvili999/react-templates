<% const componentName = args.name.split("/").pop(); -%>
---
to: "src/contexts/<%=args.name %>/index.js"
overwrite: true
---
export { <%=componentName %>Provider, <%=componentName %>Consumer, with<%=componentName %> };

