const Form = () => {
  return (
    <section id="section">
      <form>
         <label htmlFor="name">Name</label>
         <input id= "name" type="text" placeholder="Enter your name" autoComplete="name"/>
         <button>send</button>
      </form>
    </section>
  )
}

export default Form