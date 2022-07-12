import { format, parseISO } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
export const Date = ({ date, ...props }) => {
  return (
    <div
      {...props}
      className={`flex flex-row items-center justify-center text-primary gap-2 ${props.className}`}
    >
      <div className={`${props.className}`}>
        <FontAwesomeIcon icon={faCalendar} className="cursor-pointer" />
      </div>
      <p className={`text-base ${props.className}`}>
        {format(parseISO(date), 'dd/MM/yyyy')}
      </p>
    </div>
  )
}
