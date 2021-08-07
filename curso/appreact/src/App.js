import React from 'react';

// Exercicios
import Exercicio1 from './Exercicios/Exercicio1';
import Exercicio2 from './Exercicios/Exercicio2';
import Exercicio3 from './Exercicios/Exercicio3/Exercicio3';
import Exercicio4 from './Exercicios/Exercicio4/Exercicio4';
import Exercicio5 from './Exercicios/Exercicio5/Exercicio5';
import Exercicio6 from './Exercicios/Exercicio6/Exercicio6';
import Exercicio7 from './Exercicios/Exercicio7/Exercicio7';

// Exemplos
import Header from './Header';
import Form from './Form/Form';
import Footer from './Footer';
import useLocalStorage from './Exemplos/CustomHooks/Hooks/useLocalStorage';
import CustomHook from './Exemplos/CustomHooks/CustomHook';
import UseContextExemple from './Exemplos/Hooks/useContext/UseContextExemple';
import UseMemoExemple from './Exemplos/Hooks/useMemo/UseMemoExemple';
import UseCallbackExemple from './Exemplos/Hooks/useCallback/UseCallbackExemple';
import UseRefExemple from './Exemplos/Hooks/useRef/UseRefExemple';
import UseRefExemple2 from './Exemplos/Hooks/useRef/UseRefExemple2';
import UseRefExemple3 from './Exemplos/Hooks/useRef/UseRefExemple3';
import UseEffectExemplo from './Exemplos/Hooks/useEffect/UseEffectExemplo';
import UseEffectExemplo2 from './Exemplos/Hooks/useEffect/UseEffectExemplo2';
import UseEffectExemplo3 from './Exemplos/Hooks/useEffect/UseEffectExemplo3';
import UseEffectExemplo4 from './Exemplos/Hooks/useEffect/UseEffectExemplo4';
import UseEffectExemplo5 from './Exemplos/Hooks/useEffect/UseEffectExemplo5';
import UseStateExemple from './Exemplos/Hooks/useState/UseStateExemple';
import UseStateExemple2 from './Exemplos/Hooks/useState/UseStateExemple2';
import UseStateExemple3 from './Exemplos/Hooks/useState/UseStateExemple3/UseStateExemple3';
import UseStateExemple4 from './Exemplos/Hooks/useState/UseStateExemple4';
import UseStateExemple5 from './Exemplos/Hooks/useState/UseStateExemple5';
import UseStateExemple6 from './Exemplos/Hooks/useState/UseStateExemple6';
import UseStateExemple7 from './Exemplos/Hooks/useState/UseStateExemple7';
import Input from './Form/Input';
import InputExemple from './Exemplos/Formulários/Input/InputExemple';
import FormExemple from './Exemplos/Formulários/Input/FormExemple';
import FormMultiFieldsExemple from './Exemplos/Formulários/Input/FormMultiFieldsExemple';
import FormObjectExemple from './Exemplos/Formulários/Input/FormObjectExemple';
import TextareaExemple from './Exemplos/Formulários/Textarea/TextareaExemple';
import SelectExemple from './Exemplos/Formulários/Select/SelectExemple';
import RadioExemple from './Exemplos/Formulários/Radio/RadioExemple';
import RadioExemple2 from './Exemplos/Formulários/Radio/RadioExemple2';
import CheckboxExemple from './Exemplos/Formulários/Checkbox/CheckboxExemple';
import CheckboxExemple2 from './Exemplos/Formulários/Checkbox/CheckboxExemple2';
import Exercicio8 from './Exercicios/Exercicio8/Exercicio8';
import FormComponentsExemple from './Exemplos/Formulários/Componentes de formulário/FormComponentsExemple';
import ValidationExemple from './Exemplos/Formulários/Validacao/ValidationExemple';
import UseFormExemple from './Exemplos/Formulários/useForm/UseFormExemple';
import Exercicio9 from './Exercicios/Exercicio9/Exercicio9';
import CssImportExemple from './Exemplos/Formas de usar o CSS/CSS Import/CssImportExemple';
import CssImportExemple2 from './Exemplos/Formas de usar o CSS/CSS Import/CssImportExemple2';
import CssImportExemple3 from './Exemplos/Formas de usar o CSS/CSS Import/CssImportExemple3';
import CssModulesExemple from './Exemplos/Formas de usar o CSS/CSS Modules/CssModulesExemple';
import CssStyledComponentsExemple from './Exemplos/Formas de usar o CSS/CSS Styled Components/CssStyledComponentsExemple';
import CssStyledComponentsExemple2 from './Exemplos/Formas de usar o CSS/CSS Styled Components/CssStyledComponentsExemple2';
import CssStyledComponentsExemple3 from './Exemplos/Formas de usar o CSS/CSS Styled Components/CssStyledComponentsExemple3';
import ExempleBootstrap5 from './Exemplos/Formas de usar o CSS/CSS Frameworks/Exemple Bootstrap5/ExempleBootstrap5';
import ExempleReactBootstrap from './Exemplos/Formas de usar o CSS/CSS Frameworks/Exemple React-Bootstrap/ExempleReactBootstrap';
import ExempleCssAnimation from './Exemplos/Formas de usar o CSS/CSS Animações/Exemplo Animation/ExempleCssAnimation';
import ExempleCssSlide from './Exemplos/Formas de usar o CSS/CSS Animações/Exemplo Slide/ExempleCssSlide';
import CssImagesExemple1 from './Exemplos/Formas de usar o CSS/CSS Imagens/CssImagesExemple1';
import CssImagesExemple2 from './Exemplos/Formas de usar o CSS/CSS Imagens/CssImagesExemple2/CssImagesExemple2';
import CssImagesExemple3 from './Exemplos/Formas de usar o CSS/CSS Imagens/CssImagesExemple3/CssImagesExemple3';
import ReactRouterDomExemple1 from './Exemplos/React Router/React Router Dom/ReactRouterDomExemple1';
import LinkExemple1 from './Exemplos/React Router/Link/LinkExemple1';
import NavLinkExemple2 from './Exemplos/React Router/Link/NavLinkExemple2';
import UseNavigateExemple3 from './Exemplos/React Router/Link/UseNavigateExemple3/UseNavigateExemple3';
import UseParamsExemple1 from './Exemplos/React Router/useParams/UseParamsExemple1';
import NestedRoutesExemple1 from './Exemplos/React Router/Nested Routes/NestedRoutesExemple1';
import HeadExemple1 from './Exemplos/React Router/Head/Head/HeadExemple1';
import HeadExemple2 from './Exemplos/React Router/Head/Helmet/HeadExemple2';
import Exercicio10 from './Exercicios/Exercicio10/Exercicio10';
import Exercicio10Corrigido from './Exercicios/Exercicio10-corrigido/src/Exercicio10Corrigido';

