import { createElement } from "react";
import { Button } from "./Button";
import { Container } from "./Container";
import { Div } from "./Div";
import { H1 } from "./H1";
import { Icon } from "./Icon";
import { Img } from "./Img";
import Section from "./Section";

const keysToComponentMap = {
  Div: Div,
  Button: Button,
  Section: Section,
  Container: Container,
  H1: H1,
  Icon: Icon,
  Img: Img,
};

export const renderElement = (parentObj, mainObj) => {
  return createElement(
    keysToComponentMap[parentObj.componentName],

    {
      id: parentObj.id,
      type: parentObj.type,
      nodes: parentObj.nodes,
      settings: parentObj.settings,
    },

    parentObj.nodes.length > 0
      ? parentObj.nodes
          .map((childId) => mainObj[childId])
          .map((d) => renderElement(d, mainObj))
      : parentObj.settings?.general?.text
  );
};
