export default function PrivacyPolice() {
  return (
    <section className="mx-[20%] flex flex-col gap-5 text-[#050505] sm:my-[3%] vs:my-[10%]">
      <h1 className="mb-4 text-center text-2xl">Política de Privacidade</h1>
      <p>
        <strong>Última atualização:</strong> 17 nov. 2024
      </p>
      <p>
        Bem-vindo ao nosso Kianda! A sua privacidade é muito importante para nós. Esta Política de Privacidade explica
        como tratamos as informações fornecidas por você.
      </p>

      <h2 className="font-semibold text-k_bronze">1. Informações que Coletamos</h2>
      <p>
        Coletamos informações pessoais quando você preenche nosso formulário de contato. Os dados coletados incluem:
      </p>
      <ul>
        <li>
          <strong>Nome:</strong> para identificá-lo ao responder à sua mensagem;
        </li>
        <li>
          <strong>E-mail:</strong> para podermos entrar em contato com você;
        </li>
        <li>
          <strong>Título e Mensagem:</strong> para entender e responder à sua solicitação.
        </li>
      </ul>

      <h2 className="font-semibold text-k_bronze">2. Como Usamos Suas Informações</h2>
      <p>As informações coletadas são usadas exclusivamente para:</p>
      <ul>
        <li>Responder às mensagens enviadas por meio do formulário de contato;</li>
        <li>Fornecer suporte ou informações solicitadas.</li>
      </ul>
      <p>
        Nós <strong>não compartilhamos suas informações com terceiros</strong>, exceto se exigido por lei.
      </p>

      <h2 className="font-semibold text-k_bronze">3. Retenção de Dados</h2>
      <p>
        As informações enviadas pelo formulário de contato são armazenadas de forma segura e mantidas pelo tempo
        necessário para resolver a solicitação. Após esse período, os dados podem ser excluídos de nossos sistemas.
      </p>

      <h2 className="font-semibold text-k_bronze">4. Segurança</h2>
      <p>
        Adotamos medidas técnicas e organizacionais para proteger as informações que você nos fornece contra acesso não
        autorizado, perda ou uso indevido.
      </p>

      <h2 className="font-semibold text-k_bronze">5. Links Externos</h2>
      <p>
        Nosso blog pode conter links para outros sites. Não somos responsáveis pelas práticas de privacidade desses
        sites. Recomendamos que você leia as políticas de privacidade de cada site visitado.
      </p>

      <h2 className="font-semibold text-k_bronze">6. Alterações nesta Política</h2>
      <p>
        Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você consulte esta página
        regularmente para estar ciente de quaisquer alterações. A data da última atualização está indicada no topo da
        página.
      </p>

      <h2 className="font-semibold text-k_bronze">7. Entre em Contato</h2>
      <p>
        Se você tiver dúvidas ou quiser solicitar a exclusão de seus dados, entre em contato conosco pelo e-mail:{" "}
        <a href="mailto:seuemail@dominio.com" className="font-semibold text-k_bronze">
          contato@kiandadiversidade.com
        </a>
        .
      </p>
    </section>
  );
}
