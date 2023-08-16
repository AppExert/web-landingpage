/* eslint-disable react/prop-types */
import {
  ErrorMessage,
  FieldAttributes,
  useField,
  useFormikContext,
} from "formik";
import cn from "classnames";
import { InputNumber, Input, DatePicker, AutoComplete } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import moment from "moment";
import "react-quill/dist/quill.snow.css";
import { useEffect } from "react";
const { RangePicker } = DatePicker;
const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;
const { TextArea } = Input;

interface OptionData {
  value: string;
}

interface Props extends FieldAttributes<any> {
  name: string;
  label?: string | JSX.Element;
  isNumeric?: boolean;
  isTextArea?: boolean;
  isDateMonth?: boolean;
  isRichTextArea?: boolean;
  isAutoComplete?: boolean;
  options?: OptionData[];
  password?: boolean;
  rows?: number;
  prefix?: JSX.Element;
  suffix?: JSX.Element;
  addonBefore?: JSX.Element;
  addonAfter?: JSX.Element;
  customLabelFont?: string;
  labelclass?: string;
  isRangePicker?: boolean;
}
type FieldProps = { name: string; label?: string | JSX.Element };
const Fieldset: React.FC<Props> = ({
  label,
  isNumeric,
  isTextArea,
  isRichTextArea,
  isDateMonth,
  isRangePicker,
  disableFutureDates,
  disablePastDates,
  isAutoComplete,
  prefix,
  customErrorMessage,
  suffix,
  addonAfter,
  addonBefore,
  password,
  customLabelFont,
  labelclass,
  ...props
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { setFieldValue, values, setErrors } = useFormikContext();
  const classProps = props.className;
  const { name, id } = props;
  const [field, meta] = useField(props as FieldProps);
  const educationDateRangeFormat = "MMM YYYY";
  useEffect(() => {
    setErrors({
      [name]: customErrorMessage,
    });
  }, [customErrorMessage]);
  return (
    <fieldset>
      {label && (
        <label
          htmlFor={name}
          className={
            labelclass
              ? labelclass
              : "my-2 text-gray-700 block font-medium" + customLabelFont
                ? customLabelFont + " pb-2 "
                : "text-sm "
          }
        >
          {label}
        </label>
      )}
      {password ? (
        <>
          <Input.Password
            {...field}
            {...props}
            // size='large'
            className={cn(classProps, "w-full" + customLabelFont && "my-2.5")}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </>
      ) : (
        <>
          {isNumeric ? (
            <InputNumber
              {...field}
              {...props}
              id={name}
              name={name}
              size='large'
              className={cn(classProps, "w-full" + customLabelFont && "my-2.5")}
              onChange={(value) => setFieldValue(name, value)}
            />
          ) : isTextArea ? (
            <TextArea
              rows={props.rows}
              {...field}
              {...props}
              id={name}
              name={name}
              className={cn(
                classProps,
                "w-full" + customLabelFont &&
                  "border-solid border-2 border-[#1B1929] bg-[#09071B] text-white rounded-lg my-2.5"
              )}
            />
          ) : isRichTextArea ? (
            <ReactQuill
              {...field}
              id={name}
              theme='snow'
              className={cn(
                classProps,
                "w-full" + customLabelFont && "my-2.5 rounded-md"
              )}
              value={field.value}
              onChange={(value: any) => setFieldValue(name, value)}
              onBlur={() => {
                // empty function
              }}
            />
          ) : isDateMonth ? (
            <DatePicker
              {...field}
              {...props}
              id={name}
              disabledDate={(current) =>
                disablePastDates
                  ? current && current < moment(disablePastDates).endOf("month")
                  : disableFutureDates &&
                    typeof disableFutureDates === "boolean"
                    ? current && current > moment().endOf("day")
                    : disableFutureDates &&
                    current &&
                    (current.isBefore(disableFutureDates) ||
                      current > moment().endOf("day"))
              }
              name={name}
              onChange={(value) => {
                setFieldValue(name, value);
              }}
              size='large'
              value={field.value ? moment(field.value, "YYYY-MM-DD") : null}
              className={cn(
                classProps,
                "w-full" + customLabelFont && "my-2.5 "
              )}
            />
          ) : isAutoComplete ? (
            <AutoComplete
              {...field}
              {...props}
              id={name}
              className={cn(classProps, "w-full" + customLabelFont && "my-2.5")}
              value={field.value}
              onChange={(value) => setFieldValue(name, value)}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              options={props.options}
              filterOption={(inputValue, option) =>
                option?.value
                  .toUpperCase()
                  .indexOf(inputValue.toUpperCase()) !== -1
              }
            ></AutoComplete>
          ) : isRangePicker ? (
            <RangePicker
              id={name}
              disabledDate={(current) =>
                disableFutureDates && current && current > moment().endOf("day")
              }
              format={educationDateRangeFormat}
              name={name}
              onChange={(value) => setFieldValue(name, value)}
              picker='month'
              size='large'
              value={
                field.value && field?.value[0] && field?.value[1]
                  ? [
                    moment(
                      new Date(field?.value[0]),
                      educationDateRangeFormat
                    ),
                    moment(
                      new Date(field?.value[1]),
                      educationDateRangeFormat
                    ),
                  ]
                  : [null, null]
              }
              className={cn(
                classProps,
                "w-full" + customLabelFont && "my-2.5 "
              )}
            />
          ) : (
            <Input
              {...field}
              {...props}
              id={id ? id : name}
              name={name}
              prefix={prefix}
              suffix={suffix}
              addonAfter={addonAfter}
              addonBefore={addonBefore}
              // size='large'
              className={cn(
                classProps,
                "w-full" + customLabelFont &&
                  "border-solid border-2 border-[#1B1929] h-[48px] text-white  rounded-lg bg-[#09071B] mt-2 placeholder-placeholder-gray"
              )}
            />
          )}
        </>
      )}

      <div className='text-[#ff5c5c] text-xs font-normal mt-[4px]'>
        {meta.touched && meta.error ? (
          <>
            <ErrorMessage name={name}>
              {(msg) => <>{customErrorMessage ? customErrorMessage : msg}</>}
            </ErrorMessage>
          </>
        ) : (
          <div className='h-4'></div>
        )}
      </div>
    </fieldset>
  );
};

export default Fieldset;
