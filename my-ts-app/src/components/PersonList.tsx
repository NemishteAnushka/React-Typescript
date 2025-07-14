type PersonListProps = {
  names: {
    firstName: string;
    lastName: string;
  }[];
};
function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.names?.map((items) => (
        <>
          <h1>{items?.firstName}</h1>
          <h1>{items?.lastName}</h1>
        </>
      ))}
    </div>
  );
}

export default PersonList;
