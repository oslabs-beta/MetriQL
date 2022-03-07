import Schema from '../client/components/Schema';
import Metric from '../client/components/Metric';
import Meta from '../client/components/Meta';
import QueryInput from '../client/components/QueryInput';
import Result from '../client/components/Result';
import SideBar from '../client/components/SideBar';

function MainPage () {
  return (
    <div>
      <Meta title='Work Space' />
        <h1>add metric logic here</h1>
        <SideBar />
        <Schema />
        <Metric />
        <QueryInput />
        <Result />
    </div>
  )
}

export default MainPage