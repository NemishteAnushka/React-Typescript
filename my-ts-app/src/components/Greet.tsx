type GreetProps = {
  name: string;
  count: number;
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
  return (
    <>
    {
        props.isLoggedIn ? <div>
        <h1>Hello Good Morning {props.name}!</h1>
        <p>You have {props.count} new unread messages</p>
      </div> : <h1>Please Log In First !!!</h1>
    }

      
    </>
  );
}

export default Greet;
