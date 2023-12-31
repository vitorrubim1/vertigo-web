import { Sidebar, Header, Container,Mapa} from '@/components';
import { Baron } from '@/components/Baron';
import { Button } from '@/components/Button';
import Partidas  from '@/components/Partidas';


export default function Home() {
  return (
    <main className="flex min-h-screen"> 
      <Sidebar />
      <div className='flex flex-col flex-1'>
        <Header />

        <Container>
          <Partidas />
          <Button />
          <Mapa />
          <Baron />
        </Container>
      </div>
    </main>
  );
}







