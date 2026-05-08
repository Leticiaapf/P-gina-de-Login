# P-Clone de Login - Projeto Front-End

Este projeto é um **clone de tela de login**, desenvolvido com foco em praticar conceitos essenciais de desenvolvimento front-end, incluindo manipulação do DOM, validação de formulários e uso de armazenamento local.



##  Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla JS)


---

##  Funcionalidades

✔ Campo de usuário e senha
✔ Validação de formulário com HTML5 (`required`)
✔ Uso de `localStorage` para salvar o usuário
✔ Campo de senha com opção de mostrar/ocultar 
✔ Acessibilidade com teclado (Enter e Espaço)
✔ Limpeza automática do campo de senha por segurança
✔ Interface inspirada em login moderno

---

## Conceitos aplicados

### Manipulação do DOM

* `getElementById`
* `addEventListener`
* `classList.toggle`

###  Eventos

* `submit`
* `click`
* `keydown`
* `load`

###  Validação de formulário

* `checkValidity()`
* `reportValidity()`

###  Armazenamento local

* `localStorage.setItem()`
* `localStorage.getItem()`

 O usuário é salvo automaticamente, mas a senha **não é armazenada**, seguindo boas práticas de segurança.

---

##  Segurança

* A senha **não é salva no localStorage**
* O campo de senha é limpo após envio
* Estrutura preparada para futura integração com backend

---

##  Funcionalidade de mostrar/ocultar senha

O usuário pode alternar a visibilidade da senha através de um ícone:

*  Mostrar senha
*  Ocultar senha

Também funciona com teclado para acessibilidade.

---

##  Estrutura do projeto

```
/projeto-login
│── index.html
│── style.css
│── script.js
```

---

##  Objetivo

Este projeto foi desenvolvido com o objetivo de:

* Praticar JavaScript na prática
* Entender como funciona um sistema de login (lado cliente)
* Melhorar habilidades em UI/UX
* Criar um projeto para portfólio

---
##  Melhorias futuras

* Integração com backend (Node.js, API, etc.)
* Sistema de autenticação real
* Criptografia de senha (hash)
* Responsividade avançada
* Animações e feedback visual

---

##  Observação

Este projeto é apenas para fins de estudo.
Não deve ser utilizado em produção sem implementação de segurança adequada.

---

##  Autora

Desenvolvido por **Letícia Ferreira** 🚀
Estudante de Análise e Desenvolvimento de Sistemas e Desenvolvedora Front-End em evolução.
