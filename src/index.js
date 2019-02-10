import marked from "marked";

import markup from "../README.md";

document.getElementById("app").innerHTML = marked(markup);
