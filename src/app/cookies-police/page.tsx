export default function CookiesPolice() {
  return (
    <section className="mx-[20%] flex flex-col gap-5 text-[#050505] vs:my-[10%] sm:my-[3%]">
      <h1 className="mb-4 text-center text-2xl">Política de Cookies</h1>
      <p>
        <strong>Última atualização:</strong> 17 nov. 2024
      </p>

      <h2 className="font-semibold text-k_bronze">O que são Cookies?</h2>
      <p>
        Cookies são pequenos arquivos de texto armazenados no navegador do
        usuário ao visitar um site. Eles podem ser usados para melhorar a
        experiência do usuário, lembrar preferências ou rastrear atividades.
      </p>

      <h2 className="font-semibold text-k_bronze">
        Uso de Cookies no Nosso Site
      </h2>
      <p>
        Nosso site <strong>não utiliza cookies</strong> diretamente. Isso
        significa que:
      </p>
      <ul>
        <li>Não armazenamos ou rastreamos informações em seu navegador;</li>
        <li>
          Nenhum dado é coletado automaticamente para personalização ou
          marketing.
        </li>
      </ul>

      <h2 className="font-semibold text-k_bronze">Serviços de Terceiros</h2>
      <p>
        Se utilizarmos serviços de terceiros (como vídeos incorporados do
        YouTube ou botões de compartilhamento em redes sociais), esses serviços
        podem usar cookies próprios. Não controlamos esses cookies e
        recomendamos que você consulte as políticas de privacidade e cookies
        dessas plataformas.
      </p>

      <h2 className="font-semibold text-k_bronze">Gerenciamento de Cookies</h2>
      <p>
        Embora nosso site não use cookies diretamente, você pode gerenciar ou
        excluir cookies através das configurações do seu navegador. Aqui estão
        links para orientações em navegadores populares:
      </p>
      <ul>
        <li>
          <a
            href="https://support.google.com/chrome/answer/95647"
            target="_blank"
          >
            Google Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/pt-BR/kb/ativar-e-desativar-cookies"
            target="_blank"
          >
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac"
            target="_blank"
          >
            Safari
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
            target="_blank"
          >
            Microsoft Edge
          </a>
        </li>
      </ul>

      <h2 className="font-semibold text-k_bronze">Alterações nesta Política</h2>
      <p>
        Podemos revisar esta política periodicamente. Recomendamos verificar
        esta página regularmente para estar ciente de quaisquer atualizações.
      </p>

      <h2 className="font-semibold text-k_bronze">Entre em Contato</h2>
      <p>
        Se tiver dúvidas sobre nossa Política de Cookies, entre em contato
        conosco pelo e-mail:{" "}
        <a href="mailto:seuemail@dominio.com">seuemail@dominio.com</a>.
      </p>
    </section>
  );
}
