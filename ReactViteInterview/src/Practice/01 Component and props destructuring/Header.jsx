// Props desctructuring 


function Header({ movies: { movie1, movie2 }, nick, ...props }) {
  const { nick1, nick2 } = nick;
  const { color1, color2 } = props.color;

  return (
    <div>
      header
      <h1>User name is {props.user.name}</h1>
      <h1>User age is {props.user.age}</h1>
      <h1>User weight is {props.charac.weight}</h1>
      <h1>User height is {props.charac.height}</h1>
      <h1>movie 1 {movie1}</h1>
      <h1>movie 2 {movie2}</h1>
      <h1>nick 1 {nick1}</h1>
      <h1>nick 2 {nick2}</h1>
      <h1>color 1 {color1}</h1>
      <h1>color 2 {color2}</h1>
      <h1>Course 1 Name: {props.course1.course}</h1>
      <h1>Course 1 Price: {props.course1.price}</h1>
      <h1>Course 2 Name: {props.course2.course}</h1>
      <h1>Course 2 Price: {props.course2.price}</h1>
      <h1>Computer 1: {props.com1}</h1>
      <h1>Computer 2: {props.com2}</h1>
    </div>
  );
}

export default Header;