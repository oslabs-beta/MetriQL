import Schema from '../client/components/Schema';
import Metric from '../client/components/Metric';
import Meta from '../client/components/Meta';
import QueryInput from '../client/components/QueryInput';
import Result from '../client/components/Result';
import SideBar from '../client/components/SideBar';
import classes from '../styles/Main.module.css'

function MainPage() {
  return (
    <div className={classes.main}>
      <Meta title='Work Space' />
      {/* <Schema /> */}
      <div className={classes.body}>
        <QueryInput />
        <div className={classes.results}>
          <Metric />
          <Result />
        </div>
      </div>
    </div>
  )
}

export default MainPage