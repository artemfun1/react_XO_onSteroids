import { Game } from "../components/game-new/game";
import { Header } from "../components/header";
import {UiTextField} from '../components/uikit/ui-text_field'

export default function HomePage() {
  return (
    <HomePageLayout header={<Header />}>
     

      <UiTextField 
      label='Label' placeholder='Placeholder' required 
      helperText='Helper text'
      errorText='Error text'
        />
         <Game />
    </HomePageLayout>
    
  );
}

function HomePageLayout({ header, children }) {
  return (
    <div className="bg-slate-50 min-h-screen ">
      {header}
      <main className="pt-6 mx-auto w-max">{children}</main>
    </div>
  );
}
