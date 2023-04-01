import "./App.css"
import Video from "./pages/Video"

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          likes={0}
          messages={0}
          shares={0}
          name="Uener Coelho"
          description="Descrição aqui"
          music="Music Name"
          url="https://privaty.com.br/wp-content/uploads/2023/03/gato-1.mp4"
        />
        <Video
          likes={0}
          messages={0}
          shares={0}
          name="Uener Coelho"
          description="Descrição aqui"
          music="Music Name"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />
        <Video
          likes={0}
          messages={0}
          shares={0}
          name="Uener Coelho"
          description="Descrição aqui"
          music="Music Name"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
      </div>
    </div>
  )
}

export default App
