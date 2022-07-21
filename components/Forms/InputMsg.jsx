import { Field, useField, ErrorMessage } from 'formik'

const InputMsg = ({ label, ...props }) => {
  // console.log(props)
  const { placeholder } = props
  const [field, meta, helpers] = useField(props)

  return (
    <div className={`flex flex-col`}>
      <label
        className="text-xl font-text font-normal text-primary uppercase font-FiraSans "
        htmlFor={field.name}
      >
        {label}{' '}
        <span className="font-FiraSans text-sm text-gray-500">
          {props.sublabel}
        </span>
      </label>
      <Field
        className={`form border-0 border-b-2 border-primary hover:border-accent focus:border-secondary text-black pt-20 ${
          meta.touched && meta.error && 'invalid:border-red-500'
        }`}
        {...field}
        {...props}
        autoComplete="off"
        placeholder={placeholder}
      />
      <ErrorMessage
        component="div"
        className={'text-primary'}
        name={field.name}
      />
    </div>
  )
}

export default InputMsg
