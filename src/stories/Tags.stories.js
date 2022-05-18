import { useArgs } from "@storybook/client-api";
import AllTags from "../components/Tags/Tags";

export default {
  title: "Tags",
  component: AllTags,
};

const tagsData = {
  selected: ["Новые"],
  values: [
    "Все",
    "Новые",
    "В обработке",
    "Готов к выдаче",
    "Доставляется",
    "Выданные",
    "На возврате",
    "Возвращенные",
    "Отменные",
  ],
  handleChange: () => {},
};

const TagsTemplate = (args) => {
  const [{ selected }, updateArgs] = useArgs();
  console.log(selected);
  args.handleChange = (name) => {
    if (selected.includes(name)) {
      const newSelected = selected.filter((item) => item !== name);
      updateArgs({ selected: newSelected });
    } else {
      updateArgs({ selected: [name] });
    }
  };
  return <AllTags {...args}></AllTags>;
};
export const Tags = TagsTemplate.bind({});
Tags.args = {
  tags: tagsData.values,
  selected: tagsData.selected,
  handleChange: tagsData.handleChange,
};
