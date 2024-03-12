import Card from "./components/Card";

function App() {
  return (
    <>
      <main className="max-w-screen-lg mx-auto p-4">
        <section className="grid grid-cols-4 gap-4">
          <Card
            title="Jujutsu Kaisen"
            description="Esta es una tarjeta de ejemplo"
            image="https://via.placeholder.com/300"
          />
          <Card
            title="Naruto"
            description="Esta es una tarjeta de ejemplo"
            image="https://via.placeholder.com/300"
          />
          <Card
            title="Dragon Ball Z"
            description="Esta es una tarjeta de ejemplo"
            image="https://via.placeholder.com/300"
          />
          <Card
            title="Elfen Died"
            description="Esta es una tarjeta de ejemplo"
            image="https://via.placeholder.com/300"
          />
            <Card
            title="Elfen Died"
            description="Esta es una tarjeta de ejemplo"
            image="https://via.placeholder.com/300"
          />
            <Card
            title="Elfen Died"
            description="Esta es una tarjeta de ejemplo"
            image="https://via.placeholder.com/300"
          />
        </section>
      </main>
    </>
  );
}

export default App;
