import {
  ErrorMessage,
  FieldAttributes,
  useField,
  useFormikContext,
} from "formik";
import cn from "classnames";
import { Select } from "antd";

interface Props extends FieldAttributes<any> {
  name: string;
  label?: string;
  showSearch?: boolean;
  changeevent?: any;
  customLabelFont?: string;
  labelclass?: string;
}

const SelectFieldset = ({ label, ...props }: Props) => {
  const classProps = props.className;
  const { name, customLabelFont, labelclass } = props;
  const [field, meta] = useField(props as Props);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { setFieldValue, values } = useFormikContext();
  return (
    <fieldset className={cn(classProps)}>
      {label && (
        <label
          htmlFor={name}
          className={
            labelclass ? labelclass : ("my-2 text-sm text-gray-700 block" + customLabelFont
              ? customLabelFont
              : "text-sm")
          }
        >
          {label}
        </label>
      )}
      <Select
        {...props}
        {...field}
        className={cn("w-full ") + customLabelFont && "w-full my-2.5"}
        size='large'
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onChange={(value, _) => {
          setFieldValue(name, value);
          props?.changeevent && props.changeevent(value);
        }}
        filterOption={(input, option: any) =>
          typeof option?.children === "string"
            ? option?.children?.toLowerCase().indexOf(input.toLowerCase()) >= 0
            : option?.value?.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      />
      <div className=' text-yellow-600 text-xs font-normal '>
        {meta.touched && meta.error ? <ErrorMessage name={name} /> : <div className="h-4"></div>}
      </div>
    </fieldset>
  );
};

export default SelectFieldset;
