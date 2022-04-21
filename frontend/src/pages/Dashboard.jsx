import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import GoalForm from "../components/GoalForm";
import GoalItem from "../components/GoalItem";
import Spinner from "../components/Spinner";
import Timer from "../components/PomodoroTimer";
import { getGoals, reset } from "../features/goals/goalSlice";
import { Container, Grid } from "@mui/material";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getGoals());

    if (!isError) {
      dispatch(reset);
    }

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Container>
        <section className="heading">
          <h1>Welcome {user && user.name}</h1>
        </section>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Timer />

          <GoalForm />

          <section className="content">
            {goals.length > 0 ? (
              <div className="goals">
                {goals.map((goal) => (
                  <GoalItem key={goal._id} goal={goal} />
                ))}
              </div>
            ) : (
              <h3>You have not set any goals</h3>
            )}
          </section>
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
