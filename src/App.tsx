import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import img from "/5.png";

const generateBars = (count: number) => {
  const stars = [...Array(Math.floor(count / 5))].map((_, i) => (
    <img className="w-6 h-6" key={i} src={img} alt="star" />
  ));
  const bars = "|".repeat(count % 5);
  return { stars, bars };
};

const App = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);
  const { stars, bars } = generateBars(count);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="flex items-center m-10">
        <div className="flex gap-5 border border-purple-500 p-10">
          <button
            onClick={() => dispatch(increment())}
            className="px-3 py-2 rounded-md bg-green-500 text-white"
          >
            Increment
          </button>
          <h1 className="text-3xl">{count}</h1>
          <button
            onClick={() => dispatch(decrement())}
            className="px-3 py-2 rounded-md bg-red-500 text-white"
          >
            Decrement
          </button>
        </div>
      </div>
      <div className="flex ">
        {stars}
        {bars}
      </div>
    </div>
  );
};

export default App;
