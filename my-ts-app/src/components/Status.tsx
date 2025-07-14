// if we give type string to status it will accept any string but we want only loading success and error so we give union
// Union with String Literals — it's a common pattern in TypeScript to limit values to a fixed set of strings.
type StatusProps = {
    status : "loading" | "success" | "error"
}
function Status(props : StatusProps) {

    let message;
    if(props.status === "loading"){
        message = "Loading ....."
    }else if(props.status === "success"){
        message = "Data Fetched Successfully"
    }else if(props.status === "error"){
        message = "Error for this"
    }
  return (
    <div>
      <h2> Status - {message}</h2>
    </div>
  )
}

export default Status
