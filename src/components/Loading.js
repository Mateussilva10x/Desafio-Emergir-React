import logo from "../assets/logo.png";

const Loading = () => {
  return (
    <main id="main">
      <section className="load">
        <img src={logo} alt="" />
        <h1>LOADING</h1>
        <div className="lds-ring">
          <div />
          <div />
          <div />
          <div />
        </div>
      </section>
    </main>
  );
};

export default Loading;
