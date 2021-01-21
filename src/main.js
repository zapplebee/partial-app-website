import * as React from "react";
import { hydrate } from "react-dom";

import { FooterBody } from "../components";

hydrate(<FooterBody />, document.querySelector("footer"));
