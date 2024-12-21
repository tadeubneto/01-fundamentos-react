import { Header } from "./components/Header";
import "./globals.css";
import styles from "./App.module.css";
import { Post } from "./Post";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
         <Post />
        </main>
      </div>
    </div>
  );
}
export default App;
