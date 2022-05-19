import Tag from "../components/Tags/Tag";
import { action } from "@storybook/addon-actions";
export default {
  title: "Tag",
  component: Tag,
  argTypes: {
    label: { defaultValue:"Tag", control: { type: "text" } },
    active: { defaultValue:false, control: "boolean" },
    size: { defaultValue:"medium",control: { type: "radio" }, options: ["small", "medium", "large"] },
    onClick:{action:"click"}
  },
};

export const Tag1 = (props) => {
  return (
      <Tag {...props}/>
)
}

