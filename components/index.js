import * as React from "react";
import dedent from "dedent";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark/index.cjs";

export function FooterBody() {
  const [clicks, setClicks] = React.useState(0);

  const doClick = React.useCallback(() => {
    console.log(clicks);
    setClicks(1 + clicks);
  }, [clicks, setClicks]);

  return (
    <div onClick={doClick}>
      this is some footer content{clicks > 0 && " " + clicks}
    </div>
  );
}

export const Code = ({ children }) => {
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={dedent(children).trim()}
      language="javascript"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
