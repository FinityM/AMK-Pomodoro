import { CircularProgressbar ,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Timer(){

    const workColor = '#9FC5FF';
    const breakColor = '#FFC59F';

    return(

        <div>

<CircularProgressbar value={100} text={'25:00'}/>


        </div>
    );
}

export default Timer;