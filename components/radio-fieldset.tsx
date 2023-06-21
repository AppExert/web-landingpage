import { FieldAttributes, useField } from "formik";
import cn from "classnames";
import { Radio } from "antd";

interface Props extends FieldAttributes<any> {
  name: string;
  label?: any;
  defaultValue?: any;
  labelclass?: string;
}

const RadioFieldset = ({ label, ...props }: Props) => {
  const classProps = props.className;
  const { name, labelclass } = props;
  const [field] = useField(props as Props);
  return (
    <fieldset>
      {label && (
        <label
          htmlFor={name}
          className={
            labelclass ? labelclass : "my-2 text-sm text-gray-700 block"
          }
        >
          {label}
        </label>
      )}
      <Radio.Group
        {...props}
        {...field}
        defaultValue={props.defaultValue}
        className={cn(classProps, "w-full my-2.5 flex gap-2")}
      />
    </fieldset>
  );
};

export default RadioFieldset;
