"use client";
import { Questrial } from "next/font/google";
import { BoldTitle } from "@/components/general";

import "./styles.css";
import { usePost } from "./post.hook";
import Image from "next/image";
import exampleImage from "@/../public/imgs/blog_1.png";

export type ParamsTypes = {
  params: {
    post: string;
  };
};

export type Article = {
  id: number | string;
  title: string;
  createdData: string;
  author: string;
  description: string;
  content: string;
  status: string;
  image?: {
    id: string | number;
    url: string;
    file_name: string;
    type: string;
  };
  slug?: string;
  imageDescription: string;
  imageSub: string;
};

function createMarkup(content: string) {
  return { __html: content };
}

const questrialFont = Questrial({ weight: "400", subsets: ["latin"] });

export default function Post({ params }: ParamsTypes) {
  const { post, isGetPostLoading, isGetPostError, date } = usePost(params.post);

  if (isGetPostLoading) {
    return (
      <div className="grid grid-cols-blogCards gap-10 px-3 py-6 sm:gap-10 sm:px-6 lg:px-32 lg:py-16">
        <h1>Carregando...</h1>
      </div>
    );
  }

  if (isGetPostError) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <div
      className={`mb-4 grid px-2 lg:px-4 lg:py-4 xl:mx-[45px] xl:my-[69px] xl:grid-cols-[35%_65%] xl:px-0`}
    >
      <div className="mb-4 xl:mb-0 xl:pr-[40px]">
        <span className="mb-[1rem] flex w-full lg:h-[448px]">
          <Image
            src={exampleImage}
            alt=""
            className="w-full rounded-xl object-cover"
          />
        </span>
        <BoldTitle className="font-semibold lg:text-[1.75rem] xl:text-[2.3rem]">
          {/* {post?.title} */}
          Preto, pardo ou branco? afinal qual o meu lugar?
        </BoldTitle>
        <div className="flex flex-col text-[1rem] font-normal italic text-black lg:text-[1.1rem]">
          {post?.author && (
            <span className={``.trim()}>Por: {post.author} &nbsp;</span>
          )}
          {date && (
            <time dateTime="2022-10-10" className="not-italic">
              {String(
                date.getDate() +
                  "/" +
                  date.getMonth() +
                  "/" +
                  date.getFullYear(),
              )}
            </time>
          )}
        </div>
      </div>
      <div className="h-[50vh] w-full overflow-y-auto rounded-xl bg-k_green_light text-white lg:h-[987px]">
        {/* <span
          className="content-post text-[1.125rem]"
          dangerouslySetInnerHTML={createMarkup(
            post?.content ? post?.content : "",
          )}
        /> */}
        <span className="flex w-full px-4 py-4 text-[1rem] lg:px-[33px] lg:py-[17px] lg:text-[1.2rem]">
          <p>
            É possível vermos manifestações em redes sociais, programas
            televisivos e dúvidas entre pessoas próximas, quando o assunto é
            declaração racial. As pessoas brancas e negras com pele retinta,
            facilmente conseguem identificar o seu lugar e possuem determinadas
            facilidades para demarcar a sua cor ou raça. Em meio a isso, entre o
            branco e o negro retinto, estão as pessoas negras de pele mais
            clara, menos retintas, que por vezes possui a sensação de
            não-pertença a um grupo racial e também de não-lugar. “Escuro demais
            para ser branco, claro demais para ser negro”, é o que dizem. A
            início, precisamos entender um pouco sobre raça e autodeclaração, o
            contexto histórico e significado atual, para isso, entende-se que ao
            falarmos sobre raça, sendo branca ou negra, não estamos atribuindo
            características biologizantes. Há mais de um século a ciência
            descartou a ideia de hierarquias raciais por atribuições biológicas,
            e vale lembrar que milhões de pessoas morreram e foram escravizadas
            ao redor do planeta por serem identificadas como “raças inferiores”.
            <br />
            <br />
            Ao ler sobre a historicidade do termo, é possível compreender que
            ele deixou consequências na sociedade em que vivemos, a exemplo, a
            situação de vulnerabilidade social que as pessoas negras geralmente
            se encontram, com diversos dados que apontam as desvantagens em
            relação a emprego, renda, educação, alimentação, moradia e outras.
            Com isso, o termo raça passou a ser utilizado pela sociologia para
            explicar as relações sociais entre as pessoas brancas e negras, no
            Brasil. Entende-se que atribuir ou determinar um comportamento ao
            grupo racial de pessoas negras, devido a sua aparência, como se ao
            nascer negro você automaticamente torna-se “perigoso”, é racismo.
            <br />
            <br />
            Raça é pensada para a garantia de direitos e aplicação de políticas
            públicas para as minorias sociais. Pensando na categoria negra, o
            IBGE faz uma divisão entre pessoas pretas e pardas, que por
            questões, prefiro chamar de pessoas negras mais retintas e menos
            retintas, tendo em vista que, assim como a pele branca, a pele negra
            possui diferentes tons, e desta forma não corre-se o risco de anular
            a identidade racial de uma outra pessoa. No Brasil, o tom de pele
            não é a única característica utilizada para identificar uma pessoa
            negra, mas também o tipo e formato de cabelo, nariz, boca ou olhos.
            <br />
            <br />
            Desde 1872, o nosso país utiliza a classificação por “cor de pele”,
            sendo branca, preta e parda as cores mais frequentes, e em 1991, a
            categoria étnica indígena foi acrescentada. Pensemos que,
            historicamente as categorias preta e parda eram as únicas aplicadas
            à parcela escrava da população (existiam também os que nasceram
            livres ou os que foram auforriados) mas, ainda que esses tons fossem
            atribuídos as pessoas em situação de escravidão, é possível
            <br />
            <br />
            identificar estudos que falam sobre as pessoas negras de pele mais
            clara possuirem determinados acessos, como a casa dos seus donos ou
            as roupas e sobras de alimentações que seriam descartadas, enquando
            as com pele mais escura alimentavam-se de tripas e outras partes dos
            animais que não eram utilizadas. Isso também teria um reflexo na
            forma de trabalho, enquanto uns poderiam exercer funções domésticas,
            os outros trabalhavam nas plantações. O sistema estrutural deste
            país, foi pensado de forma a impactar a realidade das pessoas negras
            no cenário atual e futuro. O branco sabe que é branco, a sociedade
            mostra o lugar que eles ocupam, de privilégio e vantagem, mas
            vivemos um histórico de mais de 400 anos de conflito, em que as
            pessoas negras de pele mais retinta vivenciam o racismo de forma
            mais explícita e violenta, por isso, sem perceber, podem anular a
            vivência e construção identitária dos outros, gerando nestes uma
            sensação de não-pertença e não-lugar. Isso é resquicio da
            escravidão, estruturando a nossa forma de pensar e agir.
          </p>
        </span>
      </div>
    </div>
  );
}
