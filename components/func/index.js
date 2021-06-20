---
to: "src/components/<%=args.name %>/index.js"
overwrite: true
---
export { default } from "./<%=args.name.split("/").pop() %>.js";
