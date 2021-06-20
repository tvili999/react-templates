<% const componentName = args.name.split("/").pop(); -%>
---
to: "src/components/<%=args.name %>/<%=componentName %>.styl"
overwrite: true
---
.<%=componentName %>
    display block