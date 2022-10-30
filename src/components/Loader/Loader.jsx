import { ThreeCircles } from  'react-loader-spinner'
import styles from './Loader.module.css'

export function Loader() {
    return (
    <ThreeCircles
  height="100"
  width="100"
  color="#191970"
  wrapperStyle={{}}
  wrapperClass={styles.grid}
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""

/>
    )  
}  
