import { useEffect } from 'react'

const Spark = props => {
  useEffect(() => {
    const storageKey = `spark_${props.id}`
    const storedValue = localStorage.getItem(storageKey)
    if (storedValue === 'true') {
      props.setShow(false)
    }
  }, [])

  const sparkClick = () => {
    localStorage.setItem(`spark_${props.id}`, true)
    props.setShow(!props.show)
  }

  return (
    <div className='contenairSpark' onClick={sparkClick}>
      <div className='spark spark-1'>
        <svg viewBox='0 0 124.69 124.69' width='8px' fill='#fff'>
          <path
            d='M60,124.59l-13-29.73a9.58,9.58,0,0,0-5.4-5.14L11.35,78.29a9.58,9.58,0,0,1-.45-17.74l29.73-13a9.58,9.58,0,0,0,5.14-5.4L57.21,11.85A9.58,9.58,0,0,1,75,11.41l13,29.73a9.58,9.58,0,0,0,5.4,5.14l30.34,11.44a9.58,9.58,0,0,1,.45,17.74l-29.73,13a9.58,9.58,0,0,0-5.14,5.4L77.79,124.15A9.58,9.58,0,0,1,60,124.59Z'
            transform='translate(-5.16 -5.66)'
          />
        </svg>
      </div>
      <div className='spark spark-2'>
        <svg viewBox='0 0 124.69 124.69' width='7px' fill='#fff'>
          <path
            d='M60,124.59l-13-29.73a9.58,9.58,0,0,0-5.4-5.14L11.35,78.29a9.58,9.58,0,0,1-.45-17.74l29.73-13a9.58,9.58,0,0,0,5.14-5.4L57.21,11.85A9.58,9.58,0,0,1,75,11.41l13,29.73a9.58,9.58,0,0,0,5.4,5.14l30.34,11.44a9.58,9.58,0,0,1,.45,17.74l-29.73,13a9.58,9.58,0,0,0-5.14,5.4L77.79,124.15A9.58,9.58,0,0,1,60,124.59Z'
            transform='translate(-5.16 -5.66)'
          />
        </svg>
      </div>
      <div className='spark spark-3'>
        <svg viewBox='0 0 124.69 124.69' width='6px' fill='#fff'>
          <path
            d='M60,124.59l-13-29.73a9.58,9.58,0,0,0-5.4-5.14L11.35,78.29a9.58,9.58,0,0,1-.45-17.74l29.73-13a9.58,9.58,0,0,0,5.14-5.4L57.21,11.85A9.58,9.58,0,0,1,75,11.41l13,29.73a9.58,9.58,0,0,0,5.4,5.14l30.34,11.44a9.58,9.58,0,0,1,.45,17.74l-29.73,13a9.58,9.58,0,0,0-5.14,5.4L77.79,124.15A9.58,9.58,0,0,1,60,124.59Z'
            transform='translate(-5.16 -5.66)'
          />
        </svg>
      </div>
      <div className='spark spark-4'>
        <svg viewBox='0 0 124.69 124.69' width='9px' fill='#fff'>
          <path
            d='M60,124.59l-13-29.73a9.58,9.58,0,0,0-5.4-5.14L11.35,78.29a9.58,9.58,0,0,1-.45-17.74l29.73-13a9.58,9.58,0,0,0,5.14-5.4L57.21,11.85A9.58,9.58,0,0,1,75,11.41l13,29.73a9.58,9.58,0,0,0,5.4,5.14l30.34,11.44a9.58,9.58,0,0,1,.45,17.74l-29.73,13a9.58,9.58,0,0,0-5.14,5.4L77.79,124.15A9.58,9.58,0,0,1,60,124.59Z'
            transform='translate(-5.16 -5.66)'
          />
        </svg>
      </div>
    </div>
  )
}

export default Spark