const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto} {children}
    </h1>
  );
};

const App = () => {
  return (
    <>
      {/* ** Exercicos ** */}
      {/* <Exercicio1 /> */}
      {/* <Exercicio2 /> */}
      {/* <Exercicio3 /> */}
      {/* <Exercicio4 /> */}
      {/* <Exercicio5 /> */}
      {/* <Exercicio6 /> */}
      {/* <Exercicio7 /> */}
      {/* <Exercicio8 /> */}
      {/* <Exercicio9 /> */}
      {/* <Exercicio10 /> */}
      <Exercicio10Corrigido />

      {/* ** Exemplos ** */}

      {/* <Header />
      <Titulo cor="green" texto="Exercicios">
        de React
      </Titulo> */}

      {/* * Exemplos de useState * */}
      {/* <UseStateExemple /> */}
      {/* <UseStateExemple2 /> */}
      {/* <UseStateExemple3 /> */}
      {/* <UseStateExemple4 /> */}
      {/* <UseStateExemple5 /> */}
      {/* <UseStateExemple6 /> */}
      {/* <UseStateExemple7 /> */}

      {/* * Exemplos de useEffect * */}
      {/* <UseEffectExemplo /> */}
      {/* <UseEffectExemplo2 /> */}
      {/* <UseEffectExemplo3 /> */}
      {/* <UseEffectExemplo4 /> */}
      {/* <UseEffectExemplo5 /> */}

      {/* * Exemplos de useRef * */}
      {/* <UseRefExemple /> */}
      {/* <UseRefExemple2 /> */}
      {/* <UseRefExemple3 /> */}

      {/* * Outros Exemplos * */}
      {/* <UseCallbackExemple /> */}
      {/* <UseMemoExemple /> */}
      {/* <UseContextExemple /> */}
      {/* <CustomHook /> */}

      {/* * Exemplos de Formulários * */}
      {/* <InputExemple /> */}
      {/* <FormExemple /> */}
      {/* <FormMultiFieldsExemple /> */}
      {/* <FormObjectExemple /> */}
      {/* <TextareaExemple /> */}
      {/* <SelectExemple /> */}
      {/* <RadioExemple /> */}
      {/* <RadioExemple2 /> */}
      {/* <CheckboxExemple /> */}
      {/* <CheckboxExemple2 /> */}
      {/* <FormComponentsExemple /> */}
      {/* <ValidationExemple /> */}
      {/* <UseFormExemple /> */}

      {/* * Exemplos de CSS Import * */}
      {/* <CssImportExemple /> */}
      {/* <CssImportExemple2 /> */}
      {/* <CssImportExemple3 /> */}

      {/* * Exemplos CSS Modules * */}
      {/* <CssModulesExemple /> */}

      {/* * Exemplos CSS Styled Components  * */}
      {/* <CssStyledComponentsExemple /> */}
      {/* <CssStyledComponentsExemple2 /> */}
      {/* <CssStyledComponentsExemple3 /> */}

      {/* * Exemplos CSS Frameworks * */}
      {/* <ExempleBootstrap5 /> */}
      {/* <ExempleReactBootstrap /> */}

      {/* * Exemplos CSS Animações * */}
      {/* <ExempleCssAnimation /> */}
      {/* <ExempleCssSlide /> */}

      {/* * Exemplos CSS Imagens * */}
      {/* <CssImagesExemple1 /> */}
      {/* <CssImagesExemple2 /> */}
      {/* <CssImagesExemple3 /> */}

      {/* * Exemplos React Router * */}
      {/* <ReactRouterDomExemple1 /> */}
      {/* <LinkExemple1 /> */}
      {/* <NavLinkExemple2 /> */}
      {/* <UseNavigateExemple3 /> */}
      {/* <UseParamsExemple1 /> */}
      {/* <NestedRoutesExemple1 /> */}
      {/* <HeadExemple1 /> */}
      {/* <HeadExemple2 /> */}

      {/* <Form />
      <Footer /> */}
    </>
  );
};

export default App;
