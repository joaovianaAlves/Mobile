"use client";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col">
      <h1>Bem-vindo à NexTech Connect</h1>
      <p>Sua plataforma de tecnologia tudo-em-um!</p>

      <div className="latest-updates">
        <h2>Últimas Atualizações</h2>
        <ul>
          <li>Novo serviço lançado: Consultoria em TI Avançada</li>
          <li>
            Atualização do aplicativo disponível! Baixe agora para obter novos
            recursos.
          </li>
          <li>
            Participe do nosso webinar gratuito sobre Segurança Cibernética.
          </li>
        </ul>
      </div>
    </div>
  );
}
